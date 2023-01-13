class Todo {
  static selectors = {
    popupCard: '.popup_type_card-add',
    nameCard: '#add-name-input',
    linkCard: '#add-url-input',
    popupCardForm: '#popup-add-form'
  }
  constructor(cards) {
    this._list = new List(cards);

    document.querySelector(Todo.selectors.popupCardForm).addEventListener('submit', this._handleSubmitCard)
  }
  _handleSubmitCard = (evt) => {
    evt.preventDefault();

    const nameCard = evt.currentTarget.querySelector(Todo.selectors.nameCard).value;
    const linkCard = evt.currentTarget.querySelector(Todo.selectors.nameCard).value;
    this._list.add(nameCard, linkCard)
  }
}
