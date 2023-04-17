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
        navbar.style.transition = 'padding-top 0.5s ease-in-out, padding-bottom 0s ease-in-out';
        navbar.classList.add('large-navbar');
        navbar.classList.remove('scrolled-navbar');
      }
    });
  }

  // Create Intersection Observer to watch elements and add or remove
  // classes based on viewport visibility for swip-in/swip-out
  function onEntry(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("invisible");
        entry.target.classList.remove("swipe-out");
        entry.target.classList.add("swipe-in");
      } else {
        entry.target.classList.remove("swipe-in");
        entry.target.classList.add("swipe-out");
      }
    });
  }

  // Set up the swipe animation
  function setupSwipeInAnimation() {
    const swipeInElements = document.querySelectorAll(".swipe-in.invisible");

    const observerOptions = {
      root: null,
      rootMargin: "-200px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(onEntry, observerOptions);

    swipeInElements.forEach((element) => observer.observe(element));
  }

  // Initialize event listeners
  function init() {
    document.addEventListener('DOMContentLoaded', function () {
      setupNavbar();
      setupSwipeInAnimation()

      // Initialize TypeIt
      new TypeIt('.type-it', {
        strings: ["Manga", "Manga Rillaz"],
        speed: 150,
        loop: true,
        breakLines: false,
        deleteSpeed: 120,
        nextStringDelay: 3000,
        startDelay: 1500,
        lifeLike: true,
      }).go();
    });
  }

  // Start the application
  init();
})();
