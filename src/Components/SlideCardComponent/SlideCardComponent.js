import React from "react";
import LazyLoad from 'react-lazy-load';


import "./SlideCardComponent.css";

const SlideCardComponent = (props) => {
  return (
    <div className="slide-card-contianer">
      <h1 className="slide-card-heading">{props.number}</h1>
      <p>{props.heading}</p>
      <LazyLoad>
      <video className="slide-image" alt="slide-image"  autoPlay loop muted playsInline>
        <source src={props.image} type="video/mp4" />
      </video>
      </LazyLoad>
    
      <p className="slide-discription">
        Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan
        congue purus consec.
      </p>
      <a className="slide-redirection-link" href="/">
        Know more ➔
      </a>
    </div>
  );
};

export default SlideCardComponent;
