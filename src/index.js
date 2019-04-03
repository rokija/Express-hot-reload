import React from "react";
import ReactDOM from "react-dom";
import Test from "./app/Test";

import "./index.css";

ReactDOM.render(
  <Test />,
  document.getElementById("app") // eslint-disable-line no-undef
);
/* eslint-disable */
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line
}
