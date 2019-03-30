import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="fb-content" id="content">
        <div id="left-col">

        </div>
        <div id="content-col">
          <div id="right-col">

          </div>
          <div id="content-area">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
