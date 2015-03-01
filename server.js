"use strict";

require("node-jsx").install({extension: ".jsx"});
require("babel/register");

var debugFactory = require("debug"),
  app = require("./app");

var debug = debugFactory("example:server");

app.listen(process.env.PORT || 3000, function () {
  debug("running");
});

module.exports.app = app;
