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
    let data = this.state.data;
    return (
      <>
        <div className="fb-header">
          <img src={ data.images.blue }></img>
        </div>
        <div id="global-container">
          <div className="top-block">
            <img className="coverPhoto" src={ data.images.banner }></img>
            <div className="white-bar">
              <img src={ data.images.white }></img>
            </div>
            <div className="portrait-overlay">
              <ProfileIcon user={ data.viewer }/>
            </div>
          </div>
          <div className="fb-content" id="content">
            <div id="left-col">
              <img src={ data.images.intro } id="introDesc"></img>
              <img src={ data.images.friends }></img>
            </div>
            <div id="content-col">
              <div id="right-col">

              </div>
              <div id="content-area">
                <Composer
                  user={ data.viewer }
                  images = { data.images }
                />
                <PostList viewer={ data.viewer }
                  posts={ data.posts }/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Content;
