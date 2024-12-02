import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
//PDF
import Resume from "./../../MyDocuments/Ostavo-Palacios-Resume-2024.pdf";
import { Link } from "react-router-dom";

import { useEffect } from 'react';
function BioList({color,language,setLanguage,setExperienceCard}) {

    useEffect(() => {
        if (location.hash) {
          const element = document.getElementById("Projects");
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [language]);

    const setProjectLanguage = (lang) =>{

        setLanguage(()=>lang)
        setExperienceCard(() => "Projects")
        document.getElementById("my-info")?.scrollIntoView();
    }
    let bodyClasses = "section-format "

    bodyClasses += color? "color-toggle-white":  "color-toggle-black"
    return (
    <div className={bodyClasses}>
        <React.Fragment>
        <ul className="no-bullets resume-bullets">

            <li className="contact-list">
            <AnimationOnScroll
                animateIn="animate__shakeX"
                initiallyVisible={true} >                
                <h4>
                    <span className="contact-list-name">My Resume</span>:{" "}
                    <a href={Resume} className='a-link'>Ostavo Palacios</a>
                </h4>

            </AnimationOnScroll>
            </li>

            <li>
                <span className="contact-list contact-list-name">Programming Languages:</span>
                <a className='a-link' onClick={() => setProjectLanguage('C')}>  C/C++,</a>{" "}
                <a className='a-link' onClick={() => setProjectLanguage('Py')}> Python,</a>{" "}
                <a className='a-link' onClick={() => setProjectLanguage('RJS')}>React.Js,</a>{" "}
                <a className='a-link' onClick={() => setProjectLanguage('J')}>  Java</a>
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
      </div>
  )
}

export default BioList