import React from "react";
import "./Main.css";
export default function mapInfo(props) {
  var checkLanguage = Language => {
    if (Language != null) {
      return <h4>Language: {Language}</h4>;
    }
  };
  var checkLink = Link => {
    if (Link != null && Link !== "") {
      return (
        <p>
          Link: <a href={Link}> {Link}</a>
        </p>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="mobileCss">
        {props.infoList.map(il => (
          <div className="info-list title-fitting" key={il.id}>
            <div>
              <a href={il.Link}>
                <img className="info-pic" src={il.Picture} alt={il.Alt}></img>
              </a>
            </div>
            <h3>{il.JobName}</h3>
            <h4>{il.Title}</h4>
            <h4>Year: {il.Year}</h4>
            {checkLanguage(il.Language)}
            {/* {checklanguage()} */}
            <div className="text bullet-list standard-fitting">
              <ul>
                {props.infoList[il.id].About.map(a => (
                  <li className="contact-list" key={a.id}>
                    {a.bullet}
                  </li>
                ))}
              </ul>
            </div>
            {checkLink(il.Link)}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
