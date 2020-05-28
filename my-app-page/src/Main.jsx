import React from "react";

import logo from "./Pictures/Pfp.jpg";
import { Button } from "@material-ui/core";

import "./Main.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { goToTop } from "react-scrollable-anchor";
import WorkExperience from "./workEperience";
import VolunteerExperience from "./volunteerExperience";
import ProjectExperience from "./projectExperience";

function Contact() {
  return (
    <React.Fragment>
      <div className="Standard-fitting title-fitting">
        <h2>Contact</h2>
        <ul className="no-bullets">
          <li className="contact-list">
            <span className="contact-list-name">Telophone: </span> 347-320-3164
          </li>
          <li className="contact-list">
            <span className="contact-list-name">LinkedIn: </span>
            <a href="https://www.linkedin.com/in/ostavo-palacios/">
              https://www.linkedin.com/in/ostavo-palacios/
            </a>
          </li>
          <li className="contact-list">
            <span className="contact-list-name">Email: </span>
            Ostavo.palacios@gmail.com
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
function Lists() {
  return (
    <React.Fragment>
      <ul className="no-bullets">
        <li className="contact-list">
          <span className="contact-list-name">Programming Languages: </span>
          <AnchorLink href="#C/C++"> C/C++</AnchorLink>,
          <AnchorLink href="#Python"> Python</AnchorLink>,
          <AnchorLink href="#ReactJS"> React.Js</AnchorLink>,
          <AnchorLink href="#Java"> Java</AnchorLink>,
          <AnchorLink href="#Assembly"> Assembly</AnchorLink>
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Design Software:</span> Matlab,
          MultiSim, Arduino, Android Studio, React, Git
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Languages:</span> English, Spanish
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Soft Skills: </span>
          Leadership, Communication, Creative, Persistent, Cooperative,
          Adapbatable, Self Motivated, Commited, Patient, Planning, Versatile,
          Quick Learner
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Hobbies: </span>
          Photography, Guitar, Chess, Hiking
        </li>
      </ul>
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
              <div className="about-text">
                <div className="text standard-fitting">
                  <p>
                    Ostavo Palacios is a 4th year Computer Engineering Student
                    at the GSOE at City Colege of New York. He is a 22yr old
                    Mexican Ameirican, first generation student, born and raised
                    in NYC. In addition to being proficient in multiple
                    programming Languages he also has experience as a project
                    manager in web development managing a team of 4 members. A
                    lot of the projects and work that he has contributed to are
                    related to education, and engaging students in the 6th-12th
                    grade to promote a higher education in STEM. He values
                    education, curiosity, innovation, and passion.
                  </p>
                </div>
                <Lists></Lists>
              </div>
            </div>
          </div>
          <div className="my-info">
            <section id="Contact">
              <Contact />
            </section>
            <section id="WorkExperience">
              <WorkExperience />
            </section>
            <ProjectExperience />
            <section id="VolunteerExperience">
              <VolunteerExperience />
            </section>
            <div className="button">
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => goToTop()}
              >
                Go to Top
              </Button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Main;
