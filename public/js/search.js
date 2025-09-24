const urlInput = document.querySelector(".url-input");
const goBtn = document.querySelector(".go-btn");
const backBtn = document.querySelector("#back-btn");
const forwardBtn = document.querySelector("#forward-btn");
const refreshBtn = document.querySelector("#refresh-btn");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const tabBar = document.querySelector(".tab-bar");
const newTabBtn = document.querySelector(".new-tab-btn");
const browserContent = document.querySelector("#browser-content");
const urlFavicon = document.querySelector(".url-favicon");

let tabs = [];
let activeTabId = null;
let tabCounter = 0;

// Tab management functions
function createTab(url = null) {
  // Check tab limit
  if (tabs.length >= 5) {
    showTabLimitWarning();
    return null;
  }

  // Show performance warning at 3 tabs
  if (tabs.length >= 2) {
    showPerformanceWarning();
  }

  tabCounter++;
  const tabId = `tab-${tabCounter}`;

  const tab = {
    id: tabId,
    title: "New Tab",
    url: null,
    history: [],
    historyIndex: -1,
    element: null,
    contentElement: null,
    iframe: null,
    startPage: null,
  };

  // Create tab element
  const tabElement = document.createElement("div");
  tabElement.className = "tab";
  tabElement.id = tabId;
  tabElement.innerHTML = `
    <img class="tab-favicon" src="./assets/images/artclass_logo.png" alt="" />
    <span class="tab-title">${tab.title}</span>
    <button class="tab-close" onclick="closeTab('${tabId}')">&times;</button>
  `;

  // Create tab content
  const contentElement = document.createElement("div");
  contentElement.className = "tab-content";
  contentElement.id = `content-${tabId}`;

  // Create iframe for this tab
  const iframe = document.createElement("iframe");
  iframe.className = "browser-frame";
  iframe.style.display = "none";

  // Create start page for this tab
  const startPageElement = document.createElement("div");
  startPageElement.className = "start-page";
  startPageElement.innerHTML = `
    <canvas id="constellation-canvas-${tabId}"></canvas>
    <div class="start-content">
      <img src="./assets/images/artclass_logo.png" alt="Art Class" class="start-logo"/>
      <h1>Welcome to Art Class Search</h1>

      <div class="quick-links">
        <div class="link-row">
          <a href="#" class="quick-link" data-url="https://youtube.com">
            <img class="link-favicon" src="https://www.google.com/s2/favicons?domain=youtube.com&sz=32" alt="YouTube" />
          </a>
          <a href="#" class="quick-link" data-url="https://eaglercraft.com">
            <img class="link-favicon" src="https://www.google.com/s2/favicons?domain=eaglercraft.com&sz=32" alt="Eaglercraft" />
          </a>
          <a href="#" class="quick-link" data-url="https://spotify.com">
            <img class="link-favicon" src="https://www.google.com/s2/favicons?domain=spotify.com&sz=32" alt="Spotify" />
          </a>
          <a href="#" class="quick-link" data-url="https://netflix.com">
            <img class="link-favicon" src="https://www.google.com/s2/favicons?domain=netflix.com&sz=32" alt="Netflix" />
          </a>
        </div>
      </div>
    </div>
  `;

  contentElement.appendChild(iframe);
  contentElement.appendChild(startPageElement);

  tab.element = tabElement;
  tab.contentElement = contentElement;
  tab.iframe = iframe;
  tab.startPage = startPageElement;

  // Add event listener for tab switching
  tabElement.addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-close")) {
      switchToTab(tabId);
    }
  });

  // Add event listeners for quick links
  const quickLinks = startPageElement.querySelectorAll(".quick-link");
  quickLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = link.getAttribute("data-url");
      // Create new tab instead of navigating current tab
      const newTabId = createTab(url);
      if (newTabId) {
        switchToTab(newTabId);
      }
    });
  });

  // Add error handling for favicons
  const favicons = startPageElement.querySelectorAll(".link-favicon");
  favicons.forEach((favicon) => {
    favicon.addEventListener("error", () => {
      // Fallback to a generic icon if favicon fails to load
      favicon.src = "./assets/images/artclass_logo.png";
    });
  });

  // Insert tab before the new tab button
  tabBar.insertBefore(tabElement, newTabBtn);
  browserContent.appendChild(contentElement);

  tabs.push(tab);

  // Initialize constellation background for the start page
  initializeConstellation(tabId);

  // Navigate to URL if provided
  if (url) {
    navigateTabToUrl(tabId, url);
  }

  return tabId;
}

// Favicon helpers
function getFaviconUrlFromHostname(hostname) {
  if (!hostname) return "./assets/images/artclass_logo.png";
  return `https://icons.duckduckgo.com/ip3/${hostname}.ico`;
}

function updateFaviconsForTab(tab) {
  const hostname = tab.url ? getDomainFromUrl(tab.url) : null;
  const favSrc = getFaviconUrlFromHostname(hostname);
  const tabFav = tab.element.querySelector(".tab-favicon");
  if (tabFav) {
    tabFav.onerror = () => (tabFav.src = "./assets/images/artclass_logo.png");
    tabFav.src = favSrc;
  }
  if (activeTabId === tab.id && urlFavicon) {
    urlFavicon.onerror = () => (urlFavicon.src = "./assets/images/artclass_logo.png");
    urlFavicon.src = favSrc;
  }
}

function switchToTab(tabId) {
  // Remove active class from all tabs
  tabs.forEach((tab) => {
    tab.element.classList.remove("active");
    tab.contentElement.classList.remove("active");
  });

  // Add active class to selected tab
  const tab = tabs.find((t) => t.id === tabId);
  if (tab) {
    tab.element.classList.add("active");
    tab.contentElement.classList.add("active");
    activeTabId = tabId;

    // Update UI based on tab state
    updateUIForTab(tab);
  }
}

function closeTab(tabId) {
  const tabIndex = tabs.findIndex((t) => t.id === tabId);
  if (tabIndex === -1) return;

  const tab = tabs[tabIndex];

  // Remove DOM elements
  tab.element.remove();
  tab.contentElement.remove();

  // Remove from tabs array
  tabs.splice(tabIndex, 1);

  // If this was the active tab, switch to another
  if (activeTabId === tabId) {
    if (tabs.length > 0) {
      // Switch to the previous tab, or first tab if this was the first
      const newActiveIndex = Math.max(0, tabIndex - 1);
      switchToTab(tabs[newActiveIndex].id);
    } else {
      // No tabs left, create a new one
      const newTabId = createTab();
      switchToTab(newTabId);
    }
  }
}

function navigateTabToUrl(tabId, inputValue) {
  const url = validateURL(inputValue);
  if (!url) {
    showError();
    return;
  }

  const tab = tabs.find((t) => t.id === tabId);
  if (!tab) return;

  // Update tab history
  tab.history = tab.history.slice(0, tab.historyIndex + 1);
  tab.history.push(url);
  tab.historyIndex = tab.history.length - 1;
  tab.url = url;

  // Update tab title
  tab.title = getDomainFromUrl(url);
  tab.element.querySelector(".tab-title").textContent = tab.title;

  // Update favicons
  updateFaviconsForTab(tab);

  // Navigate iframe
  tab.startPage.style.display = "none";
  tab.iframe.style.display = "block";
  tab.iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);

  // Update UI if this is the active tab
  if (activeTabId === tabId) {
    updateUIForTab(tab);
  }
}

function updateUIForTab(tab) {
  urlInput.value = tab.url || "";
  updateNavButtons(tab);
  // Sync address bar favicon
  if (urlFavicon) {
    const favSrc = tab.url
      ? getFaviconUrlFromHostname(getDomainFromUrl(tab.url))
      : "./assets/images/artclass_logo.png";
    urlFavicon.src = favSrc;
  }
}

function getActiveTab() {
  return tabs.find((t) => t.id === activeTabId);
}

function updateNavButtons(tab = null) {
  if (!tab) tab = getActiveTab();
  if (!tab) return;

  backBtn.disabled = tab.historyIndex <= 0;
  forwardBtn.disabled = tab.historyIndex >= tab.history.length - 1;
}

function navigateToUrl(inputValue) {
  if (activeTabId) {
    navigateTabToUrl(activeTabId, inputValue);
  }
}

function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return "New Tab";
  }
}

urlInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    navigateToUrl(urlInput.value);
  }
});

goBtn.addEventListener("click", function () {
  navigateToUrl(urlInput.value);
});

backBtn.addEventListener("click", function () {
  const tab = tabs.find((t) => t.id === activeTabId);
  if (tab && tab.historyIndex > 0) {
    tab.historyIndex--;
    const url = tab.history[tab.historyIndex];
    tab.iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    tab.url = url;

    // Update tab title
    tab.title = getDomainFromUrl(url);
    tab.element.querySelector(".tab-title").textContent = tab.title;

    // Update favicons
    updateFaviconsForTab(tab);

    // Update UI
    updateUIForTab(tab);
  }
});

forwardBtn.addEventListener("click", function () {
  const tab = tabs.find((t) => t.id === activeTabId);
  if (tab && tab.historyIndex < tab.history.length - 1) {
    tab.historyIndex++;
    const url = tab.history[tab.historyIndex];
    tab.iframe.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    tab.url = url;

    // Update tab title
    tab.title = getDomainFromUrl(url);
    tab.element.querySelector(".tab-title").textContent = tab.title;

    // Update favicons
    updateFaviconsForTab(tab);

    // Update UI
    updateUIForTab(tab);
  }
});

refreshBtn.addEventListener("click", function () {
  const tab = tabs.find((t) => t.id === activeTabId);
  if (tab && tab.iframe.src) {
    tab.iframe.src = tab.iframe.src;
  }
});

fullscreenBtn.addEventListener("click", function () {
  toggleFullscreen();
});

newTabBtn.addEventListener("click", function () {
  const newTabId = createTab();
  if (newTabId) {
    switchToTab(newTabId);
  }
});

// Initialize with first tab
window.addEventListener("DOMContentLoaded", function () {
  // Remove the existing static tab
  const existingTab = document.querySelector("#tab1");
  if (existingTab) {
    existingTab.remove();
  }

  // Create initial tab
  const params = new URLSearchParams(window.location.search);
  const initialUrl = params.get("q");

  const newTabId = createTab(initialUrl);
  switchToTab(newTabId);
});

function validateURL(input) {
  try {
    // input is a valid URL:
    // eg: https://example.com, https://example.com/test?q=param
    return new URL(input).toString();
  } catch (err) {
    // input was not a valid URL
  }

  try {
    // input is a valid URL when http:// is added to the start:
    // eg: example.com, https://example.com/test?q=param
    const url = new URL(`http://${input}`);
    // only if the hostname has a TLD/subdomain
    if (url.hostname.includes(".")) return url.toString();
  } catch (err) {
    // input was not valid URL
  }

  // Return null if not a valid URL
  return null;
}

function showError() {
  const errorMessage = document.getElementById("error-message");
  errorMessage.style.display = "block";
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 3000);
}

function showPerformanceWarning() {
  // Only show once per session
  if (sessionStorage.getItem("performanceWarningShown")) return;

  const warningDiv = document.createElement("div");
  warningDiv.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 165, 0, 0.9);
    color: black;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(255, 165, 0, 0.3);
    z-index: 10000;
    max-width: 300px;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  warningDiv.innerHTML = `
    <strong>Performance Warning</strong><br>
    Having multiple tabs may impact performance. Consider closing unused tabs.
  `;

  document.body.appendChild(warningDiv);
  sessionStorage.setItem("performanceWarningShown", "true");

  setTimeout(() => {
    if (warningDiv.parentNode) {
      warningDiv.remove();
    }
  }, 5000);
}

function showTabLimitWarning() {
  const warningDiv = document.createElement("div");
  warningDiv.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 107, 107, 0.9);
    color: white;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(255, 107, 107, 0.3);
    z-index: 10000;
    max-width: 300px;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  warningDiv.innerHTML = `
    <strong>Tab Limit Reached</strong><br>
    Maximum of 5 tabs allowed. Please close a tab to open a new one.
  `;

  document.body.appendChild(warningDiv);

  setTimeout(() => {
    if (warningDiv.parentNode) {
      warningDiv.remove();
    }
  }, 4000);
}

function goBackToSearch() {
  const tab = tabs.find((t) => t.id === activeTabId);
  if (tab) {
    tab.iframe.style.display = "none";
    tab.startPage.style.display = "flex";
    tab.url = null;
    tab.history = [];
    tab.historyIndex = -1;
    tab.title = "New Tab";
    tab.element.querySelector(".tab-title").textContent = "New Tab";
    updateFaviconsForTab(tab);
    updateUIForTab(tab);
  }
}

function toggleFullscreen() {
  const activeTab = getActiveTab();
  if (!activeTab) return;

  const activeContent = activeTab.contentElement;
  if (!activeContent) return;

  try {
    if (!document.fullscreenElement) {
      // Try to put the active tab content in fullscreen
      activeContent
        .requestFullscreen()
        .then(() => {
          // Success - content is now fullscreen
          updateFullscreenButton();
        })
        .catch((err) => {
          console.warn(
            "Browser fullscreen failed, using viewport fullscreen:",
            err
          );
          // Fallback: create viewport fullscreen experience
          makeTabContentFullViewport(activeContent);
        });
    } else {
      // Exit fullscreen
      document.exitFullscreen().then(() => {
        updateFullscreenButton();
      });
    }
  } catch (err) {
    console.warn("Fullscreen API not supported, using viewport fallback");
    makeTabContentFullViewport(activeContent);
  }
}

function makeTabContentFullViewport(contentElement) {
  const nav = document.querySelector("nav");
  const browserChrome = document.querySelector(".browser-chrome");

  // Toggle between fullscreen viewport and normal view
  if (contentElement.classList.contains("viewport-fullscreen")) {
    // Exit viewport fullscreen
    contentElement.classList.remove("viewport-fullscreen");
    if (nav) nav.style.display = "";
    if (browserChrome) browserChrome.style.display = "";
    document.body.style.overflow = "";

    updateFullscreenButton(false);
  } else {
    // Enter viewport fullscreen
    contentElement.classList.add("viewport-fullscreen");
    if (nav) nav.style.display = "none";
    if (browserChrome) browserChrome.style.display = "none";
    document.body.style.overflow = "hidden";

    updateFullscreenButton(true);
  }
}

function updateFullscreenButton(forceState = null) {
  const icon = fullscreenBtn.querySelector("i");
  const activeTab = getActiveTab();

  let isFullscreen = false;

  if (forceState !== null) {
    isFullscreen = forceState;
  } else if (document.fullscreenElement) {
    isFullscreen = true;
  } else if (
    activeTab &&
    activeTab.contentElement &&
    activeTab.contentElement.classList.contains("viewport-fullscreen")
  ) {
    isFullscreen = true;
  }

  if (isFullscreen) {
    icon.className = "fas fa-compress";
  } else {
    icon.className = "fas fa-expand";
  }
}

// Listen for fullscreen changes
document.addEventListener("fullscreenchange", () => {
  // If exiting fullscreen, make sure to clean up viewport fullscreen state
  if (!document.fullscreenElement) {
    const activeTab = getActiveTab();
    if (
      activeTab &&
      activeTab.contentElement &&
      activeTab.contentElement.classList.contains("viewport-fullscreen")
    ) {
      // Clean up viewport fullscreen when exiting browser fullscreen
      const nav = document.querySelector("nav");
      const browserChrome = document.querySelector(".browser-chrome");

      activeTab.contentElement.classList.remove("viewport-fullscreen");
      if (nav) nav.style.display = "";
      if (browserChrome) browserChrome.style.display = "";
      document.body.style.overflow = "";
    }
  }
  updateFullscreenButton();
});

// Constellation background for start pages
class ConstellationBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.mouse = { x: 0, y: 0 };
    this.maxDistance = 150;
    this.animationId = null;

    this.init();
    this.createStars();
    this.animate();
    this.bindEvents();
  }

  init() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  createStars() {
    const numStars = Math.floor(
      (this.canvas.width * this.canvas.height) / 8000
    );

    // Use seeded random for consistent star positions across tabs
    let seed = 12345;
    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    for (let i = 0; i < numStars; i++) {
      this.stars.push({
        x: seededRandom() * this.canvas.width,
        y: seededRandom() * this.canvas.height,
        size: seededRandom() * 2 + 0.5,
        opacity: 0.8,
        vx: 0,
        vy: 0,
      });
    }
  }

  drawStars() {
    this.stars.forEach((star) => {
      this.ctx.save();
      this.ctx.globalAlpha = star.opacity;
      this.ctx.fillStyle = "#ffffff";
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  drawConnections() {
    this.stars.forEach((star, i) => {
      // Connect to other nearby stars
      for (let j = i + 1; j < this.stars.length; j++) {
        const otherStar = this.stars[j];
        const distance = Math.sqrt(
          Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2)
        );

        if (distance < 120) {
          this.ctx.save();
          const opacity = (1 - distance / 120) * 0.6;
          this.ctx.globalAlpha = opacity;
          this.ctx.strokeStyle = "#ffffff";
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(star.x, star.y);
          this.ctx.lineTo(otherStar.x, otherStar.y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      }
    });
  }

  updateStars() {
    // Stars are now static - no movement
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateStars();
    this.drawConnections();
    this.drawStars();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  bindEvents() {
    const resizeHandler = () => {
      if (this.canvas && this.canvas.parentElement) {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.stars = [];
        this.createStars();
      }
    };

    window.addEventListener("resize", resizeHandler);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// Initialize constellation for new start pages
function initializeConstellation(tabId) {
  const canvasId = `constellation-canvas-${tabId}`;
  setTimeout(() => {
    new ConstellationBackground(canvasId);
  }, 100); // Small delay to ensure DOM is ready
}
