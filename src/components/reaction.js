import React, { Component } from "react";

class Reaction extends Component {
  render() {
    let source;
    switch (this.props.react) {
      case "angry":
        source = "images/icons/reacts/angry.png";
        break;
      case "heart":
      case "love":
        source = "images/icons/reacts/heart.png";
        break;
      case "laugh":
      case "haha":
        source = "images/icons/reacts/laugh.png";
        break;
      case "like":
      case "thumbs-up":
        source = "images/icons/reacts/like.png";
        break;
      case "sad":
      case "cry":
        source = "images/icons/reacts/sad.png";
        break;
      case "surprised":
      case "gasp":
        source = "images/icons/reacts/surprised.png";
        break;
      default:
        throw new Error("React " + this.props.react + " not recognized");
    }

    return (
      <span className="reaction" style={{ zIndex: this.props.z }}>
        <img src={ source }></img>
      </span>
    )
  }
}

export default Reaction;
