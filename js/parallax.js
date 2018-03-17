'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var pos = 0;
  var headerHeight = header.offsetHeight;

  window.onscroll = function () {
    if (window.pageYOffset !== 0 && window.pageYOffset < headerHeight) {
      pos = - ((window.scrollY - header.offsetTop) / 10);
      header.style.backgroundPosition = '50%' + pos + 'px';
    }
  };
})();
