webpackJsonp([2],[
/* 0 */
/*!********************************!*\
  !*** ./source/scripts/main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _smoothScroll = __webpack_require__(/*! smooth-scroll */ 54);
	
	var _smoothScroll2 = _interopRequireDefault(_smoothScroll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Mobile nav
	document.querySelector('.js-toggle-nav').addEventListener('click', function () {
	  document.querySelector('.js-page').classList.toggle('is-clipped');
	  document.querySelector('.js-mobile-nav').classList.toggle('is-open');
	  document.querySelector('.js-hamburger').classList.toggle('is-open');
	});
	
	_smoothScroll2.default.init({
	  selector: '[data-scroll]',
	  speed: 400,
	  easing: 'easeInOutCubic'
	});

/***/ }
]);
//# sourceMappingURL=main.js.map