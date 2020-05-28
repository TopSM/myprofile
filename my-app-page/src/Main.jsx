import React from "react";
//PDF
import Resume from "./Ostavo_Palacios_Resume.pdf";
//Images
import logo from "./Pictures/Pfp.jpg";
import { Button } from "@material-ui/core";

//Installed Components
import AnchorLink from "react-anchor-link-smooth-scroll";
import { goToTop } from "react-scrollable-anchor";

//My Components
import WorkExperience from "./workEperience";
import VolunteerExperience from "./volunteerExperience";
import ProjectExperience from "./projectExperience";

//CSS
import "./Main.css";
function Contact() {
  return (
    <React.Fragment>
      <div className=" title-fitting">
        <h2>Contact</h2>
        <div className="info-list title-fitting">
          <ul className="no-bullets">
            <li className="contact-list">
              <span className="contact-list-name">Telophone</span>: 347-320-3164
            </li>
            <li className="contact-list">
              <span className="contact-list-name">LinkedIn</span>:&ensp;
              <a href="https://www.linkedin.com/in/ostavo-palacios/">
                https://www.linkedin.com/ostavo-palacios/
              </a>
            </li>
            <li className="contact-list">
              <span className="contact-list-name">Email</span>:
              Ostavo.palacios@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
function Lists() {
  return (
    <React.Fragment>
      <ul className="no-bullets">
        <li className="contact-list">
          <span className="contact-list-name">My Resume</span>:
          <a href={Resume}> Ostavo Palacios </a>
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Programming Languages</span>:
          <AnchorLink href="#C/C++"> C/C++</AnchorLink>,
          <AnchorLink href="#Python"> Python</AnchorLink>,
          <AnchorLink href="#ReactJS"> React.Js</AnchorLink>,
          <AnchorLink href="#Java"> Java</AnchorLink>,
          <AnchorLink href="#Assembly"> Assembly</AnchorLink>
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Design Software</span>: Matlab,
          MultiSim, Arduino, Android Studio, React, Git
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Languages</span>: English, Spanish
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Soft Skills</span>
          :&ensp;Leadership, Communication, Creative, Persistent, Cooperative,
          Adapbatable, Self Motivated, Commited, Patient, Planning, Versatile,
          Quick Learner
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Hobbies</span>: Photography,
          Guitar, Chess, Hiking
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
                    at the Grove School of Engineering at City College of New
                    York. He is a 22 year old Mexican American, first generation
                    student, that was born and raised in NYC. Along with being
                    proficient in multiple programming languages, he has had
                    experience working as a project manager. He worked on web
                    development while managing a team of four. A lot of the
                    projects and work that he has done are related to education;
                    engaging students in the 6th-12th grade to pursue a higher
                    education in STEM. Ostavo core values are education,
                    curiosity, innovation, and motivation.
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
