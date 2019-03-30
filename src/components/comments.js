import React, { Component } from "react";
import { WriteComment, CommentsList } from "../components";

class Comments extends Component {
  render() {
    /**
     * Props:
     *  - content: list of comments
     */
    return (
      <div className="comments-container">
        <CommentsList comments={ this.props.content }/>
        <WriteComment user="britain"/>
      </div>
    )
  }
}

export default Comments;
