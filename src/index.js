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
    <Post user="britain" circumstanceType="link"
      circumstanceDest="theAllies"/>
  </Content>
);

ReactDOM.render(
  element,
  document.getElementById('global-container')
);
