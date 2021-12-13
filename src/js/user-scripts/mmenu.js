//===== Mobile Navigation:

// header__hamburger toggle:
$('.header__hamburger').on('click', function (event) {
  event.preventDefault();

  $('.header__hamburger, .header__menu, .header__wrapper').toggleClass('is-active');
  $('body').toggleClass('of-hidden');
});

// Hide the menu and return the standard view of the header__hamburger:
$('.header__link, .button, .header__sell-link').on('click', function (event) {
  $('.header__hamburger, .header__menu, .header__wrapper').removeClass('is-active');
  $('body').removeClass('of-hidden');
});

// Resetting scroll for menu:
$('.header__hamburger, .header__link, .header__button').on('click', function (event) {
  $('.header__menu').delay(350).queue(function (reset_scroll) {
    $(this).scrollTop(0);
    reset_scroll();
  });
});

// Removing classes for menu if window resize:
$(window).on('resize', function () {
  var width = $(document).width();

  if (width > 991) {
    $('.header__hamburger, .header__menu, .header__wrapper').removeClass('is-active');
    $('body').removeClass('of-hidden');
  }
});

// Highlight the current page:
$('.header__link').each(function () {
  if ( window.location.href == (this.href) ) {
    $(this).closest('li').addClass('current');
    $(this).closest('li').parent().parent().addClass('current');
  }
});

if ( window.location.pathname == ('/blog-content.html') ) {
  $('.header__item--blog').addClass('current');
} else if ( window.location.pathname == ('/CoinBase/dist/blog-content.html') ) {
  $('.header__item--blog').addClass('current');
}
