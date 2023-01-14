import {Generate} from './generate.js'
import {addPopup, popupPhotoElement, popupPhotoName, popUpPhotoOpenScreen} from "./script.js";

export class Card extends Generate {
  static selectors = {
    cardTemplate: '#card-add',
    text: '.element__title',
    image: '.element__image',
    deleteButton: '.element__delete-button',
    likeButton: '.element__like-button'
  }

  constructor(nameCard, linkCard) {
    super(Card.selectors.cardTemplate);
    this._element.querySelector(Card.selectors.text).textContent = nameCard
    this._element.querySelector(Card.selectors.image).src = linkCard
    this._cardImage = this._element.querySelector(Card.selectors.image)
    this._element.querySelector(Card.selectors.likeButton).addEventListener('click', (evt) => {
      this._handelButtonLike(evt)
    })
    this._element.querySelector(Card.selectors.deleteButton).addEventListener('click', (evt) => {
      this._handelButtonDelete(evt)
    })
    this._cardImage.addEventListener('click', () => {
      this._handleClickImage(linkCard, nameCard);
    });
  }

  _handelButtonLike(evt) {
    evt.target.classList.toggle("element__like-button_active");
  };

  _handelButtonDelete() {
    this._element.remove();
  };
  _handleClickImage(linkCard, nameCard) {
    popUpPhotoOpenScreen.src = linkCard
    popUpPhotoOpenScreen.alt = nameCard
    popupPhotoName.textContent = nameCard
    addPopup(popupPhotoElement)
  }

}
