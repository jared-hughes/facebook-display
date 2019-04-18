import React, { Component } from "react";
import { PostContent, Comments, ProfileIcon, PostCircumstance,
  Time, ResponseInfo } from "../components";
import { getUser } from "../backend";

class Post extends Component {
  render() {
    /**
     * Props:
     *  - viewer: person viewing the post
     *  - author: original poster, author of post
     *  - circumstance: the circumstance of posting
     *  - time: string, time posted
     *  - content: string content of post
     *  - attachment: url to attachment image, will be stretched horizontally
     *  - response: how post is received by audience
     */
    const user = getUser(this.props.author);

    return (
      <div className="post card">
        <div className="post-main-content">
          <div className="header">
            <ProfileIcon user={ this.props.author }/>
            <div className="post-info">
              <PostCircumstance
                author={ this.props.author }
                content={ this.props.circumstance }
              />
              <div className="info">
                <Time time={ this.props.time }/>
              </div>
            </div>
            <div className="dots-wrapper">
              <img src="images/icons/three-dots.png">
              </img>
            </div>
          </div>
          <PostContent content={ this.props.content }/>
          <div className="attachment full-width">
            <img className="image-full-width" src={ this.props.attachment }>
            </img>
          </div>
        </div>
        <ResponseInfo response={ this.props.response }/>
        <div className="actions full-width">
          <img src="images/icons/post-actions-bar.png">
          </img>
        </div>
        <Comments viewer={ this.props.viewer }
          content={ this.props.comments }
        />
      </div>
    )
  }
}

export default Post;
