import Header from "./Header.js";
import PanelBody from "./PanelBody.js";

const PANEL_DISPLAY = $("#content");
const ARROW_ICON = "fa-angle-down";
const LOCK_ICON = "fa-lock";

export default class {
    constructor(id, properties) {
        this.id = id;
        this.properties = properties;
        this.header = new Header(id, this.properties);
        this.panelBody = new PanelBody(id, this.properties);

        return this.getPanel();
    }

    getPanel = () => {
        const div = $("<div></div>");
        div.append(this.header);
        div.append(this.panelBody);
        div.attr("id", `panel${this.id}`);
        div.addClass("panel");
        div.click(this.onClickHeader);

        return div;
    };

    onClickHeader = () => {
        if (!this.header.hasClass("active")) {
            return;
        }

        let nextHeader = null;
        let nextIcon = null;
        let nextPanel = null;

        if (this.id < PANEL_DISPLAY.children().length) {
            nextHeader = $(`#header${this.id + 1}`);
            nextIcon = $(`#fa-icon${this.id + 1}`);
            nextPanel = $(`#article${this.id + 1}`);
        }

        if (!this.panelBody.is(":visible")) {
            this.toggleInfo();
            if (nextHeader) {
                this.togglePanelActive(nextHeader);
                this.togglePanelLock(nextIcon);
            }
        } else {
            if (nextHeader) {
                if (nextPanel.is(":visible")) {
                    return;
                }
                this.togglePanelActive(nextHeader);
                this.togglePanelLock(nextIcon);
            }
            this.toggleInfo();
        }
    };

    toggleInfo = () => {
        const icon = $(`#fa-icon${this.id}`);

        this.panelBody.is(":visible")
            ? this.panelBody.hide()
            : this.panelBody.show();

        icon.hasClass("flipArrow")
            ? icon.removeClass("flipArrow")
            : icon.addClass("flipArrow");
    };

    togglePanelActive = (panelElement) => {
        panelElement.hasClass("active")
            ? panelElement.removeClass("active")
            : panelElement.addClass("active");
    };

    togglePanelLock = (panelElement) => {
        panelElement.hasClass(LOCK_ICON)
            ? panelElement.addClass(ARROW_ICON).removeClass(LOCK_ICON)
            : panelElement.addClass(LOCK_ICON).removeClass(ARROW_ICON);
    };
}
