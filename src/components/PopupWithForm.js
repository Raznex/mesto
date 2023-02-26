import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, {submitFormHandler}) {
    super(popup);
    this._submitFormHandler = submitFormHandler
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = this._form.querySelectorAll(".popup__input");
  }

  setValueInput(data) {
    this._inputs.forEach((input)=>{
      input.value = data[input.name];
    })
  }

  _getInputValues() {
    this._formContainer = {};
    this._inputs.forEach((input) => {
      this._formContainer[input.name] = input.value;
    })
    return this._formContainer;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFormHandler(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
