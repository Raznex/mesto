import {removePopup, popupCardElement}  from './script.js'
import {Generate} from './generate.js'
import {List} from './list.js'
export class Todo extends Generate{
  static selectors = {
    popupCard: '.popup_type_card-add',
    popupCardContainer: '#popup_card-add',
    nameCard: '#add-name-input',
    linkCard: '#add-url-input',
    popupCardForm: '#popup-add-form'
  }

  constructor(cards) {
    super(Todo.selectors.popupCardContainer)
    this._list = new List(cards);

    this._element.querySelector(Todo.selectors.popupCardForm).addEventListener('submit', this._handleSubmitCard)

  }

  _handleSubmitCard = (evt) => {
    evt.preventDefault();

    const nameCard = evt.currentTarget.querySelector(Todo.selectors.nameCard).value;
    const linkCard = evt.currentTarget.querySelector(Todo.selectors.linkCard).value;
    this._list.add(nameCard,linkCard)
    removePopup(popupCardElement)
  }
  generate(where) {
    this._list.generate(document.querySelector('.card'))
    super.generate(where);
  }
}
