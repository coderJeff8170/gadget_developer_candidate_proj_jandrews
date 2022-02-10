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
        const header = $("<header></header>");
        header.append(this.title);
        header.append(this.icon);
        header.attr("id", `header${this.id}`);
        if (this.id == 0) {
            header.addClass("active");
        }

        return header;
    };
}
