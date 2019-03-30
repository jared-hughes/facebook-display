import React, { Component } from "react";
import getUser from "../getUser.js"

class ProfileIcon extends Component {
  render() {
    /**
     * Props:
     *  - user: name of user of profile
     */
    const src = getUser(this.props.user).photo;
    return (
      <div className="icon-wrapper">
        <img src={ src } className="profile-picture">
        </img>
      </div>
    )
  }
}

export default ProfileIcon;
