import React from "React";

function workExperience() {}
function Volunteer() {}
function Projects() {}
function Main() {
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <div>
            <h2>Ostavo Palacios</h2>
            <img src={logo}></img>
          </div>
          <div>
            <p className="bio"></p>
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
