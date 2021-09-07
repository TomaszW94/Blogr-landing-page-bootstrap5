const menuBtn = document.querySelector(".navbar__menu-btn");
menuBtn.addEventListener("click", () => {
  document.querySelector(".navbar .container").classList.toggle("open");
});
