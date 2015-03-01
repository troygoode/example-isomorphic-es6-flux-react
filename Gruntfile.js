"use strict";

module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    watch: {
      react: {
        files: "react/**/*.jsx",
        tasks: ["browserify"]
      }
    },

    browserify: {
      options: {
        transform: [ require("grunt-react").browserify ]
      },
      client: {
        src: ["react/**/*.jsx"],
        dest: ".build/scripts/react/bundle.js"
      }
    }

  });

  grunt.registerTask("default", [
    "browserify"
  ]);

};
