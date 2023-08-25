const toggler = document.getElementById("toggler");
const menuBg = document.getElementById("menu-bg");
const menu = document.getElementById("menu");

toggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBg.classList.toggle("active");
});

menuBg.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBg.classList.toggle("active");
});
