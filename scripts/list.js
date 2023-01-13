class List extends Generate {
  static selectors = {
    space: '.card'
}
  constructor(cards) {
    super(List.selectors.space);
    this._cards = cards
  }

  generate(where) {
    this._cards.forEach(nameCard, linkCard => {
      this.add(nameCard, linkCard)
    })

    super.generate(where)
  }

  add(nameCard, linkCard) {
    const card = new CardNan (nameCard, linkCard)
    card.generate(this._element)
  }
}
