// import Header from "./Header.js";
// import PanelBody from "./PanelBody.js";

// const PANEL_DISPLAY = document.getElementById("content");
const ARROW_ICON = "fas fa-angle-down";
const LOCK_ICON = "fas fa-lock";

class Panel {
  constructor(id, properties) {
    this.id = id;
    this.properties = properties;
    this.header = new Header(id, this.properties);
    this.panelBody = new PanelBody(id, this.properties);

    return this.getPanel();
  }

  getPanel = () => {
    const div = document.createElement("div");
    div.appendChild(this.header);
    div.appendChild(this.panelBody);
    div.setAttribute("id", `panel${this.id}`);
    div.setAttribute("class", "panel");
    div.addEventListener("click", this.onClickHeader);

    return div;
  };

  onClickHeader = () => {
    if (!this.header.classList.contains("active")) {
      return;
    }

    let nextHeader = null;
    let nextIcon = null;
    if (this.id < PANEL_DISPLAY.children.length) {
      nextHeader = document.getElementById(`header${this.id + 1}`);
      nextIcon = document.getElementById(`fa-icon${this.id + 1}`);
    }

    if (!this.header.classList.contains("visible")) {
      this.toggleInfo();
      if (nextHeader) {
        this.togglePanelActive(nextHeader);
        this.togglePanelLock(nextIcon);
      }
    } else {
      if (nextHeader) {
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
    const icon = document.getElementById(`fa-icon${this.id}`);
    this.panelBody.classList.contains("hide")
      ? this.panelBody.classList.remove("hide")
      : this.panelBody.classList.add("hide");
    this.header.classList.contains("visible")
      ? this.header.classList.remove("visible")
      : this.header.classList.add("visible");
    icon.classList.contains("flipArrow")
      ? icon.classList.remove("flipArrow")
      : icon.classList.add("flipArrow");
  };

  togglePanelActive = (panelElement) => {
    panelElement.classList.contains("active")
      ? panelElement.classList.remove("active")
      : panelElement.classList.add("active");
  };

  togglePanelLock = (panelElement) => {
    panelElement.classList.contains("fa-lock")
      ? (panelElement.classList = ARROW_ICON)
      : (panelElement.classList = LOCK_ICON);
  };
}
