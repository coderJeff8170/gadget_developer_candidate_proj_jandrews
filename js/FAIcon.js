export default class {
    constructor(id) {
        this.id = id;
        if (this.id == 0) {
            this.iconClassName = "fas fa-angle-down";
        } else {
            this.iconClassName = "fas fa-lock";
        }

        return this.getIcon();
    }

    getIcon = () => {
        const icon = $("<i></i>");
        icon.attr("id", `fa-icon${this.id}`);
        icon.addClass(this.iconClassName);

        return icon;
    };
}
