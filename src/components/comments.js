import React, { Component } from "react";
import { WriteComment, CommentsList } from "../components";

class Comments extends Component {
  render() {
    /**
     * Props:
     *  - content: list of comments
     *  - viewer: person viewing
     */
    return (
      <div className="comments-container">
        <CommentsList comments={ this.props.content }/>
        <WriteComment user={ this.props.viewer }/>
      </div>
    )
  }
}

export default Comments;
