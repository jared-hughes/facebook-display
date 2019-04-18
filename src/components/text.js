import React, { Component } from "react";
import { compiler as mdCompiler } from "markdown-to-jsx";
import Emojify, { emojify } from "react-emojione";

class Text extends Component {
  render() {
    return (
      <Emojify style={
        {
          backgroundImage: "url(images/icons/emojione-3.1.2-64x64.png)",
          height: 16,
          top: -1
        }
      }>
        { mdCompiler(this.props.text || "") }
      </Emojify>
    )
  }
}

export default Text;
