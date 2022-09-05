'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const activeModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', activeModal);
}
btnCloseModal.addEventListener('click', activeModal);
overlay.addEventListener('click', activeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    activeModal();
  }
});
