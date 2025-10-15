"use strict";

const navOpenButton = document.getElementById("nav-open-button");
const navCloseButton = document.getElementById("nav-close-button");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const header = document.querySelector("header");

navOpenButton.addEventListener("click", function () {
  mobileMenu.classList.remove("-left-[60%]");
  mobileMenu.classList.add("left-0");
  overlay.classList.remove("hidden");
});

navCloseButton.addEventListener("click", function () {
  mobileMenu.classList.remove("left-0");
  mobileMenu.classList.add("-left-[60%]");
  overlay.classList.add("hidden");
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.remove("absolute");
    header.classList.add("fixed");
    header.classList.add("bg-white");
    header.classList.remove("text-white");
    header.classList.add("text-navy-blue");
    header.classList.add("shadow-xl");
  } else {
    header.classList.add("absolute");
    header.classList.remove("fixed");
    header.classList.remove("bg-white");
    header.classList.remove("text-navy-blue");
    header.classList.add("text-white");
    header.classList.remove("shadow-xl");
  }
});

// Go Top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
