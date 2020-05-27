import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { configureAnchors } from "react-scrollable-anchor";
import { removeHash } from "react-scrollable-anchor";

// clear URL hash
removeHash();

configureAnchors({
  offset: 0,
  scrollDuration: 200,
  keepLastAnchorHash: false
});
function Navigation() {
  return (
    <Navbar
      className="custom-nav"
      style={{ backgroundColor: "white" }}
      sticky="top"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href={"#WorkExperience"}>Work Experience</Nav.Link>
          <Nav.Link href={"#VolunteerExperience"}>
            Volunteer Experience
          </Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href={"#C/C++"}>C/C++</NavDropdown.Item>
            <NavDropdown.Item href={"#Python"}>Python</NavDropdown.Item>
            <NavDropdown.Item href={"#Java"}>Java</NavDropdown.Item>
            <NavDropdown.Item href={"#ReactJS"}>React.js</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={"#Contact"}>Contact</Nav.Link>
          {/* <Nav.Link href={"#Python"}>Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
