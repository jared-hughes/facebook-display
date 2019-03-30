import React, { Component } from "react";
import MDReactComponent, { mdReact } from "markdown-react-js";
import Emojify, { emojify } from "react-emojione";

class Text extends Component {
  render() {
    /**
     * Props:
     *  - text: text to be inserted (markdown)
     */
    return (
      <Emojify style={
        {
          backgroundImage: "url(images/icons/emojione-3.1.2-64x64.png)",
          height: 16,
          top: -1
        }
      }>
        { mdReact()(this.props.text) }
      </Emojify>
    )
  }
}

export default Text;
