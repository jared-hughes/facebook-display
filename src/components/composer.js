import React, { Component } from "react";
import { ProfileIcon } from "../components";
import { getUser } from "../backend";

class Composer extends Component {
  render() {
    const user = getUser(this.props.user);
    return (
      <div className="composer card">
        <img src={ this.props.images.mind }>
        </img>
      </div>
    )
  }
}

export default Composer;
