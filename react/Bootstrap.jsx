"use strict";

var React = require("react");
var App = require("./App.jsx");

if (typeof window !== "undefined") {
  window.onload = function() {
    React.renderComponent(new App(), document);
  };
}
