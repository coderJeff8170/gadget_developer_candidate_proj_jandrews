export default class {
  constructor(id, text) {
    this.id = id;
    this.text = text;

    return this.getParagraph();
  }

  getParagraph = () => {
    const para = document.createElement("p");
    para.innerHTML = this.text;
    para.setAttribute("id", `paragraph${this.id}`);
    para.setAttribute("class", "body-text");

    return para;
  };
}
