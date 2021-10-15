"use strict";

import Panel from "./Panel.js";

const DATA_URL = "data/data.json";

fetch(DATA_URL)
  .then((res) => res.json())
  .then((data) => {
    data.sections.map((el, i) => {
      const panel = new Panel(i, el.title.value, el.panel.value);
    });
  });
