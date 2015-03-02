"use strict";

import debugFactory from "debug";
import app from "./app";

let debug = debugFactory("example:server");
let port = process.env.PORT || 3000;

app.listen(port, ()=> {
  debug(`listening on port ${port}`);
  console.log(`listening on port ${port}`);
});

module.exports.app = app;
