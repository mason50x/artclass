import { createBareServer } from "@tomphttp/bare-server-node";
import express from "express";
import { createServer } from "node:http";
import https from "node:https";
import "dotenv/config";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { join } from "node:path";
import { hostname } from "node:os";
import { fileURLToPath } from "url";

const publicPath = fileURLToPath(new URL("./public/", import.meta.url));

const bare = createBareServer("/bare/");
const app = express();

// Parse JSON bodies
app.use(express.json());

// Add error handling
app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).send("Internal Server Error");
});

app.use(express.static(publicPath));
app.use("/uv/", express.static(uvPath));

// Minimal proxy to OpenRouter Chat Completions API
// Expects: { messages: [{role, content}], model?: string, temperature?: number }
app.post("/api/ai-chat", async (req, res) => {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ error: "Server missing OPENROUTER_API_KEY env var" });
    }

    const { messages, model, temperature } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages[] is required" });
    }

    const chosenModel =
      model || process.env.OPENROUTER_MODEL || "qwen/qwen3-235b-a22b:free";

    const payload = JSON.stringify({
      model: chosenModel,
      messages,
      temperature: typeof temperature === "number" ? temperature : 0.7,
      // Request reasoning for models that support it
      ...(chosenModel.includes('qwen') ? {
        extra: {
          thinking: true,
          thinking_format: "json"
        }
      } : {}),
    });

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        // Recommended OpenRouter headers
        "HTTP-Referer": req.headers.origin || "http://localhost",
        "X-Title": "Art Class",
      },
    };

    const request = https.request(
      "https://openrouter.ai/api/v1/chat/completions",
      options,
      (orRes) => {
        let data = "";
        orRes.on("data", (chunk) => (data += chunk));
        orRes.on("end", () => {
          try {
            const parsed = JSON.parse(data);

            // Enhance response with reasoning extraction for Qwen models
            if (parsed.choices && parsed.choices[0] && parsed.choices[0].message) {
              const message = parsed.choices[0].message;

              // For Qwen models, extract thinking/reasoning from response
              if (message.content && message.content.includes('</think>')) {
                const parts = message.content.split('</think>');
                if (parts.length > 1) {
                  message.reasoning = parts[0].replace('<think>', '').trim();
                  message.content = parts.slice(1).join('</think>').trim();
                }
              }

              // Handle JSON thinking format for Qwen models
              if (message.extra && message.extra.thinking) {
                try {
                  const thinkingData = JSON.parse(message.extra.thinking);
                  if (thinkingData.thoughts) {
                    message.reasoning = Array.isArray(thinkingData.thoughts)
                      ? thinkingData.thoughts.join('\n')
                      : thinkingData.thoughts;
                  }
                } catch (e) {
                  // If parsing fails, use the raw thinking content
                  message.reasoning = message.extra.thinking;
                }
              }
            }

            // Pass through enhanced JSON response
            res.status(orRes.statusCode || 200).json(parsed);
          } catch (e) {
            res
              .status(502)
              .json({ error: "Invalid response from OpenRouter" });
          }
        });
      }
    );

    request.on("error", (err) => {
      console.error("OpenRouter request error:", err);
      res.status(502).json({ error: "Failed to reach OpenRouter" });
    });

    request.write(payload);
    request.end();
  } catch (error) {
    console.error("/api/ai-chat error:", error);
    res.status(500).json({ error: "Unexpected server error" });
  }
});

// Error for everything else
app.use((req, res) => {
  res.status(404);
  res.sendFile(join(publicPath, "404.html"));
});

const server = createServer();

server.on("request", (req, res) => {
  try {
    if (bare.shouldRoute(req)) {
      bare.routeRequest(req, res);
    } else {
      app(req, res);
    }
  } catch (error) {
    console.error("Request error:", error);
    if (!res.headersSent) {
      res.status(500).send("Server Error");
    }
  }
});

server.on("upgrade", (req, socket, head) => {
  try {
    if (bare.shouldRoute(req)) {
      bare.routeUpgrade(req, socket, head);
    } else {
      socket.end();
    }
  } catch (error) {
    console.error("Upgrade error:", error);
    socket.end();
  }
});

// Add global error handlers
server.on("error", (error) => {
  console.error("Server error:", error);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 3000;

server.on("listening", () => {
  const address = server.address();

  // by default we are listening on 0.0.0.0 (every interface)
  // we just need to list a few
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(
    `\thttp://${
      address.family === "IPv6" ? `[${address.address}]` : address.address
    }:${address.port}`
  );

  // Log memory usage periodically
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log(
      `Memory usage: RSS=${Math.round(
        memUsage.rss / 1024 / 1024
      )}MB, Heap=${Math.round(memUsage.heapUsed / 1024 / 1024)}MB`
    );
  }, 60000); // Every minute
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
