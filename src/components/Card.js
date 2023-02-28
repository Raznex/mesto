export class Card {
  constructor(data, templateSelector, {handleCardClick, handleDeleteCard, handlePutLike, handleDeleteLike}) {
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this.myId = data.myId;
    this.ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick
    this._handleDeleteCard = handleDeleteCard;
    this._handleDeleteLike = handleDeleteLike;
    this._handlePutLike = handlePutLike;
  };

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  };

  _handelButtonPutLike() {
    this._likeButton.classList.add("element__like-button_active");
  };

  _handelButtonDeleteLike() {
    this._likeButton.classList.remove("element__like-button_active");
  };

  _addLike() {
    this._handelButtonPutLike();
    this._handlePutLike()
  }

  _deleteLike() {
    this._handelButtonDeleteLike()
    this._handleDeleteLike()
  }

  _checkDeleteButton() {
    if (this.myId !== this.ownerId) {
      this._deleteButton.remove()
    }
  }

  _checkAmountLikes() {
    this._likes.forEach((like) => {
      if (like._id === this.myId)
        this._addLike()
    })

  }

  counterLikes(likes) {
    this._indicatorLikes.textContent = likes
  }


  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like-button_active')) {
        this._deleteLike()
      } else {
        this._addLike()
      }
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this)
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._deleteButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._indicatorLikes = this._element.querySelector('.element__counter')
    this._element.querySelector('.element__title').textContent = this._title;
    this.counterLikes(this._likes.length);
    this._checkAmountLikes();
    this._setEventListener();
    this._checkDeleteButton();
    return this._element;
  };

  handelDelete() {
    this._element.remove();
  };
}
