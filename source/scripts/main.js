const $ = require ('jquery');

// Mobile nav
document.querySelector('.js-toggle-nav').addEventListener('click', () => {
  document.querySelector('.js-page').classList.toggle('is-clipped')
  document.querySelector('.js-mobile-nav').classList.toggle('is-open')
  document.querySelector('.js-hamburger').classList.toggle('is-open')
})

$(window).scroll(function(){

  // Scroll & Window variables
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var fadeProgress = 1 - (scrollTop / (0.7 * windowHeight));    // Opacity: 0; after scroll down 50% of viewport height
  var slideProgress = 1 - (windowHeight * (scrollTop / windowHeight));  // Return desired percentage of distance scrolled

  // negative scrolling zero
  if (scrollTop < 0) scrollTop = 0;

  if (slideProgress > 1) slideProgress = 1;

  // Fade via scroll event (via progress variables)
  $('.c-top-section__heading').css('opacity', fadeProgress);
  $('.c-top-section__subheading').css('opacity', fadeProgress);

  // Offset via scroll event (via progress variables)
  $('.c-top-section__heading').css('transform', 'translateY(' +  -0.15 * slideProgress + 'px)');
  $('.c-top-section__subheading').css('transform', 'translateY(' +  -0.15 * slideProgress + 'px)');

  console.log(scrollTop);
});