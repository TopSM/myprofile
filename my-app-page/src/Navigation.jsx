import React from "react";

//Installed Components
import { Navbar, Nav } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";

function Navigation() {
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
          <Nav.Link href={"#WorkExperience"}>Work Experience</Nav.Link>
          <Nav.Link href={"#VolunteerExperience"}>
            Volunteer Experience
          </Nav.Link>
          <Nav.Link href={"#Projects"}>
            Projects
          </Nav.Link>
          <Nav.Link href={"#Contact"}>Contact</Nav.Link>
          {/* <Nav.Link href={"#Python"}>Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
