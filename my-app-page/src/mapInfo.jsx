import React from "react";
import "./Main.css";
export default function mapInfo(props) {
  function checkLanguage(Language) {
    if (Language != null) {
      return <h4>Language: {Language}</h4>;
    }
  }
  function checkLink(Link) {
    if (Link != null && Link !== "") {
      return (
        <p>
          Link: <a href={Link}> {Link}</a>
        </p>
      );
    }
  }

  return (
    <React.Fragment>
      <div>
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

            <div className="text bullet-list standard-fitting">
              <ul className="">
                {props.infoList[il.id].About.map(a => (
                  <li className="contact-list" key={a.id}>
                    {a.bullet}
                  </li>
                ))}
              </ul>
            </div>
            <h5>{checkLink(il.Link)}</h5>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
