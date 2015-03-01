"use strict";

let express = require("express");
let router = new express.Router();

let subrouters = {
  "/posts": require("./posts")
};

for (let key of Object.keys(subrouters)) {
  router.use(key, subrouters[key]);
}

module.exports = router;
