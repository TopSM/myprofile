import React, { Component } from "react";

//My Components
import MapInfo from "./mapInfo";

//Images
import LAESA from "./Pictures/Laesa.png";
import HuffmanCode from "./Pictures/HuffmanCode.png";
import Histogram from "./Pictures/Histogram.png";
import Inheritance from "./Pictures/Inheritance.png";
import CMDShell from "./Pictures/CMDShell.png";
import Pipes from "./Pictures/Pipes.png";
import Fruition from "./Pictures/Fruition.png";

class ProjectExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ReactJS: [
        {
          id: 0,
          JobName: "LEASA-SHPE Website",
          About: [
            {
              id: 0,
              bullet:
                " Simulating a software engineering environment with 4 developers to create a website with React.js and materialUI that represent our SHPE chapter"
            },
            {
              id: 1,
              bullet:
                "Using Taiga.io and Github to keep track of each developers workflow, and stages of development of the website            "
            },
            {
              id: 2,
              bullet:
                "Implemented continuous integration/continous deployment using Heroku and Github"
            }
          ],
          Title: "Project Manager",
          Year: "Fall 2019-Spring 2020",
          Language: "ReactJs",
          Link: "https://aqueous-hamlet-89351.herokuapp.com/",
          Picture: LAESA,
          Alt: "LAESA"
        },
        {
          id: 1,
          JobName: "Fruition",
          About: [
            {
              id: 0,
              bullet:
                "Created, “Fruition”, a website based application intended to improve college students study habits/performance by              targeting a person’s learning style and providing them with those tools.              "
            },
            {
              id: 1,
              bullet:
                " Pitched to a panel of 3 judges and a public audience the functions of our app and financial forecasting for the startup            "
            },
            {
              id: 2,
              bullet:
                "Deployed “Fruition” using heroku and presented the website to the public audience with prize of potential funding           "
            }
          ],
          Title: "CTO",
          Year: "Spring 2019",
          Language: "ReactJs",
          Link: "http://www.fruitionnyc.org/",
          Picture: Fruition,
          Alt: "Frution"
        }
      ],
      C: [
        {
          id: 0,
          JobName: "Command Shell",
          About: [
            {
              id: 0,
              bullet:
                "Lead, directed, and organized a team of 3 to create final project 'Command Shell' "
            },
            {
              id: 1,
              bullet:
                "Created a simple Shell and linked team memebers contributions for final product"
            }
          ],
          Title: "Team Leader",
          Year: "Fall 2019",
          Language: "C",
          Link: "https://github.com/TopSM/OS-Shell",
          Picture: CMDShell,
          Alt: "Command Shell"
        },
        {
          id: 1,
          JobName: "Pipes",
          About: [
            {
              id: 0,
              bullet:
                "Created a program in C to create a parent and 2 child Process and have them communicate via pipe while executing the ls -F command and nl command "
            }
          ],
          Title: "Student",
          Year: "Fall 2019",
          Language: "C",
          Link: "https://github.com/TopSM/Pipes",
          Picture: Pipes,
          Alt: "Pipes"
        },
        {
          id: 2,
          JobName: "Huffman Code",
          About: [
            {
              id: 0,
              bullet:
                " Used Greedy Algorithm Huffman Code in order to compress number of bits in a piece of text and encode text into binary"
            },
            {
              id: 1,
              bullet:
                "Used pointers in order to create binary trees to construct binary character code"
            },
            {
              id: 2,
              bullet:
                "Presented final product to instructor where he was able to succesfully encode a 10,000 character length file"
            }
          ],
          Title: "Student",
          Year: "Spring 2019",
          Language: "C++",
          Link: "https://github.com/TopSM/Huffman-Code",
          Picture: HuffmanCode,
          Alt: "Huffman Code"
        }
      ],
      Python: [
        {
          id: 0,
          JobName: "Trash Detector",
          About: [
            {
              id: 0,
              bullet:
                "Won best implementation for leveraging IBM Watson Visual Recognition (API)            "
            },
            {
              id: 1,
              bullet:
                "Designing a user profile layout using React.js components where users can view their progress"
            },
            {
              id: 2,
              bullet:
                "Assisted CTO with upcoming design stages and delegated tasks to team members"
            }
          ],
          Title: "Marketing Director",
          Year: "Spring 2018",
          Language: "Python",
          Link: "https://devpost.com/software/trash-detect"
        }
      ],
      Java: [
        {
          id: 0,
          JobName: "Java Database",
          About: [
            {
              id: 0,
              bullet:
                "Created a simple UI in Java to ouput, and manipulate user information"
            },
            {
              id: 1,
              bullet:
                "Use MySQL WorkBench to create a Database of user information"
            }
          ],
          Title: "Student",
          Year: "Spring 2019",
          Language: "Java, SQL"
        },
        {
          id: 1,
          JobName: "Histogram Letter",
          About: [
            {
              id: 0,
              bullet:
                "Used Java and Javafx Scene library to output a pie chart of most frequent character in text"
            },
            {
              id: 1,
              bullet:
                "Used object oriented principles to tokenize characters in a string to create an array of character and organize it from most frequent character to least frequent"
            }
          ],
          Title: "Student",
          Year: "Spring 2019",
          Language: "Java",
          Link: "https://github.com/TopSM/Software-design-lab-project3",
          Picture: Histogram,
          Alt: "Histogram"
        },
        {
          id: 2,
          JobName: "Inheritance Project",
          About: [
            {
              id: 0,
              bullet:
                "Used Java and Javafx Scene library and mathematical geometry to perfectly fit polygons witihin other polygons on a Javafx canvas"
            },
            {
              id: 1,
              bullet:
                "Used Polymorphism and Inheritance concepts to create polygon classes to inherit methods and attributes for other child Classes"
            }
          ],
          Title: "Student",
          Year: "Spring 2019",
          Language: "Java",
          Link: "https://github.com/TopSM/Software-design-lab-project2",
          Picture: Inheritance,
          Alt: "Inheritance"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2>Projects</h2>
          <section id="ReactJS">
            <MapInfo
              infoList={this.state.ReactJS}
              key={this.state.ReactJS.id}
            />
          </section>
          <section id="C/C++">
            <MapInfo infoList={this.state.C} key={this.state.C.id} />
          </section>
          <section id="Python">
            <MapInfo infoList={this.state.Python} key={this.state.Python.id} />
          </section>
          <section id="Java">
            <MapInfo infoList={this.state.Java} key={this.state.Java.id} />
          </section>
          <section id="Assembly">
            {/* <MapInfo infoList={this.state.Java} key={this.state.Java.id} /> */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}
export default ProjectExperience;
