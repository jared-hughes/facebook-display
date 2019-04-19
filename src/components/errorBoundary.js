import React, { Component } from "react";
import { DataInput } from "../components";

class ErrorBoundary extends Component {
  // https://codepen.io/gaearon/pen/wqvxGa
  constructor(props) {
    super(props);
    this.clearError = this.clearError.bind(this);
    this.newData = this.newData.bind(this);
    this.state = {
      dataInserted: false,
      error: null,
      errorInfo: null
    };
  }

  clearError() {
    this.setState({
      dataInserted: true,
      error: null,
      errorInfo: null
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  newData(data) {
    this.props.newData(data);
    this.clearError();
  }

  render() {
    if (!this.state.dataInserted) {
      return (
        <div>
          <h2> Facebook Display </h2>
          <p> Insert your data.json file to continue </p>
          <DataInput newData={ this.newData }/>
        </div>
      )
    } else if (this.state.errorInfo) {
      // error
      return (
        <div>
          <h2> Something went wrong. </h2>
          <p> Perhaps you can try a new data.json: </p>
          <DataInput newData={ this.newData }/>
          <p> Or maybe something really bad happened: </p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
