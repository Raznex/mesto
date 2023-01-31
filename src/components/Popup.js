export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._closeButton = this._popup.querySelector('.popup__close');
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListener() {
    this._closeButton.addEventListener('click', this.close.bind(this))
    this._popup.addEventListener("mousedown", this._handleOverlayClickClose.bind(this))
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }
}
