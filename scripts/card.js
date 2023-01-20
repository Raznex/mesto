export class Card {
  constructor(data, templateSelector, handelCardClick) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handelCardClick = handelCardClick
  };

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  };

  _handelButtonLike() {
    this._likeButton.classList.toggle("element__like-button_active");
  };

  _handelButtonDelete() {
    this._element.remove();
  };

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._handelButtonLike();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handelButtonDelete()
    });
    this._cardImage.addEventListener('click', () => {
      this._handelCardClick(this._title, this._image);
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._element.querySelector('.element__title').textContent = this._title;
    this._setEventListener();
    return this._element;
  };
}
