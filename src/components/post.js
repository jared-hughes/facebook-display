import React, { Component } from "react";
import { ProfileIcon } from "./components";

class Post extends Component {
  render() {
    return (
      <div className="post card">
        <div className="post-main-content">
          <div className="header">
            <ProfileIcon src="images/profiles/britain.png"/>
            <div className="post-info">
              <span className="poster">
                <span className="name">
                  <a href="" className="profile-link">
                    Great Britain
                  </a>
                </span>
                {" "} shared a {" "}
                <a href="">
                  link
                </a>
                {" "} to the group: {" "}
                <a href="" className="profile-link">
                  The Allies
                </a>
              </span>
              <div className="info">
                <span className="time">
                  1939
                </span>
              </div>
            </div>
            <div className="dots-wrapper">
              <img src="images/icons/three-dots.png">
              </img>
            </div>
          </div>
          <div className="content">
            <p>
              hey hey! come to the vams bullet journal workshop :)) next 3 thursdays at lunch.
            </p>

            <p>
              no experience needed, all decorative supplies will be provided whoohoo
            </p>

            <p>
              stop by room 63 (ms. parker’s room across horseshoe)
            </p>
          </div>
          <div className="attachment full-width">
            <img className="image-full-width" src="images/posts/attachment_image.png">
            </img>
          </div>
        </div>
        <div className="actions full-width">
          <img src="images/icons/post-actions-bar.png">
          </img>
        </div>
        comments todo
      </div>
    )
  }
}

export default Post;
