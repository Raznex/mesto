import {initialCards} from './cards.js'
export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
  };
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  };
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  };
}
initialCards.forEach((item) => {
  const card = new Card(item, '#card-add');
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
});

