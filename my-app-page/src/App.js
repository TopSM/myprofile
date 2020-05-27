import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Navigation from "./Navigation";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main></Main>
      </header>
    </div>
  );
}
export default App;
