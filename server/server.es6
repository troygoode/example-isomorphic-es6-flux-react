"use strict";

let debugFactory = require("debug");
let app = require("./app");
let debug = debugFactory("example:server");

app.listen(process.env.PORT || 3000, ()=> {
  debug("running");
});

module.exports.app = app;
