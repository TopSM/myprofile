import React from "react";
//My Components
import MapComponents from "./MapComponents";
//Images
import Pilacs from "./../../..//Pictures/pilacs.png";
import StemHive from "./../../../Pictures/StemHive.png";
import LockheedM from "./../../../Pictures/lockheed-martin-logo.png";
import PSW from "./../../../Pictures/psw.png"
import { AnimationOnScroll } from "react-animation-on-scroll";
const ExperienceArray = [
  {
    id: 0,
    JobName: "Lockheed Martin",
    Title: "Associate Software Engineering",
    About: [
      {
        id: 0,
        bullet:
          "Investigated multiple proposed revisions (PR) for bugs that were reported by customers or found during maintenance or regression test shots, in both the server (Java) and calculator (C++) components of Mission Planner (MP), which efficiently economized company time and resources"
      },
      {
        id: 1,
        bullet:
          "Managed my teammate's pull request (PR) as a delegate, by collaborating with PR coordinators from other teams and running smoke tests to ensure no critical defects were introduced by the team"
      },
      {
        id: 2,
        bullet:
          "Supported multiple teams cross-functionally whenever assistance was asked to expedite an investigation for a critical issue"
      },
      {
        id: 3,
        bullet:
          "Updated over 20 regression tests related to importing and exporting MP components to verify specifications were up to par across three baselines, identifying two previously hidden bugs and an unimplemented feature"
      },
      {
        id: 4,
        bullet:
          "Developed over 20 new regression tests for a new functional area, Input Server Logic, based on IBM DOOR’s specifications, to test Java server code for implementation and functionality"
      }
    ],
    Year: "Summer 2022 - Current",
    Picture: LockheedM,
    Alt: "Lochkeed Martin"
  },
  {
    id: 1,
    JobName: "Play Study Win",
    Title: "After School Teacher",
    About: [
      {
        id: 0,
        bullet:
          "Managed and created engaging lesson plans, and projects relating to computer science and robotics using Legos, MicroBit, and Python to teach and motivate middle school students."
      },
      {
        id: 1,
        bullet:
          "Managed over 20 students at a time, taught them how to problem solve and fostered their creativity while making computer science more accessible."
      }
    ],
    Year: "Fall 2021 - Summer 2022",
    Picture: PSW,
    Alt: "PSW Logo"
  },
  {
    id: 2,
    JobName: "Participating in Literacies and Computer Science",
    Title: "Junior Research Assistant",
    About: [
      {
        id: 0,
        bullet:
          "Managed and created engaging lesson plans, and projects relating to computer science and robotics using Legos, MicroBit, and Python to teach and motivate middle school students."
      },
      {
        id: 1,
        bullet:
          "Analyzed and took notes on the students and classroom to see how they interact with the lesson prepared for that day"
      },
      {
        id: 2,
        bullet:
          "Assisted 16 students in the classroom to engage them in the classroom activities and help them further develop ideas for their projects"
      },
      {
        id: 3,
        bullet:
          "Implemented, designed, and managed PiLaCS’s website using Squarespace's advanced HTML features."
      }

    ],
    Year: "Fall 2019 - 2021",
    Link: "https://www.pila-cs.org/",
    Picture: Pilacs,
    Alt: "PiLaCS"
  },
  {
    id: 3,
    JobName: "Palacios Cafe",
    Title: "Social Media Manager",
    About: [
      {
        id: 0,
        bullet:
          "Designed and managed the website and online delivery service for the restaurant to increase revenue by 15%"
      },
      {
        id: 1,
        bullet:
          "Advised owner to better improve aesthetics and services for economic growth to the business"
      },
      {
        id: 2,
        bullet:
          "Devised social media strategy (Instagram/Facebook) to attract more patrons by 5% "
      }
    ],
    Year: "Winter 2016 - Winter 2019"
  },
  {
    id: 4,
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
    id: 5,
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
function WorkExperience() {
  return (
    <React.Fragment>
      <div className="standard-fitting title-fitting">      
      <h2 className="sections-color">Work Experience</h2>
      <AnimationOnScroll
        className="title-fitting"
        animateIn="animate__fadeInLeft"
        animateOnce={true}
      >
        <MapComponents
          infoList={ExperienceArray}
          key={ExperienceArray.id}
        />
      </AnimationOnScroll>
      </div>
    </React.Fragment>
  );
}
export default WorkExperience;
