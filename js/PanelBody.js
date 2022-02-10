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
    const article = $("<article></article>");
    article.append(this.paragraph);
    article.append(this.image);
    article.attr("id", `article${this.id}`);
    article.addClass("class", "body hide");

    return article;
  };
}
