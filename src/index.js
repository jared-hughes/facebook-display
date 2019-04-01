import React from "react";
import ReactDOM from "react-dom";
import { Content, Composer, Post } from "./components";
import { data } from "./backend";

// class App extends React.Component {
//   render() {
//     return ()<Feed> hello1 </Feed>;
//   }
// }

const element = (
  <Content>
    <Composer user={ data.viewer }/>
    {
      data.posts.map((post, index) =>
        (
          <Post key={ index }
            viewer={ data.viewer }
            author={ post.author }
            circumstance={ post.circumstance }
            time={ post.time }
            content={ post.content }
            attachment={ post.attachment }
            comments={ post.comments }
          />
        )
      )
    }
  </Content>
);

ReactDOM.render(
  element,
  document.getElementById('global-container')
);
