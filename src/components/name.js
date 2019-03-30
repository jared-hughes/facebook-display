import React, { Component } from "react";
import { getUser } from "../backend";

class Name extends Component {
  render() {
    /**
     * Props:
     *  - user: name
     *  - secondary: boolean, make lighter
     */
    const user = getUser(this.props.user);
    return (
      <span className={ this.props.secondary ? "" : "name" }>
        <a href="" className="profile-link">
          { user.name }
        </a>
      </span>
    )
  }
}

export default Name;
