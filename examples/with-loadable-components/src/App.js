import React from "react";
import "./App.css";
import loadable from "@loadable/component";

import "tachyons";

const Header = loadable(() => import("./Header"));
const Body = loadable(() => import("./Body"));
const Footer = loadable(() => import("./Footer"));

const App = () => (
  <div>
    <h3 className="bg-red">Welcome to the Razzle</h3>
    <Header />
    <Body />
    <Footer />
  </div>
);

export default App;
