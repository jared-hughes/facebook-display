import React, { Component } from "react";

class ChooseProfile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let options = [];
    for (let user in this.props.users) {
      options.push(
        <option key={ user } value={ user }>
          { this.props.users[user].name }
        </option>
      )
    }
    return (
      <select onChange={ this.handleChange }>
        { options }
      </select>
    )
  }
}

export default ChooseProfile;
