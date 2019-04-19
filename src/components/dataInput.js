import React, { Component } from "react";

class DataInput extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.fileLoaded = this.fileLoaded.bind(this);
    this.fileInput = React.createRef();
  }

  updateData(dataString) {
    let data = JSON.parse(dataString);
    this.props.newData(data);
  }

  fileLoaded() {
    console.log("loading file");
    let file = this.fileInput.current.files[0];
    let reader = new FileReader();
    reader.onload = e => this.updateData(e.target.result);
    console.log(file);
    reader.readAsText(file);
  }

  stopEvent(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    return (
      <input
        type="file" accept=".json"
        ref={ this.fileInput }
        onDragEnter={ this.stopEvent }
        onDragOver={ this.stopEvent }
        onChange={ this.fileLoaded }
      >
      </input>
    )
  }

}

export default DataInput;
