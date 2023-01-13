class Generate{
  constructor(templateCard) {
    this.element = document.querySelector(templateCard).content.children[0].cloneNode(true)
  }

  generate(where){
where.appendChild(this.element);
  }
}
