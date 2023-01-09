const removeValidityMessage = (cfg, input) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = "";
  error.classList.remove(cfg.inputErrorClass);
  input.classList.remove(cfg.errorClass);
};

const spawnValidityMessage = (cfg, input) => {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  error.classList.add(cfg.inputErrorClass);
  input.classList.add(cfg.errorClass);
};
const checkValidity = (input, cfg) => {
  if (input.validity.valid) {
    removeValidityMessage(cfg, input)
  } else {
    spawnValidityMessage(cfg, input)
  }
};

const toggleButtonDisabled = (cfg, inputs, button) => {
  const isFormValid = inputs.every((input) => input.validity.valid);
  if (isFormValid) {
    button.classList.remove(cfg.inactiveButtonClass);
    button.disabled = "";
  } else {
    button.classList.add(cfg.inactiveButtonClass);
    button.disabled = true;
  }
};

const enableValidation = (cfg) => {
  const forms = [...document.querySelectorAll(cfg.formSelector)];
  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(cfg.inputSelector)];
    const button = form.querySelector(cfg.submitButtonSelector);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        checkValidity(input, cfg);
        toggleButtonDisabled(cfg, inputs, button);
      });
    });
  });
};
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input-span_type_error",
  errorClass: "popup__input-span_type_error-visible",
});
