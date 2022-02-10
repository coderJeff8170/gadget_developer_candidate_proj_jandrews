import PanelImage from "./PanelImage.js";
import Paragraph from "./Paragraph.js";

export default class {
    constructor(id, properties) {
        this.id = id;
        this.properties = properties;
        this.paragraph = new Paragraph(id, this.properties.panel.value);
        this.image = new PanelImage(
            id,
            `./images/image${this.id}.png`,
            `picture of ${this.properties.title.value}`
        );

        return this.getPanelBody();
    }

    getPanelBody = () => {
        const article = $("<article></article>");
        article.append(this.paragraph);
        article.append(this.image);
        article.attr("id", `article${this.id}`);
        article.addClass("body");
        article.hide();

        return article;
    };
}
