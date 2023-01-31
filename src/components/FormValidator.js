export class FormValidator {
  constructor(form, cfg) {
    this._input = cfg.inputSelector;
    this._submitButton = cfg.submitButtonSelector;
    this._inactiveButton = cfg.inactiveButtonClass;
    this._inputError = cfg.inputErrorClass;
    this._classError = cfg.errorClass;
    this._form = form;
    this._inputList = [...this._form.querySelectorAll(this._input)];
    this._buttonElement = this._form.querySelector(this._submitButton);

  }

  _spawnValidityMessage(input, errorMessage) {
    const error = document.querySelector(`#${input.id}-error`)
    error.textContent = errorMessage;
    error.classList.add(this._classError);
    input.classList.add(this._inputError);
  }

  _removeValidityMessage(input) {
    const error = document.querySelector(`#${input.id}-error`);
    error.textContent = '';
    error.classList.remove(this._classError);
    input.classList.remove(this._inputError);
  }

  _checkValidity = (input) => {
    if (!input.validity.valid) {
    this._spawnValidityMessage(input, input.validationMessage)
    } else {
      this._removeValidityMessage(input)
    }
  }
  _toggleButtonDisabled() {
    const isFormValid = this._inputList.every((input) => input.validity.valid)
    if (!isFormValid) {
      this._buttonElement.classList.add(this._inactiveButton);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButton);
      this._buttonElement.disabled = false;
    }
  }

  _setEventListener () {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkValidity(input);
        this._toggleButtonDisabled();
      });
    })

  }
 disableValidation () {
   this._toggleButtonDisabled()
   this._inputList.forEach((input) => {
     this._removeValidityMessage(input);
   });
 }
  enableValidation() {
    this._setEventListener();
  }
}
