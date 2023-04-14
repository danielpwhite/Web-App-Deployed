// scripts.js
(function () {
  // Set up the navbar's appearance based on scroll position
  function setupNavbar() {
    var navbar = document.querySelector('.navbar');

    navbar.classList.add('large-navbar');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 10) {
        navbar.style.transition = 'padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out, box-shadow 0.15s ease-in-out';
        navbar.classList.remove('large-navbar');
        navbar.classList.add('scrolled-navbar');
      } else {
        navbar.style.transition = 'padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out';
        navbar.classList.add('large-navbar');
        navbar.classList.remove('scrolled-navbar');
      }
    });
  }

  // Initialize event listeners
  function init() {
    document.addEventListener('DOMContentLoaded', function () {
      setupNavbar();
    });
  }

  // Start the application
  init();
})();
