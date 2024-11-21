import React from 'react'

function BioList() {
  return (
    <div>
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
            <Link onClick={() => document.getElementById('Projects')?.scrollIntoView()}>Java</Link>
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