import React from "react";

import "./Button.css";
import LazyLoad from "react-lazy-load";

const Button = (props) => {
  return (
    <>
      {props.img ? (
        <button
          style={props.style}
          className={props.className + " button-componet-container"}
          onClick={props.onClick}
        >

          <img src={props.img} className="mx-2"/>
          {props.title}
        </button>
      ) : (
        <button
          style={props.style}
          className={props.className + " button-componet-container"}
          onClick={props.onClick}
        >
          {props.title}
        </button>
      )}
    
    </>
  );
};

export default Button;
