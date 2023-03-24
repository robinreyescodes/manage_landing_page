"use strict";
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const hiddenNav = document.querySelector(".links-navi");

hamburger.addEventListener("click", () => {
  hiddenNav.classList.toggle("hide");
  hamburger.classList.toggle("active");
  closeBtn.classList.toggle("close");
});

closeBtn.addEventListener("click", () => {
  hiddenNav.classList.toggle("hide");
  hamburger.classList.toggle("active");
  closeBtn.classList.toggle("close");
});
