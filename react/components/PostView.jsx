"use strict";

var React = require("react");
var ReactAsync = require("react-async");
var request = require("superagent");

var PostView = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(cb) {
    var id = this.props.id;
    request.get("http://localhost:3000/api/posts/" + id, function(res) {
      cb(null, {post: res.body || {}});
    });
  },

  render: function() {
    var content;
    if (this.state.post._id) {
      content = <span>{this.state.post.content}</span>;
    } else {
      content = <p>Invalid Post</p>;
    }

    return (
      <div className="singlePost">{content}</div>
    );
  }
});

module.exports = PostView;
