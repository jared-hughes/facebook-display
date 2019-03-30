import React, { Component } from "react";

class ProfileIcon extends Component {
  render() {
    return (
      <div className="icon-wrapper">
        <img src={ this.props.src } className="profile-picture">
        </img>
      </div>
    )
  }
}

export default ProfileIcon;
