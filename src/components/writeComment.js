import React, { Component } from "react";
import { ProfileIcon, Comment } from "../components";
import { getUser } from "../backend"

class WriteComment extends Component {
  render() {
    return (
      <div className="comment write-comment-container">
        <ProfileIcon user={ this.props.user }/>
        <img src="images/icons/write-a-comment.png">
        </img>
      </div>
    )
  }
}

export default WriteComment;
