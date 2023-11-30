const menu = document.querySelector(".menu");

const menuBtn = document.querySelector(".menu-btn");

console.log(menu, menuBtn);

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
