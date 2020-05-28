import React, { Component } from "react";

//My Components
import MapInfo from "./mapInfo";
class VolunteerExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      VolunteerArray: [
        {
          id: 0,
          JobName: "Pre College Engineering Day",
          About: [
            {
              id: 0,
              bullet:
                "Recruited 6 high schools to attend event that exposes the students to fields of engineering"
            },
            {
              id: 1,
              bullet: "Helped organize and set-up the event for 340 students "
            },
            {
              id: 2,
              bullet: "Guided and mentored ~250 students on engineering project"
            }
          ],
          Title: "Mentor | ScoreKeeper",
          Year: "Year"
        },
        {
          id: 1,
          JobName: "First Lego League",
          About: [
            {
              id: 0,
              bullet:
                " Judged 6 Middle and Elementary school student team’s robotics project based on the Hydrodynamics theme"
            },
            {
              id: 1,
              bullet:
                "Presented and represented the top 3 teams to other judges to assist teams to the next round"
            }
          ],
          Title: "Judge",
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
          <MapInfo
            infoList={this.state.VolunteerArray}
            key={this.state.VolunteerArray.id}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default VolunteerExperience;
