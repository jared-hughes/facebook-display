import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Content } from "./components";
import { getData } from "./backend";

class App extends Component {
  render() {
    return (
      <>
        <div className="top-block">
          <img className="coverPhoto" src="images/icons/intro/flag.jpg"></img>
          <div className="white-bar">
            <img src="images/icons/intro/white-bar.png"></img>
          </div>
          <div className="portrait-overlay">
            <img src="images/profiles/britain.png"></img>
          </div>
        </div>
        <Content data={ getData() }/>
      </>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('global-container')
);
