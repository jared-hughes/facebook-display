import React from "react";
import ReactDOM from "react-dom";
import { Content, Composer, Post } from "./components";

// class App extends React.Component {
//   render() {
//     return ()<Feed> hello1 </Feed>;
//   }
// }

const element = (
  <Content>
    <Composer user="britain"/>
    <Post user="britain" circumstanceType="experience"
      circumstanceDest="San Francisco" circumstanceDoing="eating"
      circumstancePeople={["france", "usa"]}
      time="Feb 29, 1939"
      content={
        `
          Happy Birthday to John and Johnny

          Thanks for our wonderful family 👪
        `
      }
      attachment="images/posts/attachment_image.png"
      comments={[
        {
          author: "britain",
          tagged: "france",
          content: "yoyoyo y**oy**oyo 👪 _yoyoyo_ yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo yoyoyo",
          time: "3h",
        },
        {
          author: "britain",
          content: "yeet",
          time: "9h",
          tagged: [
            "italy",
            "germany",
          ],
          children: [
            {
              author: "italy",
              content: "yee-👪haw",
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
