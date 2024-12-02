import React, { useState,useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

//Images

//Installed Components
import Button from "@mui/material/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//My Components
import Contact from "./Contact";
import ResumeCard from "./ResumeExperiences/ResumeCard";
import BioList from "./BioList";
import HomeHeader from "./HomeHeader";
import MyUpButton from "./MyUpButton.jsx"
//CSS
import "animate.css/animate.min.css";
import '../../StylesCSS/Main.css'

function Home() {

  const [color,experienceCard,setExperienceCard] = useOutletContext();
  const [language, setLanguage] = useState("RJS")  
  const myElementRef = useRef(null);


  return (
    <React.Fragment>
      <div className={color? "main-white":  "main-black" }>

        <MyUpButton/>        

        <HomeHeader 
          color={color}
          experienceCard={experienceCard}
          setExperienceCard={setExperienceCard}/>

        <div className ="mobile-body" >
          <BioList 
            color={color}
            language={language} 
            setLanguage={setLanguage}
            setExperienceCard={setExperienceCard}/>
          <ResumeCard 
            color={color}
            language={language}
            setLanguage={setLanguage}
            myElementRef={myElementRef}  
            experienceCard={experienceCard}               
            setExperienceCard={setExperienceCard}/>                
          <Contact color={color} ref={myElementRef}/>
        </div>
        
      </div>
    </React.Fragment>
  );
}


export default Home;
