"use strict";

import url from "url";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import ReactAsync from "react-async";
import appJSX from "../react/App.jsx";
import api from "../api";

let app = express();
let AppComponent = React.createFactory(appJSX);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../.build/final")));

app.use("/api", api);

app.get("*", (req, res) => {
  let pathname = url.parse(req.url).pathname;
  ReactAsync.renderToStringAsync(new AppComponent({path: pathname}), function (err, markup) {
    if (err) {
      throw err;
    }
    res.send(`<!DOCTYPE html>${markup}`);
  });
});

module.exports = app;
