var navHeader = document.querySelector(".page-header__nav");
var navToggle = document.querySelector(".page-header__toggle");

navHeader.classList.remove("page-header--no-js");

navToggle.addEventListener("click", function () {
  if (navHeader.classList.contains("page-header--closed")) {
    navHeader.classList.remove("page-header--closed");
    navHeader.classList.add("page-header--open");
  } else {
    navHeader.classList.add("page-header--closed");
    navHeader.classList.remove("page-header--open");
  }
});

var orderModal = document.querySelector(".modal-order");
var catalogBlock = document.querySelector(".catalog__all-card");
var buttonModal = document.querySelector(".button-modal");

if (orderModal) {
  if (catalogBlock) {
    catalogBlock.addEventListener("click", openOrderForm);
  }

  if (buttonModal) {
    buttonModal.addEventListener("click", openOrderForm);
  }

  orderModal.addEventListener("click", closeOrderForm);
  window.addEventListener("keydown", closeOrderForm);
}

function openOrderForm(evt) {
  var element = evt.target;
  console.log(element);

  if (
    element.classList.contains("button-modal") ||
    element.parentElement.classList.contains("button-modal")
  ) {
    evt.preventDefault();
    orderModal.classList.add("modal--open");
  }
}

function closeOrderForm(evt) {
  var element = evt.target;

  if (element.classList.contains("modal-order") || evt.keyCode === 27) {
    orderModal.classList.remove("modal--open");
  }
}



function init(ymaps) {
  var map = new ymaps.Map('map', {
    center: [59.938609530342944, 30.323033042327896],
    zoom: 16,
    controls: ['zoomControl']
  });

  var placemark = new ymaps.Placemark(
    [59.93868489868557, 30.323033042327896],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin-svg.png',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}