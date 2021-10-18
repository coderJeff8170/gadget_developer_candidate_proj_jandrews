"use strict";
// import Panel from "./Panel.js";

/**
 * NOTE: in order to run simply from HTML file, this project has been refactored to avoid the use of modules
 * The classes are imported as scripts directly into the index.html file instead of as dependencies in modules where utilized,
 * to avoid the need to run a local server or encounter cors issues.
 * If the user would like to run the project as intended, (modules on a local server such as live server), 
 * please switch to the git branch 'master' and run from there.
 */

const DATA_URL = "data/data.json";
const PANEL_DISPLAY = document.getElementById("content");

data.map((itemData, index) => {
        const panel = new Panel(index, itemData);
        PANEL_DISPLAY.appendChild(panel);
      });