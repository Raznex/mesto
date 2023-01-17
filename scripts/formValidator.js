class FormValidator {
  static enableValidation = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input-span_type_error",
    errorClass: "popup__input-span_type_error-visible",
    popup: "popup"
  };

  constructor() {
    this._input = FormValidator.enableValidation.inputSelector;
    this._error = document.querySelector('#edit-name-input-error');
    // this._isFormValid = this._inputs.every(this._input => this._input.validity.valid);
  }

  _spawnValidityMessage() {
    this._error.textContent = this._input.validationMessage;
    this._error.classList.add(FormValidator.enableValidation.inputErrorClass);
    this._input.classList.add(FormValidator.enableValidation.errorClass);
  }

  _removeValidityMessage() {
    this._error.textContent = '';
    this._error.classList.remove(FormValidator.enableValidation.inputErrorClass);
    this._input.classList.remove(FormValidator.enableValidation.errorClass);
  }

  _checkValidity = () => {
    if (this._input.validity.valid) {
      this._removeValidityMessage()
    } else {
      this._spawnValidityMessage()
    }
  }


  // _toggleButtonDisabled() {
  //   if (this._isFormValid) {
  //     this._button.classList.remove(FormValidator.enableValidation.inactiveButtonClass);
  //     this._button.disabled = "";
  //   } else {
  //     this._button.classList.add(FormValidator.enableValidation.inactiveButtonClass);
  //     this._button.disabled = true;
  //   }
  // }

  enableValidation() {
    this._forms = [...document.querySelectorAll(FormValidator.enableValidation.formSelector)]
    this._forms.forEach((form) => {
      this._inputs = [...form.querySelectorAll(FormValidator.enableValidation.inputSelector)];
      this._button = form.querySelector(FormValidator.enableValidation.submitButtonSelector);
      this._inputs.forEach(() => {
        this._input.addEventListener("input", () => {
          this._checkValidity();
          // this._toggleButtonDisabled();
        });
      });
    });
  }
}

const checkValidEditForm = new FormValidator ();
checkValidEditForm.enableValidation()



