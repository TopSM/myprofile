import React, { useState } from "react";
//PDF
import Resume from "./../MyDocuments/Ostavo-Palacios-Resume-2024.pdf";
//Images
import logo from "./../Pictures/Pfp.jpg";
import SunsetParkBanner from "./../Pictures/SunsetParkBanner.jpg";

//Installed Components
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { goToTop } from "react-scrollable-anchor";
import Button from "@mui/material/Button";

//My Components
import WorkExperience from "./WorkExperience";
import VolunteerExperience from "./VolunteerExperiences";
import ProjectExperience from "./ProjectExperience";
//CSS
// import AOS from 'aos';
// import "aos/dist/aos.css";

import '../StylesCSS/Main.css'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <React.Fragment>
      <div className="title-fitting">
        <h2 className="sections">Contact</h2>
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
          <h4> <span className="contact-list-name">My Resume</span>:
          <a href={Resume}> Ostavo Palacios </a></h4>
        </li>
        <li>
          <span className="contact-list-name">Programming Languages</span>:
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>C/C++,</Link>
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>Python,</Link>
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>React.Js,</Link>
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>Java,</Link>
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
          Guitar, Chess, Hiking, Running, Cycling
        </li>
      </ul>
    </React.Fragment>
  );
}
// AOS.init({
//   duration: 1200
// });
function Home() {

  const [color] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true
  )
  return (
    <React.Fragment>

      <div style={basicColors(color)}>
        <div className="buttonPlace">
        </div>

        <div className="Title" id="Title">
          <img src={SunsetParkBanner} alt="sunsetpark" className="banner" data-aos="zoom-out" />
        </div>
        <header className="header">
          <div>
            <div className="intro ">
              <div className="title-pic">
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
                      Ostavo Palacios received his Bachelor’s of
                      Engineer in Computer Engineering from the Grove School of
                      Engineering at The City College of New York. Born and raised in
                      NYC, he is a first generation college graduate and proficient in
                      multiple programming languages such as C++, Python, Javascript,
                      and more. He is also very adaptable and ready to learn new
                      concepts and ideas at a given time. He has taken many managerial
                      positions for projects and conducted many web development
                      projects. Ostavo also aspires to get more minority students
                      interested in coding. Ostavo's core values are education,
                      curiosity, innovation, and motivation. He is a LAESA alumni
                      and currently employed as an intern undergad research assistant
                      at NYU.
                      </p>
                  </div>
                  <Lists></Lists>
                </div>
              </div>
            </div>
            <div className="my-info">
              <section id="Contact">
                <br />
                <Contact />
              </section>
              <section id="WorkExperience">
                <br />
                <WorkExperience />
              </section>
              <section id="Projects">
                <br />
                <ProjectExperience ProgLang/>
              </section>

              <section id="VolunteerExperience">
                <br />
                <VolunteerExperience />
              </section>
              <div className="button" >
                <Button
                  style={buttonColor(color)}
                  variant="outlined"
                  onClick={() => document.getElementById('Title')?.scrollIntoView()}
                >
                  Go to Top
            </Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}

const basicColors = (colors) => {
  return {
    backgroundColor: colors ? "white" : "#282c34",
    color: colors ? "black" : "aliceblue"

  }
}
const buttonColor = (colors) => {
  // console.log(colors)
  return {
    backgroundColor: colors ? "#282c34" : "white",
    color: colors ? "aliceblue" : "black"

  }
}

export default Home;
