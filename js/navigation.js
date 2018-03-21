'use strict';

(function () {
  var navigation = document.querySelector('.page-header__navigation');
  var navigationLinks = navigation.querySelectorAll('[href^="#"]');
  var navigationToggle = navigation.querySelector('.page-header__toggle');
  var speed = 0.3;

  navigationToggle.addEventListener('click', function() {
    if (navigation.classList.contains('page-header__navigation--close')) {
      navigation.classList.remove('page-header__navigation--close');
      navigation.classList.add('page-header__navigation--open');
    } else {
      navigation.classList.remove('page-header__navigation--open');
      navigation.classList.add('page-header__navigation--close');
    }
      });

  navigationLinks.forEach(function (link) {
    link.addEventListener('click', function(evt) {
      evt.preventDefault();
      var windowScroll = window.pageYOffset;
      var hash = this.href.replace(/[^#]*(.*)/, '$1');
      var blockTop = document.querySelector(hash).getBoundingClientRect().top;
      var start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) start = time;
        var progress = time - start;
        var r = (blockTop < 0 ? Math.max(windowScroll - progress/speed, windowScroll + blockTop) : Math.min(windowScroll + progress/speed, windowScroll + blockTop));
        window.scrollTo(0, r);
        if (r != windowScroll + blockTop) {
            requestAnimationFrame(step);
        } else {
            location.hash = hash;
        }
      }
    });
  });
})();
