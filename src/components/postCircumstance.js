import React, { Component } from "react";
import { Name, NameList, Text } from "../components";
import { getUser } from "../backend";

class PostCircumstance extends Component {
  render() {
    /**
     * Props:
     *  - type: enum {"link", "experience", "timeline", "group", "profilePicture", "coverPhoto", "plain"}
     *  - dest: string, only for link, experience, and timeline
     *  - people: user names, only for experience
     *  - doing: only for experience
     *  - user: the user who sent
     */
    let content;
    const info = this.props.content;
    const user = getUser(this.props.author);
    switch (info.type) {
      case "link":
        content = (
          <>
            {" "} shared a {" "}
            <a href="">
              link
            </a>
            {" "} to the group: {" "}
            <Name secondary user={ info.dest }/>
          </>
        )
        break;
      case "group":
      case "plain":
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
            <Name user={ info.dest }/>
          </>
        )
        break;
      case "profilePicture":
        content = (
          <>
            {" "}
            updated { user.possessivePronoun } profile picture.
          </>
        )
        break;
      case "coverPhoto":
        content = (
          <>
            {" "}
            updated { user.possessivePronoun } cover photo.
          </>
        )
      case "experience":
        content = (
          <>
            {" "}
            is
            {" "}
            <a>
              <Text text={ info.doing }/>
            </a>
            {" "}
            with
            {" "}
            <NameList users={ info.people }/>
            {" "}
            at
            {" "}
            <a>
              <Text text={ info.dest }/>
            </a>
          </>
        )
        break;
      default:
        throw new Error("Invalid type for postCircumstance: " + info.type);
    }
    return (
      <span className="poster">
        <Name user={ this.props.author }/>
        { content }
      </span>
    )
  }
}

export default PostCircumstance;
