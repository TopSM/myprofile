import React from "react";
import "../../../StylesCSS/Main.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function mapComponent(props) {
  let checkLanguage = Language => {
    if (Language != null) {
      return <h4>Language: {Language}</h4>;
    }
  };
  let checkLink = (Name = "Link", Link = "") => {
    if (Link != null && Link !== "") {
      return (
        <React.Fragment>
          <p>
            Link: <a className="a-link" href={Link}> {Name}</a>
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
        animateOnce={true}
      >
        {props.infoList.map(il => (

          <div
            className="info-list title-fitting"
            key={il.id}
          >
            <AnimationOnScroll
              animateIn="animate__zoomInUp"
              animateOnce={true}
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
              animateOnce={true}
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
              animateOnce={true}
            >
              <ul className="bullets-list">
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
