"use strict";

import React from "react";
import request from "superagent";
import ReactAsync from "react-async";
import {Link} from "react-router-component";

let Post = React.createClass({
  render() {
    let post = this.props.post;
    let url = `/post/${post.id}`;
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
    request.get("http://localhost:3000/api/posts", (res) => cb(null, {posts: res.body}));
  },

  render() {
    let postNodes = this.state.posts.map((post) => {
      return (
        <Post key={post.id} post={post}></Post>
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
