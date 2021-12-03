//===== .header__sell spoiler:
const headerSellLink = $('.header__sell-link');

headerSellLink.on('click', function (event) {
  event.preventDefault();

  $(this).toggleClass('header__sell-link--is-active').next().fadeToggle(300);
});

$(document).click(function (event) {
  if ( !headerSellLink.is(event.target) && headerSellLink.has(event.target).length === 0 ) {
    headerSellLink.removeClass('header__sell-link--is-active').next().fadeOut(300);
  };
});
