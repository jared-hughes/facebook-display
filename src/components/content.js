import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <>
        <div className="fb-header">
          <h2> Facebook Generator </h2>
          <p>
            Build your own Facebook Feed. All graphical material is protected by the copyright owner.
            This generator is in no way affiliated with Facebook. May only be used for personal use.
          </p>
        </div>
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
      </>
    )
  }
}

export default Content;
