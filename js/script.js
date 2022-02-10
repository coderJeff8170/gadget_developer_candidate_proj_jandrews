"use strict";
/**
 * NOTE: in order to run simply from HTML file, this project has been refactored to avoid the use of modules
 * The classes are imported as scripts directly into the index.html file instead of as dependencies in modules where utilized,
 * to avoid the need to run a local server or encounter cors issues.
 * If the user would like to run the project as intended, (modules on a local server such as live server), 
 * please switch to the git branch 'master' and run from there.
 */

//TODO: surround with jquery onload...
$( document ).ready(function() {

const PANEL_DISPLAY = $("#content");

//maps over 'data' array constant in data.js file and creates a new panel for each object in the array.
data.map((itemData, index) => {
  console.log( "panel " + index );
        const panel = new Panel(index, itemData);
        PANEL_DISPLAY.append(panel);
      });

});