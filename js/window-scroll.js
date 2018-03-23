'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navigation = header.querySelector('.page-header__wrapper');
  var headerHeight = header.offsetHeight;
  var advantage = document.querySelector('.advantages');
  var advantageItems = advantage.querySelectorAll('.advantages__item');
  var advantageImages = advantage.querySelectorAll('.advantages__image');

  var parallax = function (block) {
    var pos = 0;
    pos = - ((window.scrollY - block.offsetTop) / 12);
    block.style.backgroundPosition = '50%' + pos + 'px';
  };

  for(var i = 0; i < advantageItems.length; i++) {
    advantageItems[i].classList.remove('advantages__item--no-js');
  }

  window.onscroll = function () {
    if (window.pageYOffset >= headerHeight && !navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.add('page-header__wrapper--fix');
    } else if (window.pageYOffset < headerHeight && navigation.classList.contains('page-header__wrapper--fix')) {
      navigation.classList.remove('page-header__wrapper--fix');
    }

    if (window.pageYOffset !== 0 && window.pageYOffset < headerHeight) {
      parallax(header);
    }

    if (window.innerHeight / 2 >= advantage.getBoundingClientRect().top) {
      for(var i = 0; i < advantageItems.length; i++) {
        advantageItems[i].classList.add('advantages__item--show-icon');
      }
    } else {
      for(var i = 0; i < advantageItems.length; i++) {
        advantageItems[i].classList.remove('advantages__item--show-icon');
      }
    }
  };
})();
