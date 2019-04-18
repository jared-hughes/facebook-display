import React, { Component } from "react";

class Time extends Component {
  render() {
    return (
      <span className="time">
        { this.props.time }
      </span>
    )
  }
}

export default Time;
