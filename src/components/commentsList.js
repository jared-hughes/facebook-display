import React, { Component } from "react";
import { Comment } from "../components";

class CommentsList extends Component {
  render() {
    /**
     * Props:
     *  - comments: list of comments
     *  - depth: integer depth
     *  - parent: author of parent comment (for nested comments)
     */
    const depth = this.props.depth + 1 || 0;
    return (
      <>
        {
          this.props.comments.map((comment, index) =>
            (
              <Comment author={ comment.author }
                content={ comment.content }
                time={ comment.time }
                depth={ depth }
                children={ comment.children }
                tagged={ comment.tagged || this.props.parent }
                key={ index }/>
            )
          )
        }
      </>
    )
  }
}

export default CommentsList;
