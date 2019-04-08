import React, { Component } from "react";
import { Reaction } from "../components";
import { guaranteeList } from "../utils";

class ReactList extends Component {
  render() {
    let reacts = guaranteeList(this.props.reacts);
    return (
      <span className="react-list">
        {
          reacts.map((react, index) =>
            (
              <Reaction key={ index }
                react={ react }
                z={ 9 - index }
              />
            )
          )
        }
      </span>
    )
  }
}

export default ReactList;
