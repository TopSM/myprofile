import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Main from "./Main";
import Navigation from "./Navigation";
import Footer from "./footer";
import Routes from "./Routes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes />
        <Footer />
      </header>
    </div>
  );
}
export default App;
