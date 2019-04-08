import React, { Component } from "react";
import { PostContent, Comments, ProfileIcon, PostCircumstance,
  Time, ResponseInfo } from "../components";
import { getUser } from "../backend";

class Post extends Component {
  render() {
    /**
     * Props:
     *  - viewer: person viewing the post
     *  - user: original poster
     *  - circumstanceType: enum {"link", "timeline", "group", "profilePicture"}
     *  - circumstanceDest: string, only for link and timeline
     *  - time: string, time posted
     *  - attachment: url to attachment image, will be stretched horizontally
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
        {/*          {
                    reacts: [
                      "like",
                      "love",
                      "angry"
                    ],
                    likes: [
                      "germany",
                      "britain"
                    ],
                    comments: "9.7K",
                    shares: "48K"
                  }*/}
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
