import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Main from "./Main";
import Navigation from "./Navigation";
import Footer from "./footer";
import Routes from "./Routes";

function App() {
  const [Color] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <Navigation buttonColor={buttonColor(Color)} bgColor={basicColors(Color)} />
        <Routes buttonColor={buttonColor(Color)} bgColor={basicColors(Color)} />
        <Footer />
      </header>
    </div>
  );
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


export default App;
