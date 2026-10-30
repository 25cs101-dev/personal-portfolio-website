// Get the Menu button and the list of links from the page
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// Feature 1: open and close the menu on mobile
menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Feature 2: close the menu after a link is clicked
// (smooth scrolling itself is done in style.css with "scroll-behavior: smooth")
const links = document.querySelectorAll("#nav-links a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});
