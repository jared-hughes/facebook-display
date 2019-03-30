import React, { Component } from "react";
import { TextBubble, ProfileIcon, Time, CommentsList } from "./components";
import getUser from "../getUser.js"

class Comment extends Component {
  render() {
    /**
     * Props:
     *  - author: author of comment
     *  - content: string content
     *  - children: children of the comment
     *  - depth: integer depth
     */
    if (this.props.depth > 1) {
      throw new Error("Comment depth more than 1 not accounted for");
    }
    return (
      <>
        <div className={ "comment depth-" + this.props.depth }>
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
        {
          this.props.children
          ? (
              <CommentsList comments={ this.props.children }
                depth={ this.props.depth }/>
            )
          : <></>
        }
      </>
    )
  }
}

export default Comment;
