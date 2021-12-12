//===== toTop-button:
$(window).scroll(function () {
  if ($(this).scrollTop() >= $(this).height()) {
    $('.toTop-button').addClass('is-active');
  } else {
    $('.toTop-button').removeClass('is-active');
  };
});

if ( window.pageYOffset >= window.innerHeight ) {
  $('.toTop-button').addClass('is-active');
};

$('.toTop-button').click(function () {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
