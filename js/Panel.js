const panelTemplate = document.getElementById("panel-template");
const panelDisplay = document.getElementById("content");
const ARROW_ICON = '<i class="fas fa-angle-down"></i>';
const LOCK_ICON = '<i class="fas fa-lock"></i>';

export default class {
  constructor(id, title, text) {
    this.id = id;
    this.isVisible = false;
    this.title = title;

    this.text = text;

    this.elementReference = panelTemplate.cloneNode(true);
    this.headerElement = this.elementReference.querySelector(".header");
    this.titleElement = this.elementReference.querySelector(".title");
    this.iconElement = this.elementReference.querySelector(".icon");
    this.bodyElement = this.elementReference.querySelector(".body");
    this.bodyTextElement = this.elementReference.querySelector(".body-text");
    this.imageElement = this.elementReference.querySelector(".image");

    if (id == 0) {
      this.isActive = true;
      this.isLocked = false;
      this.iconElement.innerHTML = ARROW_ICON;
      this.elementReference.classList.add("active");
    } else {
      this.isActive = false;
      this.isLocked = true;
      this.iconElement.innerHTML = LOCK_ICON;
    }

    this.renderPanel();
  }

  renderPanel = () => {
    this.titleElement.innerHTML = this.title;
    this.bodyTextElement.innerHTML = this.text;
    this.imageElement.src = `images/image${this.id}.png`;
    this.imageElement.alt = `image of ${this.title}`;

    this.headerElement.addEventListener("click", this.handleClickHeader);

    this.elementReference.id = `panel${this.id}`;
    this.iconElement.id = `icon${this.id}`;

    //add to the DOM
    this.elementReference.classList.remove("hide");
    panelDisplay.appendChild(this.elementReference);
  };

  onToggleInfo = () => {
    // console.log(panelDisplay.children.length);
    // console.log(this.id+2)
    if (!this.elementReference.classList.contains("active")) {
      return;
    }
    //TODO: get next element and set it to active, but only if there is one
    let nextElement = null;
    let nextIcon = null;
    if (this.id < panelDisplay.children.length) {
      nextElement = document.getElementById(`panel${this.id + 1}`);
      nextIcon = document.getElementById(`icon${this.id + 1}`);
    }

    if (!this.elementReference.classList.contains("visible")) {
      //   this.isVisible = true;
      this.bodyElement.classList.remove("hide");
      this.elementReference.classList.add("visible");
      this.iconElement.classList.add("flipArrow");
      if (nextElement) {
        if (nextElement.classList.contains("visible")) {
          console.log("it's visible");
          return;
        }
        nextElement.classList.add("active");
        nextIcon.innerHTML = ARROW_ICON;
      }
    } else {
      //   this.isVisible = false;
      this.bodyElement.classList.add("hide");
      this.iconElement.classList.remove("flipArrow");
      this.elementReference.classList.remove("visible");
      if (nextElement) {
        nextElement.classList.remove("active");
        nextIcon.innerHTML = LOCK_ICON;
      }
    }
  };

  handleClickHeader = () => {
    //iterate through the list
    for (let i = 0; i <= panelDisplay.children.length - 1; i++) {
      console.log(panelDisplay.children[i]);

      //   if(i == 0){this.showPanel(panelDisplay.children[i])}

      //   if(this.id == i) {this.showPanel(panelDisplay.children[i])}

      // if(this.id == i+1) {this.activatePanel(panelDisplay.children[i])}

      //  if(this.id>i) {
      //    this.closePanel(panelDisplay.children[i])
      //    this.lockPanel(panelDisplay.children[i])
      //
      //  }
    }
  };

  showPanel = (panel) => {
    console.log(panel);
    //if panel does not have class active, add class and toggle lock
    //else vice versa
  };

  closePanel = (panel) => {
    console.log(panel);
    //if panel's body is not showing, remove hide class
    //else vice versa
  };

  //might not need this one
  activatePanel = (panel) => {
    console.log(panel);
    //if panel is active, change lock to arrow
    //else vice versa
  };

  lockPanel = (panel) => {
    console.log(panel);
  };

  //============================================================ setters and getters ================================================================//
}
