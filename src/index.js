import React from "react-dom";
import ReactDOM from "react-dom";
import { Feed } from "./feed.js";

// class App extends React.Component {
//   render() {
//     return ()<Feed> hello1 </Feed>;
//   }
// }

const element = (
  <Feed>
    <div class="child">
      ay
    </div>
  </Feed>
);

ReactDOM.render(
  element,
  document.getElementById('global-container')
);
