class Paragraph {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    //upon creation, return element to creator for appending to DOM
    return this.getParagraph();
  }

  //create element, set attributes and return to constructor
  getParagraph = () => {
    const para = document.createElement("p");
    para.innerHTML = this.text;
    para.setAttribute("id", `paragraph${this.id}`);
    para.setAttribute("class", "body-text");

    return para;
  };
}
