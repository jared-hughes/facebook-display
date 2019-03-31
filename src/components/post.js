import React, { Component } from "react";
import { PostContent, Comments, ProfileIcon, PostCircumstance,
  Time } from "../components";
import { getUser } from "../backend";

class Post extends Component {
  render() {
    /**
     * Props:
     *  - user: original poster
     *  - circumstanceType: enum {"link", "timeline", "group", "profilePicture"}
     *  - circumstanceDest: string, only for link and timeline
     *  - time: string, time posted
     *  - attachment: url to attachment image, will be stretched horizontally
     */
    const user = getUser(this.props.user);

    return (
      <div className="post card">
        <div className="post-main-content">
          <div className="header">
            <ProfileIcon user={ this.props.user }/>
            <div className="post-info">
              <PostCircumstance type={ this.props.circumstanceType }
                dest={ this.props.circumstanceDest }
                user={ this.props.user }
                doing={ this.props.circumstanceDoing }
                people= { this.props.circumstancePeople } />
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
        <div className="actions full-width">
          <img src="images/icons/post-actions-bar.png">
          </img>
        </div>
        <Comments content={ this.props.comments }/>
      </div>
    )
  }
}

export default Post;
