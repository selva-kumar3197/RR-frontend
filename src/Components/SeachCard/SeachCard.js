import React from "react";
import "./SeachCard.css";

import { ArrowRight } from "react-bootstrap-icons";
import LazyLoad from "react-lazy-load";

let searchResultImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/searchResultImage.png";

const SeachCard = () => {
  return (
    <div className="sc-container ">
    <LazyLoad>
    <img
        src={searchResultImage}
        alt="property image"
        className="sc-card-image"
      />
    </LazyLoad>
    
      <div className="sc-card-content-contianer">
        <div className="sc-keys-contianer">
          <div className="sc-key-contianer">FOR LEASE</div>
          <div className="sc-key-contianer">FULLY FURNISHED</div>
        </div>
        <p className="sc-add small-text">Rajinder Park Pusa Road, New Delhi</p>
        <h2 className="medium-heading sc-heading">
          Building No. 9B, Rajinder Park
        </h2>
        <p className="sc-size-para">Size: 6,000 SqFt</p>
        <a href="/mandated-properties-internal">
          <span className="mandated-article-footer-title3">Enquire now</span>
        </a>{" "}
      </div>
    </div>
  );
};

export default SeachCard;
