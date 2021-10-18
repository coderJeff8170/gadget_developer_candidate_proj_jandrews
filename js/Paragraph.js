export default class {
    constructor(id, text) {
        this.id = id;
        this.text = text;

        return this.getParagraph();
    }

    getParagraph = () => {
        const para = document.createElement("p");
        const node = document.createTextNode(this.text);
        para.appendChild(node);
        para.setAttribute("id", `paragraph${this.id}`);
        para.setAttribute("class", "body-text");

        return para;
    }
}