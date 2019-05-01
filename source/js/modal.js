let navHeader = document.querySelector('.page-header__nav');
let navToggle = document.querySelector('.page-header__toggle');

navHeader.classList.remove('page-header--no-js');

navToggle.addEventListener('click', function () {
  if (navHeader.classList.contains('page-header--closed')) {
    navHeader.classList.remove('page-header--closed');
    navHeader.classList.add('page-header--open');
  } else {
    navHeader.classList.add('page-header--closed');
    navHeader.classList.remove('page-header--open');
  }
});

let orderModal = document.querySelector('.modal-order');
let buttonModal = document.querySelector('.button-modal');

if (orderModal) {
  if (buttonModal) {
    buttonModal.addEventListener('click', openOrderForm);
  }

  orderModal.addEventListener('click', closeOrderForm);
  window.addEventListener('keydown', closeOrderForm);
}

function openOrderForm(evt) {
  let element = evt.target;
  console.log(element);

  if (
    element.classList.contains('button-modal') ||
    element.parentElement.classList.contains('button-modal')
  ) {
    evt.preventDefault();
    orderModal.classList.add('modal--open');
  }
}

function closeOrderForm(evt) {
  let element = evt.target;

  if (element.classList.contains('modal-order') || evt.keyCode === 27) {
    orderModal.classList.remove('modal--open');
  }
};
