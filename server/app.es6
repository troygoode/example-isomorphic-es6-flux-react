"use strict";

let url = require("url");
let path = require("path");
let express = require("express");
let bodyParser = require("body-parser");
let React = require("react");
let ReactAsync = require("react-async");
let JSXApp = React.createFactory(require("../react/App.jsx"));

let posts = [
  {
    _id: 1,
    title: "first post",
    content: "hello world"
  },
  {
    _id: 2,
    title: "second post",
    content: "foo bar"
  },
  {
    _id: 3,
    title: "third post",
    content: "fizz buzz"
  }
];

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../.build/final")));

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res, next) => {
  let post = posts.find(p => p._id.toString() === req.params.id);
  if (!post) {
    return next();
  }
  res.json(post);
});

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
