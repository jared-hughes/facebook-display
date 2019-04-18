import React, { Component } from "react";

class TextBubble extends Component {
  render() {
    return (
      <div className="text-bubble">
        { this.props.children }
      </div>
    )
  }
}

export default TextBubble;
