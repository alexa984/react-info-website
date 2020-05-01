function openMenu() {
  let currentDisplayStyle = document.getElementById("menu-content").style
    .display;
  if (currentDisplayStyle === "block") {
    document.getElementById("menu-content").style.display = "none";
  } else {
    document.getElementById("menu-content").style.display = "block";
  }
}
