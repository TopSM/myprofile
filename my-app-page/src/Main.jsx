import React from "react";
import logo from "./logo.svg";
import "./Main.css";

import WorkExperience from "./workEperience";
import VolunteerExperience from "./volunteerExperience";
import ProjectExperience from "./projectExperience";
function Contact() {
  return (
    <React.Fragment>
      <div className="Standard-fitting title-fitting">Contact me at:</div>
    </React.Fragment>
  );
}
function Main() {
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <div className="intro standard-fitting">
            <div className="title standard-fitting">
              <h2>Ostavo Palacios</h2>
              <img
                src={logo}
                alt="Ostavo"
                className="profile-picture standard-fitting "
              ></img>
            </div>
            <div>
              <div className="Bio-text standard-fitting">
                <p>hi this is a random bio</p>
              </div>
            </div>
          </div>

          <div className="my-info">
            <Contact />
            <WorkExperience />
            <ProjectExperience />
            <VolunteerExperience />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Main;
