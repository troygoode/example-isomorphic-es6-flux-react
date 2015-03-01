"use strict";

require("node-jsx").install({extension: ".jsx"});
require("babel/register");
module.exports = require("./server/server");
