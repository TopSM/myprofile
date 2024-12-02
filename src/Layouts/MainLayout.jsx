import React,{ useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/MyNavBar'
import Footer from '../Components/Footer';
import "./../StylesCSS/Main.css";

function MainLayout() {
  const [color,setColor] = useState(typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true)  
  const [experienceCard, setExperienceCard] = useState("WorkExperience")

  let colorClasses = ""

  colorClasses += color? "main-white":  "main-black"
    
  return (
    <div className={colorClasses}>
        <NavBar color={color} setColor={setColor} experienceCard={experienceCard} setExperienceCard={setExperienceCard}/>
        <Outlet context={[color,experienceCard, setExperienceCard]}/>
        <Footer color={color}/>
    </div>
  )
}

export default MainLayout