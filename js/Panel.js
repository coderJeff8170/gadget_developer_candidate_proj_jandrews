

const ARROW_ICON = "fa-angle-down";
const LOCK_ICON = "fa-lock";

class Panel {
  // constructor() {
  constructor(id, properties) {
    this.id = id;
    this.properties = properties;
    this.header = new Header(id, this.properties);
    this.panelBody = new PanelBody(id, this.properties);

    //upon creation, return element to creator for appending to DOM
    return this.getPanel();
  }

  //create element, set attributes and return to constructor
  getPanel = () => {
    const div = $("<div></div>");
    div.append(this.header);
    div.append(this.panelBody);
    div.attr("id", `panel${this.id}`);
    div.addClass("panel");
    div.click(this.onClickHeader);
    
    return div;
  };

  //handles functionality when header clicked
  onClickHeader = () => {
    
  //   //if the panel is not active, prevent it from opening - forces user to open panels in order.
    if (!this.header.hasClass("active")) {
      return;
    }
  
  //   //provide variables to hold the header and icon from next panel to access them for changes
    let nextHeader = null;
    let nextIcon = null;
    let nextPanelBody = null;
  //   //make sure there is no attempt to find next panel items when last panel clicked 

  //   if (this.id < PANEL_DISPLAY.children.length) {
  //     nextHeader = document.getElementById(`header${this.id + 1}`);
  //     nextIcon = document.getElementById(`fa-icon${this.id + 1}`);
  //   }
    if (this.id < $("#content").children().length) {
      nextHeader = $(`#header${this.id + 1}`);
      nextIcon = $(`#fa-icon${this.id + 1}`);
      nextPanelBody = $(`#article${this.id + 1}`);
    }

  //   //if the panel is visible, toggle it from closed to open
    // if (!$(this).hasClass("visible")) {
    if (!this.panelBody.is(":visible")) {
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
        console.log("has a next header, so if it's not visible, lock and prevent from opening")
        //if the next panel is still open, prevent this panel from being closed so that the user is forced to close panels in order.
        // if (nextHeader.hasClass("visible")) {
        if (nextPanelBody.is(":visible")) {
          return;
        }
        this.togglePanelActive(nextHeader);
        this.togglePanelLock(nextIcon);
      }
      this.toggleInfo();
    }
  };

  toggleInfo = () => {
    console.log("toggleinfo called!")
    // //grab current icon from DOM
    // const icon = document.getElementById(`fa-icon${this.id}`);
    const icon = $(`#fa-icon${this.id}`);
    // //close panelBody if open and viceversa
    // this.panelBody.classList.contains("hide")
    //   ? this.panelBody.classList.remove("hide")
    //   : this.panelBody.classList.add("hide");
    this.panelBody.is(":visible") ? this.panelBody.hide() : this.panelBody.show();
    
    // //signify panelBody open and viceversa
    // this.header.classList.contains("visible")
    //   ? this.header.classList.remove("visible")
    //   : this.header.classList.add("visible");

    // //flip arrow 180 degrees and viceversa
    // icon.classList.contains("flipArrow")
    //   ? icon.classList.remove("flipArrow")
    //   : icon.classList.add("flipArrow");
    icon.hasClass("flipArrow") ? icon.removeClass("flipArrow") : icon.addClass("flipArrow");
  };

  // //signify if header is able to be clicked or not and viceversa
  togglePanelActive = (panelElement) => {
    console.log("toggle panel from active to not");
    console.log(panelElement.hasClass("active"));
    // panelElement.classList.contains("active")
    //   ? panelElement.classList.remove("active")
    //   : panelElement.classList.add("active");
    panelElement.hasClass("active") ? panelElement.removeClass("active") : panelElement.addClass("active");
  };

  // //toggle lock icon to arrow icon and viceversa
  togglePanelLock = (panelElement) => {
    console.log("toggle lock icon to arrow and vice versa");
    // panelElement.classList.contains("fa-lock")
    //   ? (panelElement.classList = ARROW_ICON)
    //   : (panelElement.classList = LOCK_ICON);
    panelElement.hasClass(LOCK_ICON)
      ? panelElement.addClass(ARROW_ICON).removeClass(LOCK_ICON)
      : panelElement.addClass(LOCK_ICON).removeClass(ARROW_ICON);
  };
}


