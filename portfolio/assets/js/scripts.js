//////////////// VanillaJS ////////////////
function updateLoadingBar(progress) {
  $('#loading-bar').css('width', progress + '%');
  $('#loading-number').text(progress + '%');
}

// Navbar shrink
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');

  navbar.classList.add('large-navbar');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 10) {
      navbar.style.transition = 'padding-top 0.5s ease-in-out, padding-bottom 0.5s ease-in-out, box-shadow 0.15s ease-in-out';
      navbar.classList.remove('large-navbar');
      navbar.classList.add('scrolled-navbar');
    } else {
      navbar.style.transition = 'padding-top 0s, padding-bottom 0s, box-shadow 0s';
      navbar.classList.add('large-navbar');
      navbar.classList.remove('scrolled-navbar');
    }
  });
});

//////////////// jQuery ////////////////

// Loading bar
$(document).ready(function () {
  var progress = 0;
  var loadingInterval = setInterval(function () {
    progress += 1;
    updateLoadingBar(progress);

    if (progress >= 100) {
      clearInterval(loadingInterval);
      $('#loading-bar-container').fadeOut(500, function () {
        $('#loading-bar-container').css('visibility', 'visible');
      });

      // Add 'show-content' class to '.main-content' when loading is complete
      $('.main-content').css('visibility', 'visible').addClass('show-content');

      // Remove 'hide-navbar' class from '#main-navbar' when loading is complete
      $('#main-navbar').removeClass('hide-navbar');

      $('body').removeClass('loading');
    }
  }, 3.5); // 3.5 milliseconds for each 1% progress
});

// Smooth scroll down
$(document).ready(function () {
  $('.scroll-down-btn').click(function () {
    $('html, body').animate(
      {
        scrollTop: $('#intro').offset().top,
      },
      500,
        'linear'
    );
  });
});

// Smooth scroll up
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
      'linear'
  );
});

// Nav-links
$(document).ready(function () {
  $('a.nav-link').click(function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
    500,
        'linear'
    );
  });
});

// Change navbar background color when scrolling down
$(document).ready(function () {
  var navbar = $('#main-navbar');
  var initialNavbarBgColor = navbar.css('background-color');
  var initialNavbarTextColor = $('.navbar-brand, .nav-link').css('color');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      navbar.css('background-color', 'white');
      $('.navbar-brand, .nav-link').css('color', 'black');
    } else {
      navbar.css('background-color', initialNavbarBgColor);
      $('.navbar-brand, .nav-link').css('color', initialNavbarTextColor);
    }
  });
});

