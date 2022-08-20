import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';
import InputFeild from "./classcomponent";

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(InputFeild, null), React.createElement(App, null));