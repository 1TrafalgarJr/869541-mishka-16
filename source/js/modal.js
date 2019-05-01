let orderModal = document.querySelector('.modal-order');
let catalogBlock = document.querySelector('.catalog__all-card');
let buttonModal = document.querySelector('.button-modal');

if (orderModal) {
  if (catalogBlock) {
    catalogBlock.addEventListener('click', openOrderForm);
  }

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
