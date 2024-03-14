import React from "react";
import MandatedArticleCard from "../../Components/MandatedArticleCard/MandatedArticleCard";


import "../../Pages/MandatedPropertiesResults/MandatedPropertiesResults.css";
let Dropdown = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Dropdown.png";
let MandatedBanner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Mandated.png";
let FilterIcon = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/FilterIcon.png";

function MandatedPropertiesResults() {
  return (
    <div>
      <div className="mandated-page-container">
        <img
          src={MandatedBanner}
          className="mandated-banner mandated-banner-page"
          alt="reward-banner"
        />
        <div className="mobile-mandated-banner mandated-banner-page">
          <h2 className="medium-heading u-banner-heading mandated-head">
            
          </h2>
        </div>
        <h1 className="mandated-page-first-text">Mandated Properties</h1>
        <div className="row">
          <div className="col-6 ">
            <p className="mandated-page-second-text desktop-sec-text">
              Showing ‘4 results’ for properties in ‘Noida’
            </p>
            <p className="mandated-page-second-text mobile-sec-text">
              Showing ‘4 results’{" "}
            </p>
          </div>
          <div className="col-6 filter">
            <div className="d-flex justify-content-end">
              <p className="mandated-page-second-right desktop-sec-text">
                Sort by: Featured
              </p>
              <img
                width="10px"
                className="mt-1 desktop-sec-text"
                height="8px"
                src={Dropdown}
              />
              <img className="mobile-sec-text" src={FilterIcon} />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-6">
            <MandatedArticleCard />
          </div>
          <div className="col-md-6">
            <MandatedArticleCard />
          </div>
        </div>
        <div className="row justify-content-between second-row">
          <div className="col-md-6">
            <MandatedArticleCard />
          </div>
          <div className="col-md-6">
            <MandatedArticleCard />
          </div>
        </div>
        <div className="show-all-div">
          <button className="show-all">Show All</button>
        </div>
      </div>
    </div>
  );
}

export default MandatedPropertiesResults;
