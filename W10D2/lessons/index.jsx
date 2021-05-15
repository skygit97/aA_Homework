import React from "react";
import ReactDOM from "react-dom";

import ClickCounter from "./frontend/ClickCounter";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root")

  ReactDOM.render(<ClickCounter />, root);
});