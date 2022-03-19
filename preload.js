const { Titlebar } = require("custom-electron-titlebar");

window.addEventListener("DOMContentLoaded", () => {
  // Title bar implemenation
  new Titlebar({
    backgroundColor: "#212121",
    maximizable: false,
    icon: "assets/Spotify.svg",
    menu: null,
    titleHorizontalAlignment: "left",
  });
});

console.log("Hello from preload.js file!");
