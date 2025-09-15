const frame = document.querySelector("iframe")
const div = document.querySelector(".center-container")
frame.style.display = "none"
const input = document.querySelector("input");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const url = validateURL(input.value);
    if (url) {
      div.style.display = 'none'
      frame.style.display = 'block'
      document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(url);
    } else {
      showError();
    }
  }
});

var params = new URLSearchParams(window.location.search)
console.log("Searching for " + params.get("q"))
if (params.get("q")) {
  const url = validateURL(params.get("q"));
  if (url) {
    div.style.display = 'none'
    frame.style.display = 'block'
    document.querySelector("iframe").src = __uv$config.prefix + __uv$config.encodeUrl(url);
  }
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