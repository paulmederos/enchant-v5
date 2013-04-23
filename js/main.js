$(document).ready(function() {
  // Once main background image is done loading, show the title + button
  $(".header-title").addClass("animated fadeInDown").removeClass("invisible");
  $(".header-button").addClass("animated fadeInLeft").removeClass("invisible");
});

$(function() {
  // Set initial height for background-image
  var initialHeight = $(window).height();
  headerHeight = $(".header").height();
  if ( headerHeight > initialHeight ) {
      initialHeight = headerHeight + 100;
  }

  $(".header").css('height', initialHeight);

  // Check for window resize to set initial background-image on .header
  var resize = true;

  $(window).resize(function() {
    if (resize) {
      $(".header").css('height', $(window).height());
    }
  });

  // Check if initial header button is clicked, then show rest of page.
  $('.header-button').click(function(){
    var newHeight;
    resize = false;

    if ( $(window).width() < 865 ) {
      newHeight = 240;
    } else {
      newHeight = 320;
    }

    $(this).fadeOut().addClass('animated fadeOutDown');
    $(".header").append('<div class="overlay alt-overlay"></div>');
    $('.alt-overlay').fadeIn('slow');
    $(".header").animate({height: newHeight}, 1000, function(){
      // $(".header").removeAttr('style');
        $(".why").fadeIn(function(){
          $('html, body').animate({scrollTop:$('#rule-01').position().top - 140}, 1000);
        });
    });

    $('.hidden-section').fadeIn();
  });  
});
