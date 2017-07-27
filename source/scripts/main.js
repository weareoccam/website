// Mobile nav
document.querySelector('.js-toggle-nav').addEventListener('click', () => {
  document.querySelector('.js-page').classList.toggle('is-clipped')
  document.querySelector('.js-mobile-nav').classList.toggle('is-open')
  document.querySelector('.js-hamburger').classList.toggle('is-open')
})