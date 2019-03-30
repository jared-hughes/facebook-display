import React, { Component } from "react";
import { Name } from "./components";
import getUser from "../getUser";

class PostCircumstance extends Component {
  render() {
    /**
     * Props:
     *  - type: enum {"link", "timeline", "group", "profilePicture"}
     *  - dest: string, only for link and timeline
     */
    switch (this.props.type) {
      case "link":
        return (
          <span className="poster">
            <Name user={ this.props.user }/>
            {" "} shared a {" "}
            <a href="">
              link
            </a>
            {" "} to the group: {" "}
            <Name secondary user={ this.props.dest }/>
          </span>
        )
      case "group":
      default:
        throw new Error("invalid type for postCircumstance: " + this.props.type);
    }
  }
}

export default PostCircumstance;
