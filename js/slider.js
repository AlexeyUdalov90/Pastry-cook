'use strict';

(function () {
  var newsWrapper = document.querySelector('.news__wrapper');
  var newsList = document.querySelector('.news__list');
  var news = newsList.querySelectorAll('.news__item');
  var prevButton = document.querySelector('.news__button--prev');
  var nextButton = document.querySelector('.news__button--next');
  var pos = 0;
  var newsWidth = news[0].offsetWidth;
  var amountSlides = newsWrapper.offsetWidth / newsWidth;

  window.addEventListener('resize', function (evt) {
    newsWrapper = document.querySelector('.news__wrapper');
    news = newsList.querySelectorAll('.news__item');
    newsWidth = news[0].offsetWidth;
    amountSlides = newsWrapper.offsetWidth / newsWidth;
    pos = 0;

    newsList.style.transform = 'translateX(0)';
  });

  var setTransform = function () {
    newsList.style.transform = 'translateX(' + (-pos * newsWidth) + 'px)';
  }

  nextButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    pos = Math.min(pos + 1, news.length - amountSlides);
    setTransform();
  });

  prevButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    pos = Math.max(pos - 1, 0);
    setTransform();
  });
})();
