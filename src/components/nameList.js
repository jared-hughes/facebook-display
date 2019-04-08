import React, { Component } from "react";
import { Name } from "../components";
import { getUser } from "../backend";
import { guaranteeList } from "../utils";

class NameList extends Component {
  render() {
    /**
     * Props:
     *  - users: list of users to be a list
     */
    const users = guaranteeList(this.props.users);
    const names = users.map((user, index) => (
      <span key={ index }>
        <Name secondary gray={ this.props.gray } user={ user }/>
        { users.length == 2 || index == users.length - 1 ? "" : ", " }
        { index == users.length - 2 ? " and " : "" }
      </span>
    ));
    return (
      <span>
        { names }
      </span>
    )
  }
}

export default NameList;
