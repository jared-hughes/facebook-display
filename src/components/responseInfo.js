import React, { Component } from "react";
import { ReactInfo } from "../components";

class ResponseInfo extends Component {
  render() {
    let response = this.props.response;
    return (
      <div className="response-info">
        <ReactInfo reacts={ response.reacts } likes={ response.likes }/>
        <div className="response-spread">
          <span>
            { response.comments }
            {" "}
            Comments
          </span>
          <span>
            { response.shares }
            {" "}
            Shares
          </span>
        </div>
      </div>
    )
  }
}

export default ResponseInfo;
