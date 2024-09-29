import React, { useState } from "react";

//My Components
import MapComponents from "./Builds/MapComponents";

//Images
import LAESA from "./../Pictures/Laesa.png";
import HuffmanCode from "./../Pictures/HuffmanCode.png";
import Histogram from "./../Pictures/Histogram.png";
import Inheritance from "./../Pictures/Inheritance.png";
import CMDShell from "./../Pictures/CMDShell.png";
import Pipes from "./../Pictures/Pipes.png";
import Fruition from "./../Pictures/Fruition.png";
import ImageProcessing from "./../Pictures/ImageProcessing.png";

const JavaScript = [
  {
    id: 0,
    JobName: "SELENA Bot",
    About: [
      {
        id: 0,
        bullet: "Developed a Slack bot in Javacsript that would improve awareness to club events, and resources provide by our SHPE Chapter for our members"
      },
      {
        id: 1,
        bullet: "Created user profiles and a database for tp increase our the amount of active members by %10"
      },
      {
        id: 2,
        bullet: "Added command line features to 'SELENA bot' so Eboard members can easily and update our database without needing to code "
      }
    ],
    Title: "Project Manager",
    Year: "September 2020 - June 2021",
    Language: "Javascript",
  }
];
const ReactJS = [
  {
    id: 0,
    JobName: "JukeBerry",
    About: [
      {
        id: 0,
        bullet:
          "Designed and deployed a website that creates private music rooms for people to join and make group playlists by studying and using React.js, Spotify’s Web API documentation, Bootstrap, and Heroku"
      },
      {
        id: 1,
        bullet:
          "Collaborated and communicated with two other teammates under a scrum workflow to implement user interface and experience, connect teammates to Rest API, and use Git to update and produce new features promptly"
      },
    ],
    Title: "Front End Developer",
    Year: "Spring 2020 - Winter 2020",
    Language: "ReactJs",
  },
  {
    id: 1,
    JobName: "LEASA-SHPE Website",
    About: [
      {
        id: 0,
        bullet:
          " Managed and created a website with Webflow, ReactJs, and Bootstrap that represent our SHPE chapter "
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
    Year: "Fall 2019 - Spring 2021",
    Language: "ReactJs",
    Link: "http://www.laesa-shpe.com",
    Picture: LAESA,
    Alt: "LAESA"
  },
  {
    id: 2,
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
    Picture: Fruition,
    Alt: "Frution"
  }
];
const C = [
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
];
const Python = [
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
];
const Java = [
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

function showProject(choice) {
  if (choice === "RJS") {
    return (
      <section id="ReactJS">
        <MapComponents
          infoList={ReactJS}
          key={ReactJS.id}
        />
      </section>)
  }
  else if (choice === "JS") {
    return (
      <section id="Javascript">
        <MapComponents infoList={JavaScript} key={JavaScript.id} />
      </section>
    )
  }
  else if (choice === "C") {
    return (
      <section id="C/C++">
        <MapComponents infoList={C} key={C.id} />
      </section>)
  }
  else if (choice === "Py") {
    return (
      <section id="Python">
        <MapComponents infoList={Python} key={Python.id} />
      </section>
    )
  }
  else if (choice === "J") {
    return (
      <section id="Java">
        <MapComponents infoList={Java} key={Java.id} />
      </section>
    )
  }
}

function ProjectExperience(props) {

  const [language, setLanguage] = useState("RJS")
  return (

    <React.Fragment>
      <div className="standard-fitting title-fitting">
        <h2 className="sections" >Projects</h2>
        <button
          onClick={() => setLanguage("RJS")}
          className="project-btn"
        >ReactJS</button>
        <button
          onClick={() => setLanguage("JS")}
          className="project-btn"
        >Javascript</button>
        <button
          onClick={() => setLanguage("Py")}
          className="project-btn"
        >Python</button>
        <button
          onClick={() => setLanguage("C")}
          className="project-btn"
        >C/C++</button>
        <button
          onClick={() => setLanguage("J")}
          className="project-btn"
        >Java</button>
        {showProject(language)}
      </div>
    </React.Fragment>
  )
}
export default ProjectExperience;
