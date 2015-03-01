"use strict";

let React = require("react");
let Router = require("react-router-component");
let Locations = Router.Locations;
let Location = Router.Location;
let NotFound = Router.NotFound;
let PostList = require("./components/PostList.jsx");
let PostView = require("./components/PostView.jsx");
let NotFoundView = require("./components/NotFoundView.jsx");

let App = React.createClass({
  render() {
    return (
      <html>
        <head lang="en">
          <meta charSet="UTF-8"/>
          <title>Example ES6 Isomorphic React App</title>
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
