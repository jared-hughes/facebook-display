import React, { Component } from "react";
import { Comment } from "../components";

class CommentsList extends Component {
  render() {
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
                tagged={ comment.tagged }
                key={ index }/>
            )
          )
        }
      </>
    )
  }
}

export default CommentsList;
