import React, { Component } from "react";
import { ProfileIcon } from "./components";

class Composer extends Component {
  render() {
    return (
      <div className="composer card">
        <div className="header">
          Create Post
        </div>
        <div className="compose-area">
          <ProfileIcon src="images/profiles/britain.png"/>
          <div className="message-wrapper">
            What's on your mind, Great Britain?
          </div>
        </div>
      </div>
    )
  }
}

export default Composer;
