import React, { Component } from "react";
import { TextBubble, ProfileIcon, Time } from "./components";
import getUser from "../getUser.js"

class Comment extends Component {
  render() {
    /**
     * Props:
     *  - author: author of comment
     *  - content: string content
     */
    return (
      <div className="comment">
        <ProfileIcon user={ this.props.author }/>
        <div className="comment-content">
          <TextBubble>
            { this.props.content }
          </TextBubble>
          <div className="comment-actions">
            <a> Like </a>
            <span> · </span>
            <a> Reply </a>
            <span> · </span>
            <Time time={ this.props.time }/>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
