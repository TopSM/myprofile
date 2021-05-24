import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Main from "./Main";
import Navigation from "./Navigation";
import Footer from "./footer";
import Routes from "./Routes";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: typeof (Storage) != undefined ? localStorage.getItem("colorState") === "true" : true
    }
  }

  basicColors = () => {
    return {
      backgroundColor: this.state.colors ? "white" : "#282c34",
      color: this.state.colors ? "black" : "aliceblue"

    }
  }
  buttonColor = () => {
    console.log(this.state.colors)
    return {
      backgroundColor: this.state.colors ? "#282c34" : "white",
      color: this.state.colors ? "aliceblue" : "black"

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation buttonColor={this.buttonColor()} bgColor={this.basicColors()} />
          <Routes buttonColor={this.buttonColor()} bgColor={this.basicColors()} />
          <Footer />
        </header>
      </div>
    );
  }
}
export default App;
