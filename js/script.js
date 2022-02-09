"use strict";

import Panel from "./Panel.js";

$(document).ready(function(){


const DATA_URL = "data/data.json";
const PANEL_DISPLAY = $("#content");

fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    data.sections.map((itemData, index) => {
      
      const panel = new Panel(index, itemData);
      
      PANEL_DISPLAY.append();
      
      // PANEL_DISPLAY.append("<p>Jeff</p>");
    });
  })
  .catch((e) => {
    console.log(e.stack);
  });

});
