export default class {
  constructor(id, source, alt) {
    this.id = id;
    this.source = source || "#";
    this.alt = alt || "no information";

    return this.getPanelImage();
  }

  getPanelImage = () => {
    const image = $("img");
    image.attr("src", this.source);
    image.attr("alt", this.alt);

    return image;
  };
}
