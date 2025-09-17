//Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});
// Dynamic Year
document.getElementById("year").textContent;
nt = new Date().getFullYear();
// Smooth scroll
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  if (link.hash) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.harsh).scrollI;
      ntoview({
        behaviour: "smooth",
        block: "start",
      });
    });
  }
});
// Navbar background change on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});
// Type Writer effect
const subtitle = document.querySelector("hero p");
const text = "Aspiring Developer |Tech Enthusiast |Creative Thinker";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  subtitle.textContent = "";
  typeEffect();
});
// Dark Mode Toggle
const themeToggleBtn = document.getElementById("darkModeToggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Switch icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
// Load saved theme
if (locoalStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  icon.classList.replace("fa-moon", "fa-sun");
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
