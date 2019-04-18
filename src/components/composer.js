import React, { Component } from "react";
import { ProfileIcon } from "../components";
import { getUser } from "../backend";

class Composer extends Component {
  render() {
    const user = getUser(this.props.user);
    return (
      <div className="composer card">
        <img src="images/icons/what-on-mind.png">
        </img>
      </div>
    )
  }
}

export default Composer;
