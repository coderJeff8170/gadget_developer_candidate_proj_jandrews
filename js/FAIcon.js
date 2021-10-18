export default class {
    constructor(id, iconClassName) {
        this.id = id;
        this.iconClassName = iconClassName || "fas fa-lock";

        return this.getIcon();
    }

    getIcon = () => {
        const icon = document.createElement("i");
        icon.setAttribute("id", `fa-icon${this.id}`);
        icon.setAttribute("class", this.iconClassName);

        return icon;
    }
}