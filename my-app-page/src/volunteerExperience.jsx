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
          JobName: "Intro to React Js Workshop",
          About: [
            {
              id: 0,
              bullet:
                "Hosted a 2 day online Workshop for college undergraduates through zoom that introduced them to HTML/CSS, Javascript, and ReactJs, and basic website designs"
            },
            {
              id: 1,
              bullet:
                "Prepared and organized lesson plans, and presented them to an audience of 17 people"
            },
            {
              id: 2,
              bullet:
                "Increased member registritation for LAESA-SHPE a student organization that helped sponsor my workshop"
            }
          ],
          Title: "Host/Speaker",
          Year: "Summer 2020"
        },
        {
          id: 1,
          JobName: "Pre College Engineering Day",
          About: [
            {
              id: 0,
              bullet:
                "Recruited six high schools to attend an event that exposes their students to different fields of engineering"
            },
            {
              id: 1,
              bullet: "Helped organize and set-up the event for 340 students "
            },
            {
              id: 2,
              bullet:
                "Guided and mentored ~250 students on an engineering project"
            }
          ],
          Title: "Mentor | ScoreKeeper",
          Year: "March 2019"
        },
        {
          id: 2,
          JobName: "First Lego League",
          About: [
            {
              id: 0,
              bullet:
                "Judged six Middle and Elementary school robotics team’s research project based on Hydrodynamics theme"
            },
            {
              id: 1,
              bullet:
                "Represented and pitched the top 3 teams to other judges that were seleceted by me in order to assist teams to the next round"
            }
          ],
          Title: "Judge",
          Year: "March 2018"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2 className="sections">Volunteer Experience</h2>
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
