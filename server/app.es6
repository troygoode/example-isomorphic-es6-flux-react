"use strict";

import {parse} from "url";
import {join} from "path";
import express from "express";
import {json, urlencoded} from "body-parser";
import {createFactory} from "react";
import {renderToStringAsync} from "react-async";
import appJSX from "../react/App.jsx";
import api from "../api";

let app = express();
let AppComponent = createFactory(appJSX);

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "../.build/final")));

app.use("/api", api);

app.get("*", ({url}, res) => {
  let {path = pathname} = parse(url);
  renderToStringAsync(new AppComponent({path}), (err, output) => {
    if (err) {
      throw err;
    }
    res.send(`<!DOCTYPE html>${output}`);
  });
});

export default app;
