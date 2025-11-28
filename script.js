// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Nav
  nav.classList.toggle("nav-active");

  // Burger Animation
  burger.classList.toggle("toggle");
});

// Close menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
});
