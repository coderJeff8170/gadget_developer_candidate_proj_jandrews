"use strict";

import Panel from "./Panel.js";

/**
 * NOTE: this is the 'jQuery-ized' version of the original finished modular vanillaJS code
 * in the master branch. There is another branch that 'jQuery-izes' the non-modular code -> 
 * refactor/jQueryVersionNoModules
 */

$(document).ready(function () {
    const DATA_URL = "data/data.json";
    const PANEL_DISPLAY = $("#content");

    fetch(DATA_URL)
        .then((res) => res.json())
        .then((data) => {
            data.sections.map((itemData, index) => {
                const panel = new Panel(index, itemData);
                PANEL_DISPLAY.append(panel);
            });
        })
        .catch((e) => {
            console.log(e.stack);
        });
});
