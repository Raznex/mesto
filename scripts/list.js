import {Generate} from './generate.js'
import {Card} from './card.js'
export class List extends Generate {
  static selectors = {
    space: '.element-space'
}
  constructor(cards) {
    super(List.selectors.space);
    this._cards = cards
  }

  generate(where) {
    this._cards.forEach(cards => {
      this.add(cards.name, cards.link)
    })

    super.generate(where)
  }

  add(nameCard, linkCard) {
    const card = new Card (nameCard, linkCard)
    card.generate(this._element)
  }
}
