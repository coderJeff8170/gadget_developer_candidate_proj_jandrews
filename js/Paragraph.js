export default class {
    constructor(id, text) {
        this.id = id;
        this.text = text;

        return this.getParagraph();
    }

    getParagraph = () => {
        const para = $("<p></p>");
        para.html(this.text);
        para.attr("id", `paragraph${this.id}`);
        para.addClass("body-text");

        return para;
    };
}
