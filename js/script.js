"use strict";

import Panel from "./Panel.js";

const DATA_URL = "data/data.json";
const PANEL_DISPLAY = document.getElementById("content");

fetch(DATA_URL)
    .then((res) => res.json())
    .then((data) => {
        data.sections.map((itemData, index) => {
            const panel = new Panel(index, itemData);
            PANEL_DISPLAY.appendChild(panel);
        });
    })
    .catch((e) => {
        console.log(e.stack);
    });
