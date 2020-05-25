import React from "react";
import logo from "./logo.svg";

function workExperience() {
  return <React.Fragment></React.Fragment>;
}
function Volunteer() {
  return <React.Fragment></React.Fragment>;
}
function Projects() {
  return <React.Fragment></React.Fragment>;
}
function Main() {
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <div>
            <h2>Ostavo Palacios</h2>
            <img src={logo} alt="Ostavo"></img>
          </div>
          <div>
            <p className="bio">hi</p>
          </div>
        </div>
        <Projects />
        <workExperience />
        <Volunteer />
      </header>
    </React.Fragment>
  );
}
export default Main;
