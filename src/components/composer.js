import React, { Component } from "react";
import { ProfileIcon } from "./components";
import getUser from "../getUser";

class Composer extends Component {
  render() {
    /**
     * Props:
     *  - user: name of person composing
     */
    const user = getUser(this.props.user);
    return (
      <div className="composer card">
        <div className="header">
          Create Post
        </div>
        <div className="compose-area">
          <ProfileIcon user={ this.props.user }/>
          <div className="message-wrapper">
            What's on your mind, { user.name }?
          </div>
        </div>
      </div>
    )
  }
}

export default Composer;
