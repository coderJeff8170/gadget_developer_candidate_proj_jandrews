import Header from "./Header.js";
import PanelBody from "./PanelBody.js";

export default class {
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

        return div;
    }
}