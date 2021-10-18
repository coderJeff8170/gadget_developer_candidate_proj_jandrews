class FAIcon {
  constructor(id) {
    this.id = id;
    if (this.id == 0) {
      this.iconClassName = "fas fa-angle-down";
    } else {
      this.iconClassName = "fas fa-lock";
    }

    return this.getIcon();
  }

  getIcon = () => {
    const icon = document.createElement("i");
    icon.setAttribute("id", `fa-icon${this.id}`);
    icon.setAttribute("class", this.iconClassName);

    return icon;
  };
}
