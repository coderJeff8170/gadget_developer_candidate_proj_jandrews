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
    //fill out the template
    this.titleElement.innerHTML = this.title;
    this.bodyTextElement.innerHTML = this.text;

    this.imageElement.src = `images/image${this.id}.png`;
    this.imageElement.alt = `image of ${this.title}`;

    this.headerElement.addEventListener("click", this.onToggleInfo);

    //give the panel an html id
    this.elementReference.id = `panel${this.id}`;
    this.iconElement.id = `icon${this.id}`;
    //add to the DOM
    this.elementReference.classList.remove("hide");
    panelDisplay.appendChild(this.elementReference);
  };

  onToggleInfo = () => {
    console.log(panelDisplay.children.length);
    // console.log(this.id+2)
    if (!this.elementReference.classList.contains("active")) {
      return;
    }
    //TODO: get next element and set it to active, but only if there is one
    let nextElement;
    let nextIcon;
    if (this.id < panelDisplay.children.length) {
      nextElement = document.getElementById(`panel${this.id + 1}`);
      nextIcon = document.getElementById(`icon${this.id + 1}`);
    }

    //or previous reference is active?

    if (this.isVisible == false) {
      this.isVisible = true;
      this.bodyElement.classList.remove("hide");
      this.iconElement.classList.add("flipArrow");
      nextElement.classList.add("active");
      nextIcon.innerHTML = ARROW_ICON;
    } else {
      this.isVisible = false;
      this.bodyElement.classList.add("hide");
      this.iconElement.classList.remove("flipArrow");
      nextElement.classList.remove("active");
      nextIcon.innerHTML = LOCK_ICON;
    } // else set isVisible to false and hide the bodyElement
  };

activatePanel = () => {};

hidePanel = () => {};

showPanel = () => {};

lockPanel = () => {};

  //============================================================ setters and getters ================================================================//
}
