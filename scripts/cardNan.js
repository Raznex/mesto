import {initialCards} from './cards.js'
import {
  addPopup,
  removePopup,
  popupPhotoElement,
  popupCardElement,
  popupPhotoName,
  popUpPhotoOpenScreen,
} from './script.js'

export class CardNan {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
  };
  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  };
  _handelButtonLike(evt) {
    evt.target.classList.toggle("element__like-button_active");
  };
  _handelButtonDelete () {
    this._element.remove();
  };
  _handelCardClick (photoCards, nameCards) {
    popUpPhotoOpenScreen.src = photoCards
    popUpPhotoOpenScreen.alt = nameCards
    popupPhotoName.textContent = nameCards
    addPopup(popupPhotoElement)
  }
  _handleSubmitCard (evt) {
    evt.preventDefault();
    const nameCard = evt.currentTarget.querySelector('#add-name-input').value;
    const linkCard = evt.currentTarget.querySelector('#add-url-input').value;
    removePopup(popupCardElement);
  }
  _instEventListener() {
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._handelButtonLike(evt);
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', (evt) => {
      this._handelButtonDelete(evt)
    });
    this._cardImage.addEventListener('click', () => {
      this._handelCardClick(this._image, this._title);
    });
    document.querySelector('#popup-add-form').addEventListener('submit', (evt) => this._handleSubmitCard(evt))
  };
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._instEventListener();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  };
  add(nameCard, linkCard) {
    const newCard = new CardNan (nameCard, linkCard)
    newCard.generateCard()
  }
}
initialCards.forEach((item) => {
  const card = new CardNan(item, '#card-add');
  const cardElement = card.generateCard();
  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});

