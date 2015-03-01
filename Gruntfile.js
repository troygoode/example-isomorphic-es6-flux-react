"use strict";

module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    watch: {
      react: {
        files: "react/**/*.jsx",
        tasks: ["default"]
      }
    },

    babel: {
      files: {
        expand: true,
        cwd: "./",
        src: ["react/**/*.jsx"],
        dest: ".build/es5/"
      }
    },

    browserify: {
      options: {
        transform: [ require("grunt-react").browserify ]
      },
      client: {
        src: [".build/es5/**/*.jsx"],
        dest: ".build/final/scripts/react/bundle.js"
      }
    }

  });

  grunt.registerTask("default", [
    "babel",
    "browserify"
  ]);

};
