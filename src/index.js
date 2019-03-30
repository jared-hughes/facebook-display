import React from "react";
import ReactDOM from "react-dom";
import { Content, Composer, Post } from "./components/components";

// class App extends React.Component {
//   render() {
//     return ()<Feed> hello1 </Feed>;
//   }
// }

const element = (
  <Content>
    <Composer user="britain"/>
    <Post user="britain" circumstanceType="profilePicture"
      circumstanceDest="theAllies" time="Feb 29, 1939"
      content={[
        "hey hey! come to the vams bullet journal workshop",
        "no experience needed, all decorative supplies will be provided whoohoo",
        "stop by room 63 (ms. parker’s room across horseshoe)"
      ]}
      attachment="images/posts/attachment_image.png"
      comments={[
        {
          author: "britain",
          content: "yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo",
          time: "3h",
        },
        {
          author: "britain",
          content: "yeet",
          time: "9h",
          children: [
            {
              author: "britain",
              content: "yee-haw",
              time: "thr33h"
            }
          ],
        },
      ]}/>
  </Content>
);

ReactDOM.render(
  element,
  document.getElementById('global-container')
);
