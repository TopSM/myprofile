import React, { useState } from "react";
//Installed Components
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";
import '../StylesCSS/Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col } from "react-bootstrap";
import { useRef, useEffect } from 'react';
import scrolltoHref from "./Builds/ScrolltoHref";
import { redirect } from "react-router-dom";

function MyNavBar() {
  const [Colors, setColors] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)
  const myElementRef = useRef(null);
  const navigate = useNavigate();
  // const location = useLocation();

  const handleStateColor = () => {

    setColors(!Colors)
    buttonColor(Colors)
    changeButtontext(Colors)
    setInterval(window.location.reload(), 5000)
  }  

  const goToHomePage = () => {
    navigate("/")
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  

  return (
    <Navbar
      className="custom-nav"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="button-place">
            <NavDropdown title="My Resume" id='resumeDropdown' >
              <NavDropdown.Item 
              onClick={()=>goToHomePage()}
              href="#WorkExperience"
              >
                Work Experience </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>goToHomePage()}
              href="#VolunteerExperience"
              >
                Volunteer Experience
              </NavDropdown.Item >
              <NavDropdown.Item 
              onClick={()=>goToHomePage()}
              href="#Projects"
              >
                Projects
              </NavDropdown.Item>
              <NavDropdown.Item 
              onClick={()=>goToHomePage()}
              href="#Contact">
                Contact
              </NavDropdown.Item >
            </NavDropdown>
            <Navbar.Text >
                  <Link className="poem-link" to="mypoems">Poem Of The Day</Link>
            </Navbar.Text>

          </Nav>
        </Navbar.Collapse>
        <button
          className="buttonColor"
          onClick={() => handleStateColor()}
          style={
            buttonColor(Colors)
          }
        >
          {changeButtontext(Colors)}

        </button>
      </Container>
    </Navbar >
  )
}

const buttonColor = (colors) => {
  if (typeof (Storage) !== undefined) {
    localStorage.setItem("colorState", colors)
  }
  else {
    console.log("browser does not support")
  }
  return {
    backgroundColor: colors ? "#282c34" : "white",
    color: colors ? "aliceblue" : "black"

  }
}
const changeButtontext = (colors) => {

  return colors ? "Dark Mode" : "Light Mode"

}
export default MyNavBar;
