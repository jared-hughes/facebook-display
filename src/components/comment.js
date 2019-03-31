import React, { Component } from "react";
import { Name, Text, TextBubble, ProfileIcon, Time, CommentsList } from "../components";
import { getUser } from "../backend";
import { guaranteeList } from "../utils";

class Comment extends Component {
  render() {
    /**
     * Props:
     *  - author: author of comment
     *  - content: string content
     *  - children: children of the comment
     *  - depth: integer depth
     *  - tagged: list of tagged users
     */
    if (this.props.depth > 1) {
      throw new Error("Comment depth more than 1 not accounted for");
    }
    const tagged = guaranteeList(this.props.tagged);
    const children = guaranteeList(this.props.children);
    return (
      <>
        <div className={ "comment depth-" + this.props.depth }>
          <ProfileIcon user={ this.props.author }/>
          <div className="comment-content">
            <TextBubble>
              <Name user={ this.props.author }/> {" "}
              {
                tagged.map((user, index) =>
                  (
                    <span key={ index }>
                      <Name secondary user={ user }/>
                      {" "}
                    </span>
                  )
                )
              }
              <Text text={ this.props.content }/>
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
        <CommentsList comments={ children }
          depth={ this.props.depth }
          parent={ this.props.author }/>
      </>
    )
  }
}

export default Comment;
