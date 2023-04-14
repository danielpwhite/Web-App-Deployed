// scripts-jquery.js
(function ($) {
    // Update the loading bar's progress
    function updateLoadingBar(progress) {
        $('#loading-bar').css('width', progress + '%');
        $('#loading-number').text(progress + '%');
    }

    // Set up the loading bar
    function setupLoadingBar() {
        var progress = 0;
        var loadingInterval = setInterval(function () {
            progress += 1;
            updateLoadingBar(progress);

            if (progress >= 100) {
                clearInterval(loadingInterval);
                $('#loading-bar-container').fadeOut(500, function () {
                    $('#loading-bar-container').css('visibility', 'visible');
                });

                // Show content when loading is complete
                $('.main-content').css('visibility', 'visible').addClass('show-content');

                // Show navbar when loading is complete
                $('#main-navbar').removeClass('hide-navbar');

                $('body').removeClass('loading');
            }
        }, 3.5);
    }

    // Set up smooth scrolling for scroll-down button and anchor links
    function setupSmoothScrolling() {
        $('.scroll-down-btn').click(function () {
            $('html, body').animate(
                {
                    scrollTop: $('#intro').offset().top,
                },
                500,
                'linear'
            );
        });

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
    }

    // Set up nav links to smoothly scroll to target sections
    function setupNavLinks() {
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
    }

    // Set up navbar background color change on scroll
    function setupNavbarBackgroundColor() {
        var navbar = $('#main-navbar');
        var initialNavbarBgColor = navbar.css('background-color');
        var initialNavbarTextColor = $('.navbar-brand, .nav-link').css('color');

        $(window).scroll(function () {
            var scrollPos = $(window).scrollTop();

            if (scrollPos > 10) {
                navbar.css('background-color', 'white');
                $('.navbar-brand, .nav-link').css('color', 'black');
            } else {
                navbar.css('background-color', initialNavbarBgColor);
                $('.navbar-brand, .nav-link').css('color', initialNavbarTextColor);
            }
        });
    }

    // Initialize event Listeners
    function init() {
        $(document).ready(function () {
            setupLoadingBar();
            setupSmoothScrolling();
            setupNavLinks();
            setupNavbarBackgroundColor();
        })
    }

    // Start the application
    init();

})(jQuery);