import React, { Component } from "react";

class TextBubble extends Component {
  render() {
    /**
     * Props:
     *  - content: content text
     */
    return (
      <div className="text-bubble">
        { this.props.children }
      </div>
    )
  }
}

export default TextBubble;
