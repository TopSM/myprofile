import React, { Component } from "react";
import MapInfo from "./mapInfo";

class ProjectExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ProjectArray: [
        {
          id: 1,
          JobName: "LEASE-SHPE Website",
          About: "About",
          Title: "Title",
          Year: "Year",
          Language: "ReactJs"
        },
        {
          id: 2,
          JobName: "Huffman Code",
          About: "PCED",
          Title: "Title",
          Year: "Year",
          Language: "C++"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2>Projects</h2>
          <MapInfo infoList={this.state.ProjectArray} />
        </div>
      </React.Fragment>
    );
  }
}
export default ProjectExperience;
