import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom"; // BrowserRouter
import { App } from "./App/App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
