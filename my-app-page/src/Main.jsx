import React, { Component } from "react";
//PDF
import Resume from "./Ostavo-Palacios-Resume.pdf";
//Images
import logo from "./Pictures/Pfp.jpg";
import SunsetParkBanner from "./Pictures/SunsetParkBanner.jpg";

//Installed Components
import AnchorLink from "react-anchor-link-smooth-scroll";
import { goToTop } from "react-scrollable-anchor";
import { Button } from "@material-ui/core";

//My Components
import WorkExperience from "./workEperience";
import VolunteerExperience from "./volunteerExperience";
import ProjectExperience from "./projectExperience";

//CSS
import "./Main.css";
import AOS from 'aos';
import "aos/dist/aos.css";


function Contact() {
  return (
    <React.Fragment>
      <div className="title-fitting" data-aos="fade-down">
        <h2>Contact</h2>
        <div className="info-list">
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
          <AnchorLink href="#Java"> Java</AnchorLink>
          {/* <AnchorLink href="#Assembly"> Assembly</AnchorLink> */}
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
  AOS.init({
    duration : 1200
});
class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      colors:true
    }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick = ()=>{
     console.log("hello")
      this.setState({colors: !this.state.colors})
  }
  basicColors=()=>{
      return {
        backgroundColor:this.state.colors ? "white" : "#282c34",
        color:this.state.colors ? "black" : "aliceblue"

      }
    }
  buttonColor=()=>{
    return{
      backgroundColor:this.state.colors ? "#282c34" : "white",
      color:this.state.colors ? "aliceblue" : "black"

    }
  }
  changeButtontext=()=>{
    return this.state.colors ? "Dark Mode" : "Light Mode"

  }
  render(){
    return (
      <React.Fragment>
      <div style={this.basicColors()}>
        <div className="buttonPlace">
        <button 
          className="buttonColor" 
          onClick={this.handleClick} 
          style={
            
            this.buttonColor()
          }
          >
            {this.changeButtontext()}
        </button>
        </div>
        <div className="Title" >
          <img src={SunsetParkBanner} alt="sunsetpark" className="banner" data-aos="zoom-out" />  
        </div>
        <header className="header">
        <div>
          <div className="intro standard-fitting">
            <div className="title standard-fitting">              
              <img
                src={logo}
                alt="Ostavo"
                className="profile-picture standard-fitting "
                data-aos="zoom-in"
                // height="300px"
              ></img>
            </div>
            <div>
              <div className="about-text">
                <div className="text standard-fitting">
                  <p>
                    Ostavo Palacios is a Computer Engineering Student at the
                    Grove School of Engineering in The City College of New York.
                    He is a first generation student, that was born and raised
                    in NYC. Along with being proficient in multiple programming
                    languages, he has had experience working as a project
                    manager, and has worked in web development while managing a
                    team of four. One of his goals in life is to get more
                    minority students interested in coding. Ostavo's core values
                    are education, curiosity, innovation, and motivation.
                    Currently employed as an undergad research assistant at NYU for 
                    Participating in Literacies and computer Science and working as an
                    IT Director at LAESA-SHPE 
                  </p>
                </div>
                <Lists></Lists>
              </div>
            </div>
          </div>
          <div className="my-info">
            <section id="Contact" data-AOS="fade-down">
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
                color="maroon"
                variant="outlined"
                onClick={() => goToTop()}
              >
                Go to Top
              </Button>
            </div>
          </div>
        </div>
      </header>
      </div>
    </React.Fragment>
  );}
}
export default Main;
