"use strict";

import React from "react";
import {Locations, Location, NotFound} from "react-router-component";
import PostList from "./components/PostList.jsx";
import PostView from "./components/PostView.jsx";
import NotFoundView from "./components/NotFoundView.jsx";

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
            <h1>Hello World</h1>
            <Locations path={this.props.path}>
              <Location path="/" handler={PostList} />
              <Location path="/post/:id" handler={PostView} />
              <NotFound handler={NotFoundView} />
            </Locations>
          </div>
          <script type="text/javascript" src="/bundle.js"></script>
        </body>
      </html>
    );
  }
});

export default App;
