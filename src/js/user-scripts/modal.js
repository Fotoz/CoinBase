//===== Modal:

// modal toggle:
$('.header__button, .header__sell-bitcoin, .header__sell-giftcard').on('click', function (event) {
  event.preventDefault();

  $('body').addClass('no-scroll');
  $('.modal__close-button').addClass('is-active');
});

$('.header__button').on('click', function (event) {
  $('.modal--sign-up').fadeIn(600).css('display', 'flex');
});
$('.header__sell-bitcoin').on('click', function (event) {
  $('.modal--crypto').fadeIn(600).css('display', 'flex');
});
$('.header__sell-giftcard').on('click', function (event) {
  $('.modal--gift-cards').fadeIn(600).css('display', 'flex');
});


// .modal--login toggle:
$('.modal__login-link').on('click', function (event) {
  event.preventDefault();

  $('.modal').fadeOut(600);
  $('.modal--login').fadeIn(600).css('display', 'flex');

  // resetting scroll:
  $('.modal__body').delay(350).queue(function (reset_scroll) {
    $(this).scrollTop(0);
    reset_scroll();
  });
});

// .modal--sign-up toggle:
$('.modal__sign-up-link').on('click', function (event) {
  event.preventDefault();

  $('.modal').fadeOut(600);
  $('.modal--sign-up').fadeIn(600).css('display', 'flex');

  // resetting scroll:
  $('.modal__body').delay(350).queue(function (reset_scroll) {
    $(this).scrollTop(0);
    reset_scroll();
  });
});


// .modal__item toggle:
$('.modal__item').on('click', function (event) {
  event.preventDefault();
  $('.modal').fadeOut(600);
});

// .modal--bitcoin toggle:
$('.modal__item--bitcoin').on('click', function (event) {
  $('.modal--bitcoin').fadeIn(600).css('display', 'flex');
});
// .modal--ethereum toggle:
$('.modal__item--ethereum').on('click', function (event) {
  $('.modal--ethereum').fadeIn(600).css('display', 'flex');
});
// .modal--amazon toggle:
$('.modal__item--amazon').on('click', function (event) {
  $('.modal--amazon').fadeIn(600).css('display', 'flex');
});
// .modal--itunes toggle:
$('.modal__item--itunes').on('click', function (event) {
  $('.modal--itunes').fadeIn(600).css('display', 'flex');
});
// .modal--steam toggle:
$('.modal__item--steam').on('click', function (event) {
  $('.modal--steam').fadeIn(600).css('display', 'flex');
});
// .modal--google-play toggle:
$('.modal__item--google-play').on('click', function (event) {
  $('.modal--google-play').fadeIn(600).css('display', 'flex');
});
// .modal--others toggle:
$('.modal__item--others').on('click', function (event) {
  $('.modal--others').fadeIn(600).css('display', 'flex');
});


// hide modal:
$('.modal, .modal__close-button').on('click', function (event) {
  event.preventDefault();

  $('.modal').fadeOut(600);
  $('body').removeClass('no-scroll');
  $('.modal__close-button').removeClass('is-active');

  // resetting scroll:
  $('.modal__body').delay(350).queue(function (reset_scroll) {
    $(this).scrollTop(0);
    reset_scroll();
  });
});

$('.modal__body').on('click', function (event) {
  event.stopPropagation();
});
