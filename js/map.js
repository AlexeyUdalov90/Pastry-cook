'use strict';

(function () {
  ymaps.ready(init);

  function init() {
    var mapBlock = document.querySelector('#map');
    var myMap;
    var coordinates = [60.079420, 30.369925];
    var marker = '../img/map-marker.png';

    mapBlock.classList.remove('contacts__map--no-js');

    myMap = new ymaps.Map("map", {
      center: coordinates,
      zoom: 16,
      controls: []
    })

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add('zoomControl', {
      position: {top: 55, right: 15}
    });

    myMap.controls.add('geolocationControl', {
      position: {top: 15, right: 15}
    });

    var myPlacemark = new ymaps.Placemark(coordinates, {}, {
      iconLayout: 'default#image',
      iconImageHref: marker,
      iconImageSize: [35, 53],
      iconImageOffset: [-17, -53]
    });

    myMap.geoObjects.add(myPlacemark);
  };
})();
