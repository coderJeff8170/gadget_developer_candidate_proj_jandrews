"use strict";

import Panel from "./Panel.js";
import Panel2 from "./Panel2.js";

const DATA_URL = "data/data.json";
const PANEL_DISPLAY = document.getElementById("content");

fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    data.sections.map((el, i) => {
      const panel = new Panel(i, el.title.value, el.panel.value);
    });
  })
  .catch(e => {
      console.log(e.message);
  });

  fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    data.sections.map((itemData, index) => {
            const panel = new Panel2(index, itemData);
            console.log(panel);
      PANEL_DISPLAY.appendChild(panel);

    });
  })
  .catch(e => {
    console.log(e.stack);
  });
