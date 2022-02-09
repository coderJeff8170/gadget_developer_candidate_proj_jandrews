export default class {
  constructor(id, titleText) {
    this.id = id;
    this.titleText = titleText;

    return this.getTitle();
  }

  getTitle = () => {
    const title = $("span");
    title.text(this.titleText);
    title.attr("id", `title${this.id}`);
    title.attr("class", "title");

    return title;
  };
}
