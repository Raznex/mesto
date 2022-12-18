const checkValidity = (input, cfg) => {
  const error = document.querySelector(`#${input.id}-error`)
  if (input.validity.valid) {
    error.textContent = '';
    error.classList.remove(cfg.inputErrorClass);
    input.classList.remove(cfg.errorClass);
  } else {
    error.textContent = input.validationMessage;
    error.classList.add(cfg.inputErrorClass);
    input.classList.add(cfg.errorClass);
  }
}

const buttonDisabled = (cfg, inputs, button) => {
  const isFormValid = inputs.every(input => input.validity.valid);

  if (isFormValid) {
    button.classList.remove(cfg.inactiveButtonClass);
    button.disabled = '';
  } else {
    button.classList.add(cfg.inactiveButtonClass);
    button.disabled = 'disabled';
  }
}

const enableValidation = (cfg) => {
  const forms = [...document.querySelectorAll(cfg.formSelector)];
  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(cfg.inputSelector)];
    const button = form.querySelector(cfg.submitButtonSelector);
    form.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkValidity(input, cfg)
        buttonDisabled(cfg, inputs, button)
      });
    });
  })
}
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-span_type_error',
  errorClass: 'popup__input-span_type_error-visible'
});
