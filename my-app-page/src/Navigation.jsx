import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
            <NavDropdown.Item>
              <AnchorLink href={"#C/C++"}>C/C++</AnchorLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AnchorLink href={"#Python"}>Python</AnchorLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AnchorLink href={"#Java"}>Java</AnchorLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AnchorLink href={"#ReactJS"}>ReactJS</AnchorLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <AnchorLink href={"#Assembly"}>Assembly</AnchorLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={"#Contact"}>Contact</Nav.Link>
          {/* <Nav.Link href={"#Python"}>Contact</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
