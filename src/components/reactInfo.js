import React, { Component } from "react";
import { ReactList, NameList } from "../components";

class ReactInfo extends Component {
  render() {
    return (
      <div className="react-info">
        <ReactList reacts={ this.props.reacts }/>
        <span>
          Liked by {" "}
          <NameList users={ this.props.likes } gray style={{color:"gray"}}/>
        </span>
      </div>
    )
  }
}

export default ReactInfo;
