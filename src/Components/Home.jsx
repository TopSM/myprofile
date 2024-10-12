import React, { useState } from "react";
//PDF
import Resume from "./../MyDocuments/Ostavo-Palacios-Resume-2024.pdf";
//Images
import logo from "./../Pictures/Pfp.jpg";
import SunsetParkBanner from "./../Pictures/SunsetParkBanner.jpg";

//Installed Components
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//My Components
import WorkExperience from "./WorkExperience";
import VolunteerExperience from "./VolunteerExperiences";
import ProjectExperience from "./ProjectExperience";
//CSS
import "animate.css/animate.min.css";

import '../StylesCSS/Main.css'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <React.Fragment>
      <AnimationOnScroll
        className="title-fitting contact-fitting"
        animateIn="animate__fadeInDown"
        animateOnce={true}
      >
        <h2 className="sections">Contact</h2>
        <div className="info-list title-fitting">
          <ul className="no-bullets">
            <li className="contact-list">
              {/* <span className="contact-list-name">Telophone</span>: 347-320-3164 */}
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
      </AnimationOnScroll>
    </React.Fragment>
  );
}
function Lists() {
  return (
    <React.Fragment>
      <ul className="no-bullets resume-bullets">
        <li className="contact-list">
          <AnimationOnScroll
            animateIn="animate__shakeX"
            initiallyVisible={true}
          >
            <h4> <span className="contact-list-name">My Resume</span>:{" "}
              <a href={Resume}>Ostavo Palacios</a></h4>
          </AnimationOnScroll>
        </li>
        <li>
          <span className="contact-list contact-list-name">Programming Languages:</span>
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>C/C++,</Link>{" "}
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>Python,</Link>{" "}
          <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>React.Js,</Link>{" "}
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
        </li>
        <li className="contact-list">
          <span className="contact-list-name">Hobbies</span>: Photography,
          Guitar, Chess, Hiking, Running, Cycling, Kickboxing, Dancing
        </li>
      </ul>
    </React.Fragment>
  );
}

function Home() {

  const [color] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true
  )
  return (
    <React.Fragment>

      <div style={basicColors(color)}>
        <div className="fixed-button project-btn">
          <Button
            className="buttonPlace"
            onClick={() => document.getElementById('Title')?.scrollIntoView()}
          >
            Up
          </Button>
        </div>

        <div className="Title" id="Title">
          <AnimationOnScroll
            animateIn="animate__zoomIn"
            initiallyVisible={true}
            animateOut="animate__zoomOut"
            duration={3}
            animateOnce={true}
          >
            <img src={SunsetParkBanner} alt="sunsetpark" className="banner" data-aos="zoom-out" offset={0} />
          </AnimationOnScroll>
        </div>
        <header className="header">
          <div>
            <div className="intro ">
              <div className="title-pic">
                <AnimationOnScroll
                  duration={2}
                  animateIn="animate__zoomIn"
                  animateOnce={true}
                >
                  <img
                    src={logo}
                    alt="Ostavo"
                    className="profile-picture standard-fitting "
                  ></img>
                </AnimationOnScroll>
              </div>

              <AnimationOnScroll
                className="about-text"
                animateIn="animate__fadeInRight"
                animateOnce={true}
              >
                <div className="text standard-fitting">
                  <p>
                    Ostavo Palacios received his Bachelor’s of
                    Engineering in Computer Engineering from the The City College of New York in 2021.
                    He is Born and raised in NYC and is a first generation college graduate who is proficient in
                    multiple programming languages such as Javascript, C#
                    and more. He is currently working at Lockheed Martin as an associate software engineer
                    programming in C++, Java, and Python. In addition to his current work he has a strong interest in
                    front end development programming primarily in React.JS  He is very adaptable and ready to learn new
                    concepts and ideas. In college He has taken many managerial
                    positions for projects and conducted many web development
                    projects. He aspires to get more minority students
                    interested in coding. Ostavo's core values are education,
                    curiosity, innovation, efficieny, and consistency.
                  </p>
                </div>
                <Lists></Lists>
              </AnimationOnScroll>
            </div>
            <div className="my-info">
              <AnimationOnScroll
                duration={2}
                animateIn="animate__fadeIn"
                delay={4}
                animateOnce={true}
              >
                <section id="Contact">
                  <br />
                  <Contact />
                </section>
              </AnimationOnScroll>
              <section id="WorkExperience">
                <br />
                <WorkExperience />
              </section>
              <section id="Projects">
                <br />
                <ProjectExperience ProgLang />
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
