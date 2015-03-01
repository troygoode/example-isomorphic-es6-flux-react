"use strict";

let React = require("react");
let ReactAsync = require("react-async");
let request = require("superagent");

let PostView = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync(cb) {
    let id = this.props.id;
    request.get("http://localhost:3000/api/posts/" + id, (res) => cb(null, {post: res.body || {}}));
  },

  render: function() {
    let content = this.state.post.id ? <span>{this.state.post.content}</span> : <p>Invalid Post</p>;
    return (
      <div className="singlePost">{content}</div>
    );
  }
});

module.exports = PostView;
