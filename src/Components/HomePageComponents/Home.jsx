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
import WorkExperience from "../WorkExperience";
import VolunteerExperience from "../VolunteerExperiences";
import ProjectExperience from "../ProjectExperience";
//CSS
import "animate.css/animate.min.css";

import '../StylesCSS/Main.css'
import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from 'react';
import Contact from "./Contact";
import ResumeCard from "./ResumeCard";


function Home() {

  const [color] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)
  const [language, setLanguage] = useState("RJS")
  
  const myElementRef = useRef(null);

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

        
        <header className="header">
          <div className="title" id="Title">
          {/* <h1 className="my-name">Ostavo Palacios</h1> */}
            <AnimationOnScroll
              animateIn="animate__zoomIn"
              initiallyVisible={true}
              animateOut="animate__zoomOut"
              duration={3}
              animateOnce={true}
            >
              <img src={SunsetParkBanner} alt="sunsetpark" className="banner" />
            </AnimationOnScroll>
          </div>
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
            </div>
        </header>

            <div className="my-info">
              <AnimationOnScroll
                duration={2}
                animateIn="animate__fadeIn"
                delay={4}
                animateOnce={true}
              >
                <section ref={myElementRef} id="Contact">
                  <br />
                  <Contact />
                </section>
              </AnimationOnScroll>   
              <ResumeCard />      
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
    </React.Fragment>
  );
}

const buttonColor = (colors) => {
  // console.log(colors)
  return {
    backgroundColor: colors ? "#282c34" : "white",
    color: colors ? "aliceblue" : "black"

  }
}

const basicColors = (colors) => {
  return {
    backgroundColor: colors ? "white" : "#282c34",
    color: colors ? "black" : "aliceblue"
  }
}

export default Home;
