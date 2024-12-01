import React, { useState } from "react";
//Installed Components
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container"
import { NavLink } from "react-router-dom";
import '../StylesCSS/Main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { Col } from "react-bootstrap";
import { useEffect } from 'react';
// import Button from "@mui/material/Button";
function MyNavBar({color,setColor, experienceCard, setExperienceCard}) {

  const navigate = useNavigate();
  const handleColorClick = (c) => {
    setColor( ()=>!c)    
  }  
  const handleNavBarClick = (link="/",ec="RJS")=>{
    setExperienceCard(()=>ec)
    navigate(link)
  }

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  
    // useEffect(() => {    
    //     document.getElementById('my-info')?.scrollIntoView({ behavior: 'smooth' })    
    // }, [experienceCard]);    
  

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
          <Nav>
            <NavDropdown title="My Resume" id='resumeDropdown' >
              <NavDropdown.Item 
                onClick={()=> handleNavBarClick("/","WorkExperience")}
                href="#WorkExperience"
              > Work Experience </NavDropdown.Item>
             
              <NavDropdown.Item 
              onClick={()=>handleNavBarClick("/","VolunteerExperience")}
              href="#VolunteerExperience"
              > Volunteer Experience </NavDropdown.Item >

              <NavDropdown.Item 
              onClick={()=>handleNavBarClick("/","Projects")}
              href="#Projects"
              > Projects </NavDropdown.Item>

              <NavDropdown.Item 
                onClick={()=>navigate("/")}
                href="#Contact"
              > Contact </NavDropdown.Item >
            </NavDropdown>

            <Nav.Link  
              onClick={() => navigate("/mypoems")}>
              Poem Of The Day
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <button
          className={color? "btn-color-black": "btn-color-white"} 
          onClick={() => handleColorClick(color)}
          style={{padding:"10px"}}
        >
          {color ?  "Dark Mode":"Light Mode" }
        </button>
      </Container>
    </Navbar >
  )
}
export default MyNavBar;
