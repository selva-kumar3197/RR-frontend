import React from "react";
import "./NumberCircle.css";

const NumberCircle = (props) => {
  return (
    <div id="container">
      <div className="nc-number">{props.number}</div>
      <div className={props.active ? "active1" : ""} id="halfclip">
        <div
          className={"halfcircle " + (props.active ? "active2" : "")}
          id="clipped"
        ></div>
      </div>
      <div
        className={"halfcircle " + (props.active ? "active3" : "")}
        id="fixed"
      ></div>
    </div>
  );
};

export default NumberCircle;
