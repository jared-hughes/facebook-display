import React, { Component } from "react";
import { ChooseProfile, Composer, PostList, ProfileIcon } from "../components";

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
        <div className="top-block">
          <img className="coverPhoto" src="images/icons/intro/flag.jpg"></img>
          <div className="white-bar">
            <img src="images/icons/intro/white-bar.png"></img>
          </div>
          <div className="portrait-overlay">
            <ProfileIcon user={ this.state.data.viewer }/>
          </div>
        </div>
        <div className="fb-content" id="content">
          <div id="left-col">
            <img src="images/icons/intro/intro.png" id="introDesc"></img>
            <img src="images/icons/intro/friends.png"></img>
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
