import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
var app = (
  <>
    <React.StrictMode>
      <App name="Abc"></App>
      <App name="Def"></App>
    </React.StrictMode>
  </>
);


ReactDOM.render(app, document.getElementById("root"));
