"use strict";

import React from "react";
import {get} from "superagent";
import {Mixin} from "react-async";
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
  mixins: [Mixin],

  getInitialStateAsync(cb) {
    get("http://localhost:3000/api/posts", ({body}) => cb(null, {posts: body}));
  },

  render() {
    let postNodes = this.state.posts.map((post) => <Post key={post.id} post={post} />);

    return (
      <div className="postList">
        {postNodes}
      </div>
    );
  }
});

export default PostList;
