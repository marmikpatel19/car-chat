import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
