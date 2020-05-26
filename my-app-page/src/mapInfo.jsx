import React from "react";
import "./Main.css";

export default function mapInfo(props) {
  return (
    <React.Fragment>
      <div>
        {props.infoList.map(il => (
          <div className="info-list title-fitting">
            {/* {il.JobName} */}
            <h3>{il.JobName}</h3>
            <h4>{il.Title}</h4>
            <h4>{il.Year}</h4>
            <p>{il.About}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
