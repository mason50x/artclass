const params = new URLSearchParams(window.location.search);

function sanitizeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

if (params.get("game")) {
  const gameId = params.get("game");
  const game = games.find((g) => g.id === gameId);

  if (game) {
    document.title = "Infinite";
    const gameImage = document.querySelector("#gameImage");
    const gameTitle = document.querySelector("#gameTitle");
    const gameDescription = document.querySelector("#gameDescription");
    const frame = document.querySelector("#frame");

    if (gameImage) gameImage.src = game.image;
    if (gameTitle) gameTitle.textContent = game.title;
    if (gameDescription && game.description)
      gameDescription.textContent = game.description;
    if (frame) frame.src = __uv$config.prefix + __uv$config.encodeUrl(game.url);
  } else {
    console.error("Game not found:", gameId);
    window.location.href = "/gs.html";
  }
} else if (params.get("app")) {
  const appId = params.get("app");
  const app = apps.find((a) => a.id === appId);

  if (app) {
    document.title = "Infinite";
    const gameImage = document.querySelector("#gameImage");
    const gameTitle = document.querySelector("#gameTitle");
    const gameDescription = document.querySelector("#gameDescription");
    const frame = document.querySelector("#frame");

    if (gameImage) gameImage.src = app.image;
    if (gameTitle) gameTitle.textContent = app.title;
    if (gameDescription && app.description)
      gameDescription.textContent = app.description;
    if (frame) frame.src = __uv$config.prefix + __uv$config.encodeUrl(app.url);
  } else {
    console.error("App not found:", appId);
    window.location.href = "/apps.html";
  }
}

if (!getObj("favoritedGames")) setObj("favoritedGames", []);
if (!getObj("favoritedApps")) setObj("favoritedApps", []);

var favoritedButton = document.querySelector(".favorited");
var favoritedGames = getObj("favoritedGames") || [];
var favoritedApps = getObj("favoritedApps") || [];

var game = params.get("game");
var app = params.get("app");

if (favoritedButton) {
  if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far");
    favoritedButton.classList.add("fas");
  }

  if (favoritedApps.includes(app)) {
    favoritedButton.classList.remove("far");
    favoritedButton.classList.add("fas");
  }
}
function favorite() {
  if (!favoritedButton) return;

  if (game) {
    var index = favoritedGames.indexOf(game);
    if (index !== -1) {
      favoritedGames.splice(index, 1);
      favoritedButton.classList.remove("fas");
      favoritedButton.classList.add("far");
    } else {
      favoritedGames.push(game);
      favoritedButton.classList.remove("far");
      favoritedButton.classList.add("fas");
    }
    setObj("favoritedGames", favoritedGames);
  } else if (app) {
    var index = favoritedApps.indexOf(app);
    if (index !== -1) {
      favoritedApps.splice(index, 1);
      favoritedButton.classList.remove("fas");
      favoritedButton.classList.add("far");
    } else {
      favoritedApps.push(app);
      favoritedButton.classList.remove("far");
      favoritedButton.classList.add("fas");
    }
    setObj("favoritedApps", favoritedApps);
  }
}

function goBack() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("game")) {
    window.location.href = "/gs.html";
  } else if (params.get("app")) {
    window.location.href = "/apps.html";
  } else {
    window.location.href = "/";
  }
}
