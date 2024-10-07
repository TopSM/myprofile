import React from "react";
import "../../StylesCSS/Main.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function mapComponent(props) {
  var checkLanguage = Language => {
    if (Language != null) {
      return <h4>Language: {Language}</h4>;
    }
  };
  var checkLink = (Name = "Link", Link = "") => {
    if (Link != null && Link !== "") {
      return (
        <React.Fragment>
          <p>
            Link: <a href={Link}> {Name}</a>
          </p>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <AnimationOnScroll 
        className="mobileCss"
        initiallyVisible={true}
      >
        {props.infoList.map(il => (

          <div 
            className="info-list title-fitting" 
            key={il.id}
          > 
            <AnimationOnScroll
              animateIn="animate__zoomInUp"
            >
              <a href={il.Link}>
                <img className="info-pic"
                  src={il.Picture}
                  alt={il.Alt}
                />
              </a>
            </AnimationOnScroll>
            
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              delay={100}
            >
              <div>
              <h3>{il.JobName}</h3>
              <h4>{il.Title}</h4>
              <h4>Year: {il.Year}</h4>
              {checkLanguage(il.Language)}
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll 
              className="text bullet-list standard-fitting"
              animateIn="animate__slideInUp"
            >
              <ul>
                {props.infoList[il.id].About.map(a => (
                  <li className="contact-list" key={a.id}>
                    {a.bullet}
                  </li>
                ))}
              </ul>
            </AnimationOnScroll>
            {checkLink(il.JobName, il.Link)}
          </div>
        ))}
      </AnimationOnScroll>
    </React.Fragment>
  );
}
