import React, { Component } from "react";
import { Comment } from "./components";
import getUser from "../getUser.js"

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
      </div>
    )
  }
}

export default Comments;
