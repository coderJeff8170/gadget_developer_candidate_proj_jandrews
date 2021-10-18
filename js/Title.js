class Title {
  constructor(id, titleText) {
    this.id = id;
    this.titleText = titleText;
    //return element to creator for appending to DOM
    return this.getTitle();
  }

  //create element, set attributes and return to constructor
  getTitle = () => {
    const title = document.createElement("span");
    title.innerText = this.titleText;
    title.setAttribute("id", `title${this.id}`);
    title.setAttribute("class", "title");

    return title;
  };
}
