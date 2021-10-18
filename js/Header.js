import FAIcon from "./FAIcon.js";
import Title from "./Title.js";

export default class {

    constructor(id, properties) {
      this.id = id;
      this.properties = properties;
      this.title = new Title(this.id, this.properties.title.value);
      this.icon = new FAIcon(this.id);

      return this.getHeader();
    }

    getHeader = () => {
      const header = document.createElement("header");
      header.appendChild(this.title);
      header.appendChild(this.icon);
      header.setAttribute("id", `header${this.id}`);

      return header;
    }

    

  }