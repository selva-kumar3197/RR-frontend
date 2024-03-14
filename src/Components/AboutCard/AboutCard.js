import React from "react";
import "./AboutCard.css";
import LazyLoad from "react-lazy-load";


const AboutCard = (props) => {
  return (
    <div className="about-card-contianer">
      <p className="small-text ac-heading-number">01</p>
      <h2 className="medium-heading">Business ready solutions</h2>
      <p className="ac-small-heading">Our mission</p>
      <LazyLoad>
      <img className="ac-image-contianer" src={props.img} />
      </LazyLoad>
      <p className="small-text ac-content pt-3">
        Meet India’s largest commercial real estate service & advisory. Varius
        nisl nunc, no se enim. Aliquam donec rutrum turpis leony magna pretium,
        nisi ut rhoncu.
      </p>
    </div>
  );
};

export default AboutCard;
