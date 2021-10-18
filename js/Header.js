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
    const header = document.createElement("header");
    header.appendChild(this.title);
    header.appendChild(this.icon);
    header.setAttribute("id", `header${this.id}`);
    //if it's the first element, allow to be clicked and opened
    if (this.id == 0) {
      header.classList.add("active");
    }

    return header;
  };
}
