import React, { Component } from "react";
import { getUser } from "../backend";
import { Text } from "../components";

class Name extends Component {
  render() {
    const user = getUser(this.props.user);
    let classes = ["name"];
    if (this.props.secondary) {
      classes.push("weak");
    }
    if (!this.props.gray) {
      classes.push("colored");
    }
    return (
      <span className={ classes.join(" ") }>
        <a href="" className="profile-link">
          <Text text={ user.name }/>
        </a>
      </span>
    )
  }
}

export default Name;
