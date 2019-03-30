import React, { Component } from "react";
import { WriteComment, Comment } from "./components";

class Comments extends Component {
  render() {
    /**
     * Props:
     *  - content: list of comments
     *    - string author
     *    - string content
     *    - string time
     */
    return (
      <div className="comments-container">
        {
          this.props.content.map((comment, index) =>
            (
              <Comment author={ comment.author }
                content={ comment.content }
                time={ comment.time }
                key={ index }/>
            )
          )
        }
        <WriteComment user="britain"/>
      </div>
    )
  }
}

export default Comments;
