"use strict";

let url = require("url");
let path = require("path");
let express = require("express");
let bodyParser = require("body-parser");
let React = require("react");
let ReactAsync = require("react-async");
let JSXApp = React.createFactory(require("../react/App.jsx"));
let api = require("../api");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../.build/final")));

app.use("/api", api);

app.get("*", (req, res) => {
  let pathname = url.parse(req.url).pathname;
  ReactAsync.renderToStringAsync(new JSXApp({path: pathname}), function (err, markup) {
    if (err) {
      throw err;
    }
    res.send(`<!DOCTYPE html>${markup}`);
  });
});

module.exports = app;
