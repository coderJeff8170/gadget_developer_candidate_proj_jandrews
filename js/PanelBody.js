class PanelBody {
  constructor(id, properties) {
    this.id = id;
    this.properties = properties;
    this.paragraph = new Paragraph(id, this.properties.panel.value);
    this.image = new PanelImage(
      id,
      `./images/image${this.id}.png`,
      `picture of ${this.properties.title.value}`
    );
    //upon creation, return element to creator for appending to DOM
    return this.getPanelBody();
  }
  
  //create element, set attributes and return to constructor
  getPanelBody = () => {
    const article = document.createElement("article");
    article.appendChild(this.paragraph);
    article.appendChild(this.image);
    article.setAttribute("id", `article${this.id}`);
    article.setAttribute("class", "body hide");

    return article;
  };
}
