const ARROW_ICON = "fas fa-angle-down";
const LOCK_ICON = "fas fa-lock";

class Panel {
  constructor(id, properties) {
    this.id = id;
    this.properties = properties;
    this.header = new Header(id, this.properties);
    this.panelBody = new PanelBody(id, this.properties);

    //return this particular panel to creator of panel for handling and appending to the DOM
    return this.getPanel();
  }

  //creates a panel div on the DOM, and assigns certain needed attributes
  getPanel = () => {
    const div = document.createElement("div");
    div.appendChild(this.header);
    div.appendChild(this.panelBody);
    div.setAttribute("id", `panel${this.id}`);
    div.setAttribute("class", "panel");
    div.addEventListener("click", this.onClickHeader);

    return div;
  };

  //handles functionality when header clicked
  onClickHeader = () => {
    //if the panel is not active, prevent it from opening - forces user to open panels in order.
    if (!this.header.classList.contains("active")) {
      return;
    }

    //provide variables to hold the header and icon from next panel to access them for changes
    let nextHeader = null;
    let nextIcon = null;
    //make sure there is no attempt to find next panel items when last panel clicked 
    if (this.id < PANEL_DISPLAY.children.length) {
      nextHeader = document.getElementById(`header${this.id + 1}`);
      nextIcon = document.getElementById(`fa-icon${this.id + 1}`);
    }

    //if the panel is visible, toggle it from closed to open
    if (!this.header.classList.contains("visible")) {
      this.toggleInfo();
      //once panel is open, if there is a next header, set it to active so it can be opened, and change it's icon to arrow to signify unlocked
      if (nextHeader) {
        this.togglePanelActive(nextHeader);
        this.togglePanelLock(nextIcon);
      }
    } else {
      //toggle panel closed.
      //if there is an item after the one clicked, change it's icon to a lock and prevent it from opening
      if (nextHeader) {
        //if the next panel is still open, prevent this panel from being closed so that the user is forced to close panels in order.
        if (nextHeader.classList.contains("visible")) {
          return;
        }
        this.togglePanelActive(nextHeader);
        this.togglePanelLock(nextIcon);
      }
      this.toggleInfo();
    }
  };

  toggleInfo = () => {
    //grab current icon from DOM
    const icon = document.getElementById(`fa-icon${this.id}`);
    //close panelBody if open and viceversa
    this.panelBody.classList.contains("hide")
      ? this.panelBody.classList.remove("hide")
      : this.panelBody.classList.add("hide");
    //signify panelBody open and viceversa
    this.header.classList.contains("visible")
      ? this.header.classList.remove("visible")
      : this.header.classList.add("visible");
    //flip arrow 180 degrees and viceversa
    icon.classList.contains("flipArrow")
      ? icon.classList.remove("flipArrow")
      : icon.classList.add("flipArrow");
  };

  //signify if header is able to be clicked or not and viceversa
  togglePanelActive = (panelElement) => {
    panelElement.classList.contains("active")
      ? panelElement.classList.remove("active")
      : panelElement.classList.add("active");
  };

  //toggle lock icon to arrow icon and viceversa
  togglePanelLock = (panelElement) => {
    panelElement.classList.contains("fa-lock")
      ? (panelElement.classList = ARROW_ICON)
      : (panelElement.classList = LOCK_ICON);
  };
}
