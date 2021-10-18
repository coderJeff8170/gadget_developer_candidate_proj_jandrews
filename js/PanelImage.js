class PanelImage {
  constructor(id, source, alt) {
    this.id = id;
    this.source = source || "#";
    this.alt = alt || "no information";

    return this.getPanelImage();
  }

  getPanelImage = () => {
    const image = document.createElement("img");
    image.setAttribute("src", this.source);
    image.setAttribute("alt", this.alt);

    return image;
  };
}
