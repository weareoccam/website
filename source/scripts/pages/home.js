import smoothScroll from 'smooth-scroll'
import debounce from 'lodash/debounce'

const SCROLL_SNAP_DEBOUNCE = 800

window.onscroll = debounce(scrollToNearestSection, SCROLL_SNAP_DEBOUNCE)

function distanceFromTop(el) {
  const bounds = el.getBoundingClientRect()
  return Math.abs(bounds.top)
}

function scrollToNearestSection() {
  const nearestSection = Array.from(document.querySelectorAll('.js-home-section'))
    .sort((s1, s2) => distanceFromTop(s1) - distanceFromTop(s2))[0]

  smoothScroll.animateScroll(nearestSection)
}