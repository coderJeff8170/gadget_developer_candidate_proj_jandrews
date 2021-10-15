"use strict";

import Panel from "./Panel.js";

//TODO: refactor to use classes
// const panelTemplate = document.getElementById("panel-template");

const DATA_URL = "data/data.json";
const contentSection = document.getElementById("content");
const ARROW_ICON = '<i class="fas fa-angle-down"></i>';
const LOCK_ICON = '<i class="fas fa-lock"></i>';
let numPanels;

let testPanel = new Panel(0);
console.log(testPanel.isActive);

const createButton = (id) => {
  const button = document.createElement("button");
  button.id = `button${id}`;
  if (id == 0) {
    button.innerHTML = ARROW_ICON;
  } else {
    button.innerHTML = '<i class="fas fa-lock"></i>';
  }
  return button;
};

const createArticle = (id) => {
  const article = document.createElement("article");
  article.id = id;
  return article;
};

const createHeader = (text, id) => {
  const header = document.createElement("header");
  header.id = `header${id}`;
  if (id == 0) {
    header.classList.add("active");
  }
  const span = document.createElement("span");
  span.textContent = text;
  const button = createButton(id);
  header.appendChild(span);
  header.appendChild(button);
  header.addEventListener("click", () => {
    toggleInfo(id);
  });
  return header;
};

const createInfoSection = (paraText, id, title) => {
  const infoSection = document.createElement("section");
  infoSection.id = `infoSection${id}`;
  infoSection.className = "infoSection hide";
  const para = document.createElement("p");
  para.innerHTML = paraText;
  const image = createImage(id, title);
  infoSection.appendChild(para);
  infoSection.appendChild(image);
  return infoSection;
};

const createImage = (id, title) => {
  const image = document.createElement("img");
  image.src = `images/image${id}.png`;
  image.alt = `image of ${title}`;
  return image;
};

//TODO: tweak this. if 1 doesn't have .active as className, no other higher number sections should have it
const toggleInfo = (id) => {
  const section = document.getElementById(`infoSection${id}`);
  const header = document.getElementById(`header${id}`);
  const nextHeader = document.getElementById(`header${id + 1}`);
  const nextButton = document.getElementById(`button${id + 1}`);
  const button = document.getElementById(`button${id}`);

  //TODO: if preceding numbers are not active, do not allow toggle to work (an active class)
  //TODO: if section is active, change nextButton to arrow, or else make it a lock
  if (header.classList.contains("active")) {
    section.classList.toggle("hide");
    button.classList.toggle("flipArrow");
    nextButton.innerHTML = ARROW_ICON;
    nextHeader.classList.toggle("active");
  } 
};

//TODO: see if you can improve this.
const toggleInfo2 = (id) => {
    const header = document.getElementById(`header${id}`);
    //iterate through the panels, lock those who are above id+1, unlock id+1, and open panel with id
    for(let i = 0; i<numPanels; i++) {
        //if section i is less than id, don't change
        //if section i is same as id, show it
        //if sectin i is +1 id (if section i is open, activate, else lock it)
        //else, lock it.
    }
}

const activatePanel = () => {

}

const hidePanel = () => {
    
}

const showPanel = () => {
    
}

const lockPanel = () => {

}



fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    numPanels = data.sections.length;
    data.sections.map((el, i) => {

      const article = createArticle(i);
      contentSection.appendChild(article);

      const header = createHeader(el.title.value, i);
      article.appendChild(header);

      const infoSection = createInfoSection(el.panel.value, i, el.title.value);
      article.appendChild(infoSection);
    });
  });
