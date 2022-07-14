import ReactDOM from "react-dom";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MyProject from "./MyProject/MyProject";

import "./index.css";

const Menu = () => {
  return (
    <>
      <Link to="MyProject/">MyProject</Link>
      <br />
      <Link to="/">GoBack</Link>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="side">ads</div>
      <div className="center">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="MyProject//*" element={<MyProject />} />
        </Routes>
      </div>
      <div className="side">ads</div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
