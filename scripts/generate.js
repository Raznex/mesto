export class Generate{
  constructor(templateSelector) {
    this._element = document.querySelector(templateSelector).content.children[0].cloneNode(true)
  }

  generate(where){
where.prepend(this._element);
  }
}
