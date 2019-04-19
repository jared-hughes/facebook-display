import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Content, ErrorBoundary } from "./components";
import { getData } from "./backend";

class App extends Component {
  constructor(props) {
    super(props);
    this.dataChange = this.dataChange.bind(this);
    this.state = {
      data: getData()
    }
  }

  dataChange(value) {
    this.setState((state, props) => ({
      data: value
    }));
  }

  render() {
    return (
      <ErrorBoundary newData= { this.dataChange }>
        <Content newData={ this.dataChange }
          data={ this.state.data }/>
      </ErrorBoundary>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
