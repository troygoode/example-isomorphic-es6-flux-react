"use strict";

var gulp = require("gulp"),
  babelify = require("babelify"),
  browserify = require("gulp-browserify2"),
  reactify = require("reactify"),
  server = require("gulp-express");

gulp.task("js", function () {
  gulp.src("./react/Bootstrap.jsx")
    .pipe(browserify({
      filename: "bundle.js",
      transform: [babelify, reactify],
      options: {
        extensions: [".jsx"]
      }
    }))
    .pipe(gulp.dest(".build/final/"))
    .pipe(server.notify());
});

gulp.task("server", function () {
  server.run(["bootstrap.js"]);
  gulp.watch([
    "./app.es6",
    "./server.js",
    "./react/**/*.jsx"
  ], ["server"]);
});

gulp.task("watch", ["js"], function () {
  gulp.watch(["./react/**/*.jsx"], ["js"]);
});

gulp.task("default", ["watch", "server"]);

module.exports = gulp;
