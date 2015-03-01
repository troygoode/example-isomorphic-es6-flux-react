"use strict";

let React = require("react");
let request = require("superagent");
let ReactAsync = require("react-async");
let Link = require("react-router-component").Link;

let Post = React.createClass({
  render() {
    let post = this.props.post;
    let url = "/post/" + post._id;
    return (
      <div className="postBox">
        <span><Link href={url}>{post.title}</Link></span>
      </div>
    );
  }
});

let PostList = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync(cb) {
    request.get("http://localhost:3000/api/posts", (response) => cb(null, {posts: response.body}));
  },

  render() {
    let postNodes = this.state.posts.map((post) => {
      return (
        <Post key={post._id} post={post}></Post>
      );
    });
    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }
});

module.exports = PostList;
