import React, { Component } from "react";
import MapInfo from "./mapInfo";

class VolunteerExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      VolunteerArray: [
        {
          id: 1,
          JobName: "First Lego League",
          About: "About",
          Title: "Title",
          Year: "Year"
        },
        {
          id: 2,
          JobName: "Pre College Engineering Day",

          About: "PCED",
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
          <h2>Volunteer Experince</h2>
          <MapInfo infoList={this.state.VolunteerArray} />
        </div>
      </React.Fragment>
    );
  }
}
export default VolunteerExperience;
