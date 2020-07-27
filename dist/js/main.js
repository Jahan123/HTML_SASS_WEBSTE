const btnLink = document.querySelector(".head-btn");
const leftNavbar = document.querySelector(".left-potrait");
const headBtn = document.querySelector(".head-btn");
const navlinks = document.querySelectorAll(".navbar-link");
const rightNavbar = document.querySelector(".right-navbar");
btnLink.addEventListener("click", function () {
  leftNavbar.classList.toggle("active");
  rightNavbar.classList.toggle("active");
  navlinks.forEach((item) => {
    item.classList.toggle("open");
  });
});

headBtn.addEventListener("click", function () {
  this.classList.toggle("btn-active");
});
