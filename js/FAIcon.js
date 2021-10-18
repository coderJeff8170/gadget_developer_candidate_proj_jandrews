class FAIcon {
  constructor(id) {
    this.id = id;
    //first element will have arrow signifier for click-to-open, others will signify locked
    if (this.id == 0) {
      this.iconClassName = "fas fa-angle-down";
    } else {
      this.iconClassName = "fas fa-lock";
    }
    //upon creation, return element to creator for appending to DOM
    return this.getIcon();
  }

  //create element, set attributes and return to constructor
  getIcon = () => {
    const icon = document.createElement("i");
    icon.setAttribute("id", `fa-icon${this.id}`);
    icon.setAttribute("class", this.iconClassName);

    return icon;
  };
}
