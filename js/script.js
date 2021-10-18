"use strict";
/**
 * NOTE: in order to run simply from HTML file, this project has been refactored to avoid the use of modules
 * The classes are imported as scripts directly into the index.html file instead of as dependencies in modules where utilized,
 * to avoid the need to run a local server or encounter cors issues.
 * If the user would like to run the project as intended, (modules on a local server such as live server), 
 * please switch to the git branch 'master' and run from there.
 * 
 * ====================================================== REQUIREMENTS ===========================================================
 * 
 * 1.	Build the interactive user experience demonstrated below with JavaScript ES6. [X]
 * 2.	Utilize the given JSON data and image assets to dynamically construct the component on page load. [X]
 * 3.	Ensure headers indicated with the lock icon are disabled until their predecessor headers are expanded. [X]
 * 
 * ====================================================== BONUS POINTS ===========================================================
 *
 * 1.	No jQuery. [X]
 * 2.	Use only vanilla javascript ES6 (no libraries) or React.js. [X]
 * 3.	Use accessible DOM markup to ensure the component can be used and read properly with a screen reader and keyboard (no mouse or screen). [X]
 * 4.	Closely match the styling of the video demonstration (without orange click animation). [X]
 * 5.	Utilize a CSS preprocessor (Sass) without using a library.
 * 6.	Utilize one or more CSS breakpoints to ensure the component reflows, is responsive, and can be used properly at:
 *    a.	1280px viewport width then zoomed in to 400% browser zoom  [X]
 *    b.	320px viewport width at 100% browser zoom  [X]
 */

const DATA_URL = "data/data.json";
const PANEL_DISPLAY = document.getElementById("content");

//maps over 'data' array constant in data.js file and creates a new panel for each object in the array.
data.map((itemData, index) => {
        const panel = new Panel(index, itemData);
        PANEL_DISPLAY.appendChild(panel);
      });