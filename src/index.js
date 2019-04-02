import React from "react";
import ReactDOM from "react-dom";
import { Content } from "./components";
import { getData } from "./backend";

const element = (
  <Content data={ getData() }/>
);

ReactDOM.render(
  element,
  document.getElementById('global-container')
);
