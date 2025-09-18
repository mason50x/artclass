const frame = document.querySelector(".browser-frame")
const startPage = document.querySelector(".start-page")
const urlInput = document.querySelector(".url-input");
const goBtn = document.querySelector(".go-btn");
const backBtn = document.querySelector("#back-btn");
const forwardBtn = document.querySelector("#forward-btn");
const refreshBtn = document.querySelector("#refresh-btn");
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const tabTitle = document.querySelector(".tab-title");

let history = [];
let historyIndex = -1;

function navigateToUrl(inputValue) {
  const url = validateURL(inputValue);
  if (url) {
    startPage.style.display = 'none';
    frame.style.display = 'block';
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);

    // Update history
    history = history.slice(0, historyIndex + 1);
    history.push(url);
    historyIndex = history.length - 1;

    // Update navigation buttons
    updateNavButtons();

    // Update tab title
    updateTabTitle(url);

    // Update URL input
    urlInput.value = url;
  } else {
    showError();
  }
}

urlInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    navigateToUrl(urlInput.value);
  }
});

goBtn.addEventListener("click", function() {
  navigateToUrl(urlInput.value);
});

backBtn.addEventListener("click", function() {
  if (historyIndex > 0) {
    historyIndex--;
    const url = history[historyIndex];
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    urlInput.value = url;
    updateTabTitle(url);
    updateNavButtons();
  }
});

forwardBtn.addEventListener("click", function() {
  if (historyIndex < history.length - 1) {
    historyIndex++;
    const url = history[historyIndex];
    frame.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    urlInput.value = url;
    updateTabTitle(url);
    updateNavButtons();
  }
});

refreshBtn.addEventListener("click", function() {
  if (frame.src) {
    frame.src = frame.src;
  }
});

fullscreenBtn.addEventListener("click", function() {
  toggleFullscreen();
});

function updateNavButtons() {
  backBtn.disabled = historyIndex <= 0;
  forwardBtn.disabled = historyIndex >= history.length - 1;
}

function updateTabTitle(url) {
  try {
    const urlObj = new URL(url);
    tabTitle.textContent = urlObj.hostname;
  } catch (e) {
    tabTitle.textContent = "New Tab";
  }
}

var params = new URLSearchParams(window.location.search)
console.log("Searching for " + params.get("q"))
if (params.get("q")) {
  navigateToUrl(params.get("q"));
}

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
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}

function goBackToSearch() {
  frame.style.display = 'none';
  startPage.style.display = 'flex';
  urlInput.value = '';
  tabTitle.textContent = 'New Tab';
  history = [];
  historyIndex = -1;
  updateNavButtons();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.querySelector('.browser-container').requestFullscreen().catch(err => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}