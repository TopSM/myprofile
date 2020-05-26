import React, { Component } from "react";
import MapInfo from "./mapInfo";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ExperinceArray: [
        {
          id: 1,
          JobName: "PiLaCS",
          About: "About",
          Title: "Title",
          Year: "Year"
        },
        {
          id: 2,
          JobName: "Palacios Cafes",

          About: "About",
          Title: "Title",
          Year: "Year"
        },
        {
          id: 3,
          JobName: "Stem Hive",
          About: "About",
          Title: "Title",
          Year: "Year"
        },
        {
          id: 4,
          JobName: "Cafe Mocha",
          About: "About",
          Title: "Title",
          Year: "Year"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2>Work Experince</h2>
          <MapInfo infoList={this.state.ExperinceArray} />
        </div>
      </React.Fragment>
    );
  }
}
export default WorkExperience;
