export default class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.overlay = document.querySelector('.overlay');
    this.addCloseListener();
  }

  open() {
    this.modal.classList.add('modal_showed');
    this.overlay.classList.add('overlay_showed');
  }

  close() {
    this.modal.classList.remove('modal_showed');
    this.overlay.classList.remove('overlay_showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal_showed');
  }

  addCloseListener() {
    const closeBtn = this.modal.querySelector('.modal_close');
    closeBtn.addEventListener('click', () => {
      this.close();
    });
  }
}
