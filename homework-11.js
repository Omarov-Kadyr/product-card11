import Modal from './Modal.js';
import Form from './Form.js';

const registrationModal = new Modal('registration-modal');

const openRegistrationButton = document.querySelector('.open_registration');
const overlay = document.querySelector('.overlay');

if (openRegistrationButton) {
  openRegistrationButton.addEventListener('click', () => {
    registrationModal.open();
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    if (registrationModal.isOpen()) {
      registrationModal.close();
    }
  });
}

registrationModal.modal.addEventListener('click', (event) => {
  event.stopPropagation();
});

const registrationForm = new Form('email-form');

if (registrationForm.form) {
  registrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
      return;
    }

    const data = registrationForm.getValues();

    if (data.password !== data.repeatPassword) {
      alert('Пароли не совпадают');
      return;
    }

    console.log('Данные регистрации сохранены:', data);
    registrationModal.close();
    registrationForm.reset();
  });
}

const subscribeForm = new Form('subscribe-form');

if (subscribeForm.form) {
  subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
      return;
    }

    const data = subscribeForm.getValues();
    console.log('Новая подписка на email:', data);
    subscribeForm.reset();
  });
}


