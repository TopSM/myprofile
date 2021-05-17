import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Navigation from "./Navigation";
import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main></Main>
        <Footer></Footer>
      </header>
    </div>
  );
}
export default App;
