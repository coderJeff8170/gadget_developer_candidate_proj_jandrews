class PanelImage {
  constructor(id, source, alt) {
    this.id = id;
    this.source = source || "#";
    this.alt = alt || "no information";
    //upon creation, return element to creator for appending to DOM
    return this.getPanelImage();
  }
  
  //create element, set attributes and return to constructor
  getPanelImage = () => {
    const image = document.createElement("img");
    image.setAttribute("src", this.source);
    image.setAttribute("alt", this.alt);

    return image;
  };
}
