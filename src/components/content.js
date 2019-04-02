import React, { Component } from "react";
import { ChooseProfile, Composer, PostList } from "../components";

class Content extends Component {
  constructor(props) {
    super(props);
    this.viewerChange = this.viewerChange.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  viewerChange(value) {
    this.setState((state, props) => ({
      data: {
        ...state.data,
        viewer: value
      }
    }));
  }

  render() {
    return (
      <>
        <div className="fb-header">
          <h2> Facebook Generator </h2>
          <p>
            Build your own Facebook Feed. All graphical material is protected by the copyright owner.
            This generator is in no way affiliated with Facebook. May only be used for personal use.
          </p>
        </div>
        <div className="fb-content" id="content">
          <div id="left-col">
            <div id="user-data">
              <div id="your-name">
                Your name:
                <ChooseProfile onChange={ this.viewerChange }
                  users = { this.state.data.users }/>
              </div>
            </div>
          </div>
          <div id="content-col">
            <div id="right-col">

            </div>
            <div id="content-area">
              <Composer user={ this.state.data.viewer }/>
              <PostList viewer={ this.state.data.viewer }
                posts={ this.state.data.posts }/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Content;
