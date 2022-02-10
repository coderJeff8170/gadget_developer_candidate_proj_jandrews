class Header {
  constructor(id, properties) {
    this.id = id;
    this.properties = properties;
    this.title = new Title(this.id, this.properties.title.value);
    this.icon = new FAIcon(this.id);
    //upon creation, return element to creator for appending to DOM
    return this.getHeader();
  }

  //create element, set attributes and return to constructor
  getHeader = () => {
    const header = $("<header></header>");
    header.append(this.title);
    header.append(this.icon);
    header.attr("id", `header${this.id}`);
    //if it's the first element, allow to be clicked and opened
    if (this.id == 0) {
      header.addClass("active");
    }

    return header;
  };
}
