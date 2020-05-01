function toggleMenu() {
  let menu = document.getElementById("menu-content");
  let currentDisplayStyle = menu.style.display;

  if (currentDisplayStyle === "block") {
    // If menu is open, close it
    menu.style.display = "none";
  } else {
    // If menu is closed, openIt
    menu.style.display = "block";
  }
}

// close menu if user clicks outside of it
document.addEventListener("mouseup", function (e) {
  let menu = document.getElementById("menu");
  let menuContent = document.getElementById("menu-content");

  if (!menu.contains(e.target)) {
    menuContent.style.display = "none";
  }
});
