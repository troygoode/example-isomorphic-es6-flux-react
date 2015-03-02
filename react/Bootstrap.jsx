"use strict";

import "babelify/polyfill";

import React from "react";
import appJSX from "./App.jsx";

let AppComponent = React.createFactory(appJSX);

if (typeof window !== "undefined") {
  window.onload = ()=> React.render(new AppComponent(), document);
}
