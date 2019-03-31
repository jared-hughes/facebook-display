import React, { Component } from "react";
import { getUser } from "../backend";
import { Text } from "../components";

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
          <Text text={ user.name }/>
        </a>
      </span>
    )
  }
}

export default Name;
