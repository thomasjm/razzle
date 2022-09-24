
import App from "./App";
import React from "react";
import { hydrateRoot } from "react-dom/client";

const container = document.getElementById("root");

const root = hydrateRoot(container, <App />);

if (module.hot) {
  module.hot.accept();
}
