function setTab(
  name = document.querySelector("#tabname").value,
  icon = document.querySelector("#tabicon").value
) {
  localStorage.setItem("tabName", name);
  localStorage.setItem("tabIcon", icon);

  document.title = name;
  document.querySelector("link[rel='shortcut icon']").href = icon;
  if (localStorage.getItem("tabName"))
    document.querySelector("#tabname").value = localStorage.getItem("tabName");
  if (localStorage.getItem("tabIcon"))
    document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");
}

var tabPresets = {
  google: {
    name: "Google",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/1920px-Google_Favicon_2025.svg.png",
  },
  drive: {
    name: "My Drive - Google Drive",
    icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
  },
  docs: {
    name: "Google Docs",
    icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico",
  },
  classroom: {
    name: "Home",
    icon: "https://ssl.gstatic.com/classroom/ic_product_classroom_32.png",
  },
  default: {
    name: "Infinite",
    icon: "/assets/images/logo.png",
  },
};

function setTabPreset(tab) {
  setTab(tabPresets[tab].name, tabPresets[tab].icon);
}

function resetToDefault() {
  // Clear custom tab settings
  localStorage.removeItem("tabName");
  localStorage.removeItem("tabIcon");

  // Reset to default Infinite settings
  setTab(tabPresets.default.name, tabPresets.default.icon);

  // Clear the input fields
  document.querySelector("#tabname").value = "";
  document.querySelector("#tabicon").value = "";

  // Show confirmation
  const button = event.target;
  const originalText = button.textContent;
  button.textContent = "Reset Complete!";
  button.style.backgroundColor = "#27ae60";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = "#3498db";
  }, 2000);
}

if (localStorage.getItem("tabName"))
  document.querySelector("#tabname").value = localStorage.getItem("tabName");
if (localStorage.getItem("tabIcon"))
  document.querySelector("#tabicon").value = localStorage.getItem("tabIcon");

function sharePassword(button) {
  // Generate or get a shareable password/code
  const shareCode = generateShareCode();

  // Copy to clipboard
  navigator.clipboard
    .writeText(shareCode)
    .then(() => {
      showCopySuccess(button, shareCode);
    })
    .catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shareCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      showCopySuccess(button, shareCode);
    });
}

function showCopySuccess(button, shareCode) {
  console.log("showCopySuccess called with:", button, shareCode);

  const originalText = button.textContent;
  const originalBg = button.style.backgroundColor;

  // Simple visual feedback first
  button.textContent = `✓ Copied: ${shareCode}`;
  button.style.backgroundColor = "#27ae60";
  button.style.transform = "scale(1.05)";
  button.style.transition = "all 0.3s ease";

  // Add pulse animation
  button.style.animation = "pulse 0.6s ease-in-out";

  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = originalBg || "#2ecc71";
    button.style.transform = "scale(1)";
    button.style.animation = "";
  }, 3000);
}

// Hardcoded share codes
const SHARE_CODES = [
  "INF-ALPHA001",
  "INF-BETA2024",
  "INF-GAMMA99X",
  "INF-DELTA777",
  "INF-ECHO2025",
  "INF-FOXTROT1",
  "INF-GOLF456Z",
  "INF-HOTEL8X9",
  "INF-INDIA321",
  "INF-JULIET90A",
  "INF-KILO555B",
  "INF-LIMA789C",
  "INF-MIKE123D",
  "INF-NOVMBR4E",
  "INF-OSCAR66F",
  "INF-PAPA999G",
  "INF-QUEBEC7H",
  "INF-ROMEO88I",
  "INF-SIERRA9J",
  "INF-TANGO10K"
];

let currentCodeIndex = 0;

function generateShareCode() {
  // Return the next share code in the list, cycling back to start when done
  const code = SHARE_CODES[currentCodeIndex];
  currentCodeIndex = (currentCodeIndex + 1) % SHARE_CODES.length;
  return code;
}

function logout() {
  localStorage.clear();
  window.location.href = "/";
}

// Add auto-save event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Tab name auto-save
  document.querySelector("#tabname").addEventListener("input", function () {
    setTimeout(() => {
      setTab(this.value, document.querySelector("#tabicon").value);
    }, 300);
  });

  // Tab icon auto-save
  document.querySelector("#tabicon").addEventListener("input", function () {
    setTimeout(() => {
      setTab(document.querySelector("#tabname").value, this.value);
    }, 300);
  });
});
