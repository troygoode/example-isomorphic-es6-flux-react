"use strict";

import "babelify/polyfill";

import {createFactory, render} from "react";
import appJSX from "./App.jsx";

let AppComponent = createFactory(appJSX);

if (typeof window !== "undefined") {
  window.onload = ()=> render(new AppComponent(), document);
}
