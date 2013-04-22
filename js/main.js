$(function() {
  $(".header").css('height', $(window).height());

  var resize = true;

  $(window).resize(function() {
    if (resize) {
      $(".header").css('height', $(window).height());
    }
  });

  $('.header-button').click(function(){
    var newHeight;
    resize = false;

    if ( $(window).width() < 865 ) {
      newHeight = 440;
    } else {
      newHeight = 540;
    }

    $(this).fadeOut().addClass('animated fadeOutDown');
    $(".header").append('<div class="overlay alt-overlay"></div>');
    $('.alt-overlay').fadeIn('slow');
    $(".header").animate({height: newHeight}, function(){
      $(".header").removeAttr('style');
    });
    
    $(".why").fadeIn(function(){
      $('html, body').animate({scrollTop:$('#rule-01').position().top}, 1000);
    });

    $('.hidden-section').fadeIn();
  });  
});