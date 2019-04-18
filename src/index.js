import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Content } from "./components";
import { getData } from "./backend";

class App extends Component {
  render() {
    return (
      <Content data={ getData() }/>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
