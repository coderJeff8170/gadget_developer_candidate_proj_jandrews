import PanelImage from "./PanelImage.js";
import Paragraph from "./Paragraph.js";

export default class {
    constructor(id, properties) {
        this.id = id;
        this.properties = properties;
        this.paragraph = new Paragraph(id, this.properties.panel.value);
        this.image = new PanelImage(id);

        return this.getPanelBody();
    }

    getPanelBody = () => {
        const article = document.createElement("article");
        article.appendChild(this.paragraph);
        article.appendChild(this.image);
        article.setAttribute("id", `article${this.id}`);
        
        return article;
    }
}