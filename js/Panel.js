'use strict';

const PANEL_TEMPLATE = document.getElementById("panel-template");
const PANEL_DISPLAY = document.getElementById("content");
const ARROW_ICON = '<i class="fas fa-angle-down"></i>';
const LOCK_ICON = '<i class="fas fa-lock"></i>';

export default class {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;

    this.elementReference = PANEL_TEMPLATE.cloneNode(true);
    this.headerElement = this.elementReference.querySelector(".header");
    this.titleElement = this.elementReference.querySelector(".title");
    this.iconElement = this.elementReference.querySelector(".icon");
    this.bodyElement = this.elementReference.querySelector(".body");
    this.bodyTextElement = this.elementReference.querySelector(".body-text");
    this.imageElement = this.elementReference.querySelector(".image");

    if (id == 0) {
      this.iconElement.innerHTML = ARROW_ICON;
      this.elementReference.classList.add("active");
    } else {
      this.iconElement.innerHTML = LOCK_ICON;
    }

    this.renderPanel();
  }

  renderPanel = () => {
    this.titleElement.innerHTML = this.title;
    this.bodyTextElement.innerHTML = this.text;
    this.imageElement.src = `images/image${this.id}.png`;
    this.imageElement.alt = `image of ${this.title}`;
    this.elementReference.id = `panel${this.id}`;
    this.iconElement.id = `icon${this.id}`;

    this.headerElement.addEventListener("click", this.onToggleInfo);

    //add to the DOM
    this.elementReference.classList.remove("hide");
    PANEL_DISPLAY.appendChild(this.elementReference);
  };

  onToggleInfo = () => {
    if (!this.elementReference.classList.contains("active")) {
      return;
    }
    let nextElement = null;
    let nextIcon = null;
    if (this.id < PANEL_DISPLAY.children.length) {
      nextElement = document.getElementById(`panel${this.id + 1}`);
      nextIcon = document.getElementById(`icon${this.id + 1}`);
    }

    if (!this.elementReference.classList.contains("visible")) {
      this.showInfo();
      if (nextElement) {
        nextElement.classList.add("active");
        nextIcon.innerHTML = ARROW_ICON;
      }
    } else {
      if (nextElement) {
        if (nextElement.classList.contains("visible")) {
          return;
        }
        nextElement.classList.remove("active");
        nextIcon.innerHTML = LOCK_ICON;
      }
      this.hideInfo();
    }
  };

  showInfo = () => {
    this.bodyElement.classList.remove("hide");
      this.elementReference.classList.add("visible");
      this.iconElement.classList.add("flipArrow");
  };

  hideInfo = () => {
    this.bodyElement.classList.add("hide");
      this.iconElement.classList.remove("flipArrow");
      this.elementReference.classList.remove("visible");
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
}
