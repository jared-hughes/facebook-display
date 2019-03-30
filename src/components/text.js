import React, { Component } from "react";
import MDReactComponent from "markdown-react-js";

class Text extends Component {
  render() {
    /**
     * Props:
     *  - text: text to be inserted (markdown)
     */
    return (
      <MDReactComponent text={ this.props.text }/>
    )
  }
}

export default Text;
