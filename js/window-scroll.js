'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navigation = header.querySelector('.page-header__wrapper');
  var headerHeight = header.offsetHeight;
  var advantage = document.querySelector('.advantages');
  var advantageImages = advantage.querySelectorAll('.advantages__image');

  var parallax = function (block) {
    var pos = 0;
    pos = - ((window.scrollY - block.offsetTop) / 10);
    block.style.backgroundPosition = '50%' + pos + 'px';
  };

  window.onscroll = function () {
    if (window.pageYOffset >= headerHeight && !navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.add('page-header__wrapper--fix');
    } else if (window.pageYOffset < headerHeight && navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.remove('page-header__wrapper--fix');
    }

    if (window.pageYOffset !== 0 && window.pageYOffset < headerHeight) {
      parallax(header);
    }

    if (window.pageYOffset >= advantage.offsetTop - navigation.offsetHeight) {
      advantageImages.forEach(function (image) {
        image.classList.add('advantages__image--show');
      });
    } else {
      advantageImages.forEach(function (image) {
        image.classList.remove('advantages__image--show');
      });
    }
  };
})();
