import React, { Component } from "react";
import { Name, NameList, Text } from "../components";
import { getUser } from "../backend";

class PostCircumstance extends Component {
  render() {
    /**
     * Props:
     *  - type: enum {"link", "experience", "timeline", "group", "profilePicture"}
     *  - dest: string, only for link, experience, and timeline
     *  - people: user names, only for experience
     *  - doing: only for experience
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
      case "experience":
        content = (
          <>
            {" "}
            is
            {" "}
            <a>
              <Text text={ this.props.doing }/>
            </a>
            {" "}
            with
            {" "}
            <NameList users={ this.props.people }/>
            {" "}
            at
            {" "}
            <a>
              <Text text={ this.props.dest }/>
            </a>
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
