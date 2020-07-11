ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 17,
        controls: ['zoomControl']
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Магазин мороженного Gllacy shop'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/ice_marker.svg',
        iconImageSize: [80, 140],
        iconImageOffset: [-40, -140]
    });

    myMap.geoObjects.add(myPlacemark);
}