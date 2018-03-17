"use strict";

(function () {
  var header = document.querySelector('.page-header');
  var navigation = header.querySelector('.page-header__wrapper');
  var headerHeight = header.offsetHeight;

  window.onscroll = function () {
    if (window.pageYOffset >= headerHeight && !navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.add('page-header__wrapper--fix');
    } else if (window.pageYOffset < headerHeight && navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.remove('page-header__wrapper--fix');
    }
  };
})();
