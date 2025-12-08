// Hent elementerne
const burgerBtn = document.querySelector("#burgerBtn");
const sideMenu = document.querySelector("#sideMenu");
const menuOverlay = document.querySelector("#menuOverlay");

// Funktion: Toggle menu åben/lukket
function toggleMenu() {
  sideMenu.classList.toggle("open");
  menuOverlay.classList.toggle("open");
}

// Når man klikker på burger → åbn/luk
burgerBtn.addEventListener("click", toggleMenu);

// Når man klikker på overlay → luk
menuOverlay.addEventListener("click", toggleMenu);