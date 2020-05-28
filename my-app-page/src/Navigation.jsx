import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      className="custom-nav"
      style={{ backgroundColor: "white" }}
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
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href={"#C/C++"}>C/C++</NavDropdown.Item>
            <NavDropdown.Item href={"#Python"}>Python</NavDropdown.Item>
            <NavDropdown.Item href={"#Java"}>Java</NavDropdown.Item>
            <NavDropdown.Item href={"#ReactJS"}>ReactJS</NavDropdown.Item>
            <NavDropdown.Item href={"#Assembly"}>Assembly</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={"#Contact"}>Contact</Nav.Link>
          {/* <Nav.Link href={"#Python"}>Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
