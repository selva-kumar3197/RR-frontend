import React from "react";
import "./SearchPage.css";

import SeachCard from "../../Components/SeachCard/SeachCard";
let searchResultImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/searchResultImage.png";


const SearchPage = () => {
  return (
    <div className="page-noice-bg">
      <div className="sp-container">
        <h1 className="medium-heading">Mandated Properties</h1>
        <p className="small-text">
          Showing ‘4 results’ for properties in ‘Noida’
        </p>
        <div className="grid-view">
          <div className="sc-container ">
            <img
              src={searchResultImage}
              alt="property image"
              className="sc-card-image"
            />
            <div className="sc-card-content-contianer">
              <div className="sc-keys-contianer">
                <div className="sc-key-contianer">FOR LEASE</div>
                <div className="sc-key-contianer">FULLY FURNISHED</div>
              </div>
              <p className="sc-add small-text">
                Rajinder Park Pusa Road, New Delhi
              </p>
              <h2 className="medium-heading sc-heading">
                Building No. 9B, Rajinder Park
              </h2>
              <p className="sc-size-para">Size: 6,000 SqFt</p>
              <a href="/mandated-properties-internal">
                <span className="mandated-article-footer-title3">
                  Enquire now
                </span>
              </a>{" "}
            </div>
          </div>
          <SeachCard />
          <SeachCard />
          <SeachCard />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
