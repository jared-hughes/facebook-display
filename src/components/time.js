import React, { Component } from "react";

class Time extends Component {
  render() {
    /**
     * Props:
     *  - time: string value of time
     */
    return (
      <span className="time">
        { this.props.time }
      </span>
    )
  }
}

export default Time;
