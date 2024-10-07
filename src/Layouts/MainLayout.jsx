import React,{ useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/MyNavBar'
import Footer from '../Components/Footer';
import "./../StylesCSS/Main.css";

function MainLayout(props) {
    const [Color] = useState(true)
    
  return (
    <>
        <NavBar history={history} buttonColor={buttonColor(Color)} bgColor={basicColors(Color)}/>
        <Outlet/>
        <Footer/>
    </>
  )
}
const basicColors = (colors) => {
    return {
      backgroundColor: colors ? "white" : "#282c34",
      color: colors ? "black" : "aliceblue"
  
    }
  }
  const buttonColor = (colors) => {
    return {
      backgroundColor: colors ? "#282c34" : "white",
      color: colors ? "aliceblue" : "black"
  
    }
  }

export default MainLayout