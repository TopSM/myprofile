import React, { useState } from "react";
//Installed Components
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container"
import '../StylesCSS/Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { Col } from "react-bootstrap";

function MyNavBar() {
  const [Colors, setColors] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)
  const history = useNavigate();

  const handleStateColor = () => {

    setColors(!Colors)
    buttonColor(Colors)
    changeButtontext(Colors)
    console.log("colors in Nav",Colors)
    setInterval(window.location.reload(), 5000)
  }
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
              <NavDropdown.Item onClick={() => history("")} href={"#WorkExperience"}>Work Experience</NavDropdown.Item >
              <NavDropdown.Item onClick={() => history("")} href={"#VolunteerExperience"}>
                Volunteer Experience
              </NavDropdown.Item >
              <NavDropdown.Item onClick={() => history("")} href={"#Projects"}>
                Projects
              </NavDropdown.Item >
              <NavDropdown.Item
                onClick={() => history("")}
                href={"#Contact"}
              >
                Contact
              </NavDropdown.Item >
            </NavDropdown>
            {/* <Nav.Link
              eventKey={1}
              onClick={() => (history("/MyGallery"))}>My Gallery
            </Nav.Link> */}
            <Nav.Link
              eventKey={1}
              onClick={() => (history("/MyPoems"))}>Poem Of The Day
            </Nav.Link>            
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
