import React, { Component } from "react";
import { ProfileIcon, Comment } from "../components";
import { getUser } from "../backend"

class WriteComment extends Component {
  render() {
    /**
     * Props:
     *  - user: name of user viewing
     */
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
