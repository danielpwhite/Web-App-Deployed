// Loading bar

function updateLoadingBar(progress) {
  $('#loading-bar').css('width', progress + '%');
  $('#loading-number').text(progress + '%');
}

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
    }
  }, 12); // 10 milliseconds for each 1% progress
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




