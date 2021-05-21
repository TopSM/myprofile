import React from "react";

//Installed Components
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// import { NavDropdown } from "react-bootstrap";

class Navigation extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const history = this.props.history

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
              <NavDropdown.Item onClick={() => history.push("")} href={"#Contact"}>Contact</NavDropdown.Item >
            </NavDropdown>
            <Nav.Link
              eventKey={1}
              onClick={() => (history.push("/Gallery"))}>Gallery </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}
export default withRouter(Navigation);
