import React, { Component } from "react";
import { WriteComment, CommentsList } from "../components";

class Comments extends Component {
  render() {
    return (
      <div className="comments-container">
        <CommentsList comments={ this.props.content }/>
        <WriteComment user={ this.props.viewer }/>
      </div>
    )
  }
}

export default Comments;
