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
    this.imageSrc = `images/image${id}.png`;
    this.imageAlt = `image of ${title}`;

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
    } else {
      this.isActive = false;
      this.isLocked = true;
      this.iconElement.innerHTML = LOCK_ICON;
    }

    this.renderPanel();
  }

  renderPanel = () => {
    //fill out the template

    this.headerElement.addEventListener("click", this.onToggleInfo);

    //give the panel an html id
    this.elementReference.id = `panel${this.id}`;
    //add to the DOM
    this.elementReference.classList.remove("hide");
    panelDisplay.appendChild(this.elementReference);
  };

  onToggleInfo = () => {
    if (this.isVisible == false) {
      // set isVisible to true and show the bodyElement
      this.isVisible = true;
      this.bodyElement.classList.remove("hide");
    } else {
      this.isVisible = false;
      this.bodyElement.classList.add("hide");
    } // else set isVisible to false and hide the bodyElement
  };

  //============================================================ setters and getters ================================================================//
}
