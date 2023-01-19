export class FormValidator {
  static enableValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error-visible",
    errorClass: "popup__input-span_type_error",
  };

  constructor(form) {
    this._input = FormValidator.enableValidation.inputSelector;
    this._submitButton = FormValidator.enableValidation.submitButtonSelector;
    this._inactiveButton = FormValidator.enableValidation.inactiveButtonClass;
    this._inputError = FormValidator.enableValidation.inputErrorClass;
    this._classError = FormValidator.enableValidation.errorClass;
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
    const error = document.querySelector(`#${input.id}-error`)
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
      this._buttonElement.disabled = '';
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
 disableValidation (buttonActivated) {
   this._inputList.forEach((input) => {
     this._removeValidityMessage(input);
   });
   this._buttonElement.classList.toggle(
     this._inactiveButton,
     buttonActivated
   );
   this._buttonElement.disabled = buttonActivated;
 }
  enableValidation() {
    this._setEventListener();
  }
}



