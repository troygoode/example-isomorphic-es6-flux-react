"use strict";

var gulp = require("gulp"),
  babelify = require("babelify"),
  browserify = require("browserify"),
  reactify = require("reactify"),
  rename = require("gulp-rename"),
  through2 = require("through2");

function browserified () {
  return through2.obj(function (file, enc, next) {
    browserify(file.path, {
      extensions: [".jsx"]
    })
      .transform(babelify)
      .transform(reactify)
      .bundle(function (err, res) {
        if (err) {
          next(err);
        } else {
          file.contents = res;
          next(null, file);
        }
      });
  });
}

gulp.task("default", function () {
  gulp.src("./react/Bootstrap.jsx")
    .pipe(browserified())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(".build/final/"));
});
