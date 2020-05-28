import React, { Component } from "react";
import MapInfo from "./mapInfo";
import Pilacs from "./Pictures/pilacs.png";
import StemHive from "./Pictures/StemHive.png";
class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ExperienceArray: [
        {
          id: 0,
          JobName: "PiLaCS",
          Title: "Junior Research Assistant",
          About: [
            {
              id: 0,
              bullet:
                "Develop Scratch prototype projects to inspire students to create similar projects based on the topics that they are learning."
            },
            {
              id: 1,
              bullet:
                "Analyze and take notes on the students and classroom to see how they interact with the lesson prepared for that day."
            },
            {
              id: 2,
              bullet:
                "Assisted 16 students in the classroom to engage them in the classroom activities and help them further develop ideasfor their projects. "
            }
          ],
          Year: "Fall 2019 - Current",
          Link: "https://www.pila-cs.org/",
          Picture: Pilacs,
          Alt: "PiLaCS"
        },
        {
          id: 1,
          JobName: "Palacios Cafe",
          Title: "Social Media Manager",
          About: [
            {
              id: 0,

              bullet:
                "Designed and manages the website and online delivery service for the restaurant to increase revenue by 5%"
            },
            {
              id: 1,

              bullet:
                "Advises owner to better improve aesthetics and services for economic growth to the business"
            },
            {
              id: 2,

              bullet:
                "Devises social media strategy (Instagram/Facebook) to attract more patrons by 5% "
            }
          ],
          Year: "Winter 2016 - Current"
        },
        {
          id: 2,
          JobName: "Stem Hive",
          About: [
            {
              id: 0,

              bullet:
                "Collaborated with three programmers to create a website in React.js that increases women’s representation in the STEM fields by providing accolades for their achievements in STEM"
            },
            {
              id: 1,

              bullet:
                "Designed a user profile layout using React.js components where users can view their progress"
            },
            {
              id: 2,

              bullet:
                "Assisted CTO with upcoming design stages and delegated tasks to team members"
            }
          ],
          Title: "Intern | Front End Developer",
          Year: "Summer 2019",
          Picture: StemHive,
          Alt: "StemHive"
        },
        {
          id: 3,
          JobName: "Cafe Mocha",
          About: [
            {
              id: 0,
              bullet:
                "Organized work quickly and efficiently to improve flow of production for customer satisfaction "
            },
            {
              id: 1,
              bullet:
                "Effectively communicated and cooperated with co-workers to get jobs done"
            },
            {
              id: 2,
              bullet:
                "Restocked and prepared products before shift ends for the preparation of the next shift "
            }
          ],
          Title: "Barista | Clerk | Assistant Cook",
          Year: "Fall 2012 - Fall 2016"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2>Work Experince</h2>
          <MapInfo
            infoList={this.state.ExperienceArray}
            key={this.state.ExperienceArray.id}
            // bullets={this.state.ExperienceArray.About}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default WorkExperience;
