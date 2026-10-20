const openRegistrationButton = document.querySelector(".open_registration");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal_close");

if (openRegistrationButton && modal && overlay) {
  openRegistrationButton.addEventListener("click", () => {
    modal.classList.add("modal_showed");
    overlay.classList.add("overlay_showed");
  });
}

if (modalCloseButton && modal && overlay) {
  modalCloseButton.addEventListener("click", () => {
    modal.classList.remove("modal_showed");
    overlay.classList.remove("overlay_showed");
  });
}

if (overlay && modal) {
  overlay.addEventListener("click", () => {
    modal.classList.remove("modal_showed");
    overlay.classList.remove("overlay_showed");
  });
}

modal.addEventListener("click", (event) => {
  event.stopPropagation(); // Останавливает всплытие клика к overlay!
});

const emailForm = document.querySelector("#email-form");

if (emailForm) {
  emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (data.password !== data.repeatPassword) {
      alert("Пароли не совпадают");
      return;
    }
    console.log("Данные регистрации сохранены:", data);
    modal.classList.remove("modal_showed");
    overlay.classList.remove("overlay_showed");
    form.reset();
  });
}

const subscribeForm = document.querySelector("#subscribe-form");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Новая подписка на email:", data);
    form.reset();
  });
}

