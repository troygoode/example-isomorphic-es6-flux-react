"use strict";
require("node-jsx").install({extension: ".jsx"});

var url = require("url");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var React = require("react");
var ReactAsync = require("react-async");
var JSXApp = React.createFactory(require("./react/App.jsx"));
var app = express();

var posts = [
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, ".build")));

app.get("/api/posts", function (req, res) {
  res.json(posts);
});
app.get("/api/posts/:id", function (req, res, next) {
  var find = function (arr, predicate) {
    var results = arr.filter(predicate);
    if (results && results.length) {
      return results[0];
    } else {
      return null;
    }
  };

  var post = find(posts, function (p) {
    return p._id.toString() === req.params.id;
  });
  if (!post) {
    return next();
  }
  res.json(post);
});

app.get("*", function (req, res) {
  var pathname = url.parse(req.url).pathname;
  ReactAsync.renderToStringAsync(new JSXApp({path: pathname}), function (err, markup) {
    if (err) {
      throw err;
    }
    res.send("<!DOCTYPE html>" + markup);
  });
});

module.exports = app;
