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
import ImageProcessing from "./Pictures/ImageProcessing.png";

class ProjectExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project:"RJS",
      JavaScript:[
        {
          id:0,
          JobName:"SELENA Bot",
          About:[
            {
              id:0,
              bullet:"Developing a Slack bot in Javacsript that would improve awareness to club events, and resources provide by our SHPE Chapter for our members"
            },
            {
              id:1,
              bullet:"Creating user profiles and a database for our members in hopes that our active members increase by %10"
            },
           { 
            id:2,
            bullet:"Adding command line features to 'SELENA bot' so Eboard members can easily and update our database without needing to code "
          }
          ],
          Title: "Project Manager",
          Year: "September 2020 - Current",
          Language: "Javascript",
        }
      ],
      ReactJS: [
        {
          id: 0,
          JobName: "LEASA-SHPE Website",
          About: [
            {
              id: 0,
              bullet:
                " Managing and creating a website with Webflow, ReactJs, and Bootstrap that represent our SHPE chapter "
            },
            {
              id: 1,
              bullet:
                "Facilitated weekly online meetings with teammates to review and discuss progress done throughout the week"
            },
            {
              id: 2,
              bullet:
                "Motivated and encouraged team to explore different technologies and designs to better improve the website’s user journey and experience "
            }
          ],
          Title: "Project Manager",
          Year: "Fall 2019 - Current",
          Language: "ReactJs",
          Link: "http://www.laesa-shpe.com",
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
                "Created, “Fruition”, a website-based application intended to improve college students study habits/performance by understanding their learning style and provide them with the necessary resources"
            },
            {
              id: 1,
              bullet:
                "Pitched to a panel of three judges and a public audience the functions of our app, and financial forecasting for the startup            "
            },
            {
              id: 2,
              bullet:
                "Deployed “Fruition” using Heroku, the website was shared with the public audience with prize of potential funding           "
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
                "Directed, and organized a team of three to create a project called 'Command Shell' "
            },
            {
              id: 1,
              bullet:
                "Developed a Command Shell in C and coordinated team members contributions to final project"
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
                "Learned about processes, forking, and pipes and how to create them in C"
            },
            {
              id: 1,
              bullet:
                "Created a program that makes a parent process and forks 2 child process"
            },
            {
              id: 2,
              bullet:
                "Implemented pipes in C to have the child process communicate and have them execute the 'ls -F' and 'nl' commands"
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
                "Used Greedy Algorithm Huffman Code to compress number of bits in a piece of text and encode it into binary"
            },
            {
              id: 1,
              bullet:
                "Used pointers in order to create binary trees to construct binary character code"
            },
            {
              id: 2,
              bullet:
                "Presented final product to the instructor who was succesfully able to encode a 10,000-character length file"
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
          JobName:
            "Least-Square Binary Classifier and Eigen Vector Analysis for Image Processing",
          About: [
            {
              id: 0,
              bullet:
                "Created a least-square binary classifier in order to determine the ratio of correctly handwritten digits in 'test image set' file"
            },
            {
              id: 1,
              bullet:
                "Used Mnist database of handwritten images to manipulate and output handwritten digit images in Python"
            },
            {
              id: 2,
              bullet:
                "Computed the eigen value of each matrix image from 'train image set' to display the digit images as eigen vectors"
            }
          ],
          Title: "Student",
          Year: "Spring 2020",
          Language: "Python",
          Link: "https://github.com/TopSM/ImageProcessing",
          Picture: ImageProcessing,
          Alt: "Eigen Vector Image Processing"
        },
        {
          id: 1,
          JobName: "Trash Detector",
          About: [
            {
              id: 0,
              bullet:
                "Won best implementation for leveraging IBM Watson Visual Recognition (API)"
            },
            {
              id: 1,
              bullet:
                "Designed “Trash Detector”, a program that tracks garbage disposal in NYC subway tracks with python"
            },
            {
              id: 2,
              bullet:
                "Presented and pitched project within seven minutes to a panel of five judges"
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
                "Created a UI/UX in Java to output, and manipulate user information"
            },
            {
              id: 1,
              bullet:
                "Used MySQL WorkBench to create a database of user information"
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
                "Used Javafx Scene library to output a pie chart of most frequently used characters in text"
            },
            {
              id: 1,
              bullet:
                "Used object-oriented principles to tokenize characters in a string to create an array of characters and organize it from most frequent character to least frequent"
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
                "Geometrically derrived Algorithms to perfectly fit polygons within other polygons on a Javafx canvas"
            },
            {
              id: 1,
              bullet:
                "Implemented Polymorphism and Inheritance concepts to create polygon classes that inherit methods and attributes for other child Classes"
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
    this.showProject = this.showProject.bind(this);
  }
  showProject = () => {
    if(this.state.project === "RJS"){
      return ( 
        <section id="ReactJS">
        <MapInfo
        infoList={this.state.ReactJS}
        key={this.state.ReactJS.id}
      />
    </section>)
    }
    else if(this.state.project === "JS"){ 
      return(
      <section id="Javascript">
      <MapInfo infoList={this.state.JavaScript} key={this.state.JavaScript.id} />
      </section>
      )
    }
    else if(this.state.project === "C"){ 
      return(
        <section id="C/C++">
        <MapInfo infoList={this.state.C} key={this.state.C.id} />
        </section>)
    }
    else if(this.state.project === "Py"){ 
      return (
        <section id="Python">
        <MapInfo infoList={this.state.Python} key={this.state.Python.id} />
        </section>
      )
    }
    else if(this.state.project === "J"){ 
      return(
        <section id="Java">
        <MapInfo infoList={this.state.Java} key={this.state.Java.id} />
        </section>
      )
    }
  }
  projectButton=(projectType)=>{
    this.setState({project:projectType});
  }
  render() {
    return (
      <React.Fragment>
        <div className="standard-fitting title-fitting">
          <h2 className ="sections" >Projects</h2>
          <button 
          onClick={() => this.projectButton("RJS")}
          className="project-btn"
          >ReactJS</button>
          <button 
          onClick={() =>this.projectButton("JS")}
          className="project-btn"
          >Javascript</button>
          <button 
          onClick={() =>this.projectButton("Py")}
          className="project-btn"
          >Python</button>
          <button 
          onClick={() =>this.projectButton("C")}
          className="project-btn"
          >C/C++</button>
          <button 
          onClick={() =>this.projectButton("J")}
          className="project-btn"
          >Java</button>
          {this.showProject()}
          {/* <section id="ReactJS">
            <MapInfo
              infoList={this.state.ReactJS}
              key={this.state.ReactJS.id}
            />
          </section> */}
         
          
          
          
        </div>
      </React.Fragment>
    );
  }
}
export default ProjectExperience;
