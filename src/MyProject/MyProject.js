import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import JomTaip from "./JomTaip/JomTaip";

const MyProjectMenu = () => {
  return (
    <>
      <Link to="JomTaip/">JomTaip</Link>
      <br/>
      <Link to="/">GoBack</Link>
    </>
  );
};

const MyProject = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyProjectMenu />} />
        <Route path="JomTaip/" element={<JomTaip />} />
      </Routes>
    </>
  );
};

export default MyProject;
