import React, { Component } from "react";
import { Name } from "../components";
import { getUser } from "../backend";

class PostCircumstance extends Component {
  render() {
    /**
     * Props:
     *  - type: enum {"link", "timeline", "group", "profilePicture"}
     *  - dest: string, only for link and timeline
     *  - user: the user who sent
     */
    let content;
    const user = getUser(this.props.user);
    switch (this.props.type) {
      case "link":
        content = (
          <>
            {" "} shared a {" "}
            <a href="">
              link
            </a>
            {" "} to the group: {" "}
            <Name secondary user={ this.props.dest }/>
          </>
        )
        break;
      case "group":
        content = (
          <>
          </>
        )
        break;
      case "timeline":
        content = (
          <>
            <span className="timeline-arrow-wrapper">
              <img src="images/icons/timeline-directed-arrow.png"></img>
            </span>
            <Name user={ this.props.dest }/>
          </>
        )
        break;
      case "profilePicture":
        content = (
          <>
            {" "}
            updated { user.possessivePronoun } profile picture
          </>
        )
        break;
      default:
        throw new Error("Invalid type for postCircumstance: " + this.props.type);
    }
    return (
      <span className="poster">
        <Name user={ this.props.user }/>
        { content }
      </span>
    )
  }
}

export default PostCircumstance;
