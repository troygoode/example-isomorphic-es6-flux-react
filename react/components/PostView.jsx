"use strict";

import React from "react";
import {Mixin as AsyncMixin} from "react-async";
import {get} from "superagent";

let PostView = React.createClass({
  mixins: [AsyncMixin],

  getInitialStateAsync(cb) {
    let id = this.props.id;
    get("http://localhost:3000/api/posts/" + id, ({body} = {}) => cb(null, {post: body}));
  },

  render: function() {
    let content = this.state.post.id
      ? <span>{this.state.post.content}</span>
      : <p>Invalid Post</p>;

    return (
      <div className="singlePost">{content}</div>
    );
  }
});

export default PostView;
