import React from "react";

//Installed Components
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// import { NavDropdown } from "react-bootstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true
    }
    this.handleStateColor = this.handleStateColor.bind(this);
    this.buttonColor = this.buttonColor.bind(this);
    this.changeButtontext = this.changeButtontext.bind(this);
    this.basicColors = this.basicColors.bind(this);

  }
  handleStateColor = () => {
    this.setState((state) => ({ colors: !state.colors }))
    // console.log(this.state)

    // // window.location.reload();
    this.buttonColor()
    this.changeButtontext()
    setInterval(window.location.reload(), 5000)

  }
  buttonColor = () => {
    if (typeof (Storage) !== undefined) {
      localStorage.setItem("colorState", this.state.colors)
    }
    else {
      console.log("browser does not support")
    }
    return {
      backgroundColor: this.state.colors ? "#282c34" : "white",
      color: this.state.colors ? "aliceblue" : "black"

    }
  }
  changeButtontext = () => {

    return this.state.colors ? "Dark Mode" : "Light Mode"

  }
  basicColors = () => {
    return {
      backgroundColor: this.state.colors ? "white" : "#282c34",
      color: this.state.colors ? "black" : "aliceblue"

    }
  }
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
              onClick={() => (history.push("/Gallery"))}>My Gallery
           </Nav.Link>
            {/* <Nav.Link
              eventKey={1}
              onClick={() => (history.push("/Booking"))}>Book Now!
           </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
        <button
          className="buttonColor"
          onClick={() => this.handleStateColor()}
          style={
            this.buttonColor()
          }
        >
          {this.changeButtontext()}

        </button>
      </Navbar >
    );
  }
}
export default withRouter(Navigation);
