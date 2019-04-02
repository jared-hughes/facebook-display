import React, { Component } from "react";
import { Post } from "../components";

class PostList extends Component {
  render() {
    return (
      <>
        {
          this.props.posts.map((post, index) =>
            (
              <Post key={ index }
                viewer={ this.props.viewer }
                author={ post.author }
                circumstance={ post.circumstance }
                time={ post.time }
                content={ post.content }
                attachment={ post.attachment }
                comments={ post.comments }
              />
            )
          )
        }
      </>
    )
  }
}

export default PostList;
