"use strict";

require("babelify/polyfill");

let React = require("react");
let App = React.createFactory(require("./App.jsx"));

if (typeof window !== "undefined") {
  window.onload = ()=> React.render(new App(), document);
}
