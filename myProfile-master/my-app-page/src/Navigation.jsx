import React, { useState } from "react";

//Installed Components
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// import { NavDropdown } from "react-bootstrap";
function Navigation(props) {
  const [Colors, setColors] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)
  const history = props.history

  const handleStateColor = (props) => {
    // this.setState((state) => ({ colors: !state.colors }))
    // console.log(this.state)

    setColors(!Colors)
    // // window.location.reload();
    buttonColor(Colors)
    changeButtontext(Colors)
    setInterval(window.location.reload(), 5000)

  }
  return (
    <Navbar
      className="custom-nav"
      style={{
        backgroundColor: "white",
        color: "#282c3",
        border: "solid",
        borderWidth: "2px"
      }}
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavDropdown title="Resume" id='resumeDropdown' >
            <NavDropdown.Item onClick={() => history.push("")} href={"#WorkExperience"}>Work Experience</NavDropdown.Item >
            <NavDropdown.Item onClick={() => history.push("")} href={"#VolunteerExperience"}>
              Volunteer Experience
          </NavDropdown.Item >
            <NavDropdown.Item onClick={() => history.push("")} href={"#Projects"}>
              Projects
          </NavDropdown.Item >
            <NavDropdown.Item
              onClick={() => history.push("")}
              href={"#Contact"}
            >
              Contact
              </NavDropdown.Item >
          </NavDropdown>
          <Nav.Link
            eventKey={1}
            onClick={() => (history.push("/Gallery"))}>My Gallery
           </Nav.Link>
          <Nav.Link
            eventKey={1}
            onClick={() => (history.push("/Booking"))}>Book Now!
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
    </Navbar >
  );
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

// class Navigation extends React.Component {
//   constructor(props) {
//     super(props)



export default withRouter(Navigation);
