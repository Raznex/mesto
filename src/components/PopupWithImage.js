import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._figcaption = this._popup.querySelector('.popup__figcaption');
  }
  open(title, link) {
    this._popupImage.src = link;
    this._popupImage.alt = title;
    this._figcaption.textContent = title;
    super.open();
  }
}
