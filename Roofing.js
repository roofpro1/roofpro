const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links li a");
const header = document.getElementById("header");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when a link is clicked (mobile/tablet)
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Shrink header on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Parallax scroll effect for video
window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const video = document.querySelector(".hero video");
  video.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.2}px))`;
});

// ===== Scroll-triggered Reveal Animations =====
function revealOnScroll() {
  const elements = document.querySelectorAll(".scroll-reveal");
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      // trigger 100px before visible
      el.classList.add("animate");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
