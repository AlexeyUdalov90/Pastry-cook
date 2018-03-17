'use strict';

(function () {
  var newsList = document.querySelector('.news__list');
  var news = newsList.querySelectorAll('.news__item');
  var prevButton = document.querySelector('.news__button--prev');
  var nextButton = document.querySelector('.news__button--next');
  var pos = 0;
  var newsWidth = news[0].offsetWidth;

  var setTransform = function () {
    newsList.style.transform = 'translateX(' + (-pos * newsWidth) + 'px)';
  }

  nextButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    pos = Math.min(pos + 3, news.length - 3);
    setTransform();
  });

  prevButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    pos = Math.max(pos - 3, 0);
    setTransform();
  });
})();
