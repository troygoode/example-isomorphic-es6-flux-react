"use strict";

var React = require("react");
var Router = require("react-router-component");
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;
var PostList = require("./components/PostList.jsx");
var PostView = require("./components/PostView.jsx");
var NotFoundView = require("./components/NotFoundView.jsx");

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head lang="en">
          <meta charSet="UTF-8"/>
          <title>React App</title>
          <link rel="stylesheet" href="/stylesheets/style.css"/>
        </head>
        <body>
          <div id="main">
            <Locations path={this.props.path}>
              <Location path="/" handler={PostList} />
              <Location path="/post/:id" handler={PostView} />
              <NotFound handler={NotFoundView} />
            </Locations>
          </div>
          <script type="text/javascript" src="/scripts/react/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = App;
