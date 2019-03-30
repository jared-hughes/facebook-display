import React, { Component } from "react";
import { Text } from "../components";
import { stripFirstLineWhitespace } from "../utils";

class PostContent extends Component {
  render() {
    /**
     * Props:
     *  - content: text to be inserted
     */
    return (
      <div className="content">
        <Text text={ stripFirstLineWhitespace(this.props.content) }/>
      </div>
    )
  }
}

export default PostContent;
