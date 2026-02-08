const menu = document.getElementById("hamBtn");
const mobileMenu = document.getElementById("hamMenu");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
