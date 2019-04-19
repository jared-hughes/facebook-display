import React, { Component } from "react";
import { ChooseProfile, Composer, PostList, ProfileIcon, DataInput } from "../components";

class Content extends Component {
  render() {
    let data = this.props.data;
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
              <img src={ data.images.intro } id="introDesc" className="side-card"></img>
              <img src={ data.images.friends }></img>
              <div className="side-card print-hidden">
                <DataInput newData={ this.props.newData }/>
              </div>
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
