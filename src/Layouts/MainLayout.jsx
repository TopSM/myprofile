import React,{ useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/MyNavBar'
import Footer from '../Components/Footer';
import "./../StylesCSS/Main.css";

function MainLayout(props) {
    
  return (
    <>
        <NavBar history={history} />
        <Outlet/>
        <Footer/>
    </>
  )
}

  const buttonColor = (colors) => {
    return {
      backgroundColor: colors ? "#282c34" : "white",
      color: colors ? "aliceblue" : "black"
  
    }
  }

export default MainLayout