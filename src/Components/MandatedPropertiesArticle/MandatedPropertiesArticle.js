import React from "react";
import "../../Components/MandatedPropertiesArticle/MandatedPropertiesArticle.css";
import LazyLoad from "react-lazy-load";
let MandatedProperti1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/MandatedPropertieImage.png";
function MandatedPropertiesArticle() {
  return (
    <div className="first-div">
      <div className="second-div">
      <LazyLoad>
      <img
          src={MandatedProperti1}
          alt="card image"
          className="mandated-article-image"
        />
      </LazyLoad>
     
        <div className="mandated-article-footer">
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "30px", marginLeft: "5%" }}>
              <p className="mandated-article-footer-box1">For Lease</p>
            </div>
            <div style={{ marginTop: "30px", marginLeft: "10px" }}>
              <p className="mandated-article-footer-box1">Fully Furnished</p>
            </div>
          </div>
          <p
            className="mandated-article-footer-title"
            style={{ marginLeft: "5%" }}
          >
            Rajinder Park Pusa Road, New Delhi
          </p>
          <p className="mandated-article-footer-title1 mandated-article-head">
            Building No. 9B, Rajinder Park
          </p>
          <p className="mandated-article-footer-title2 mandated-article-title2">Size: 6,000 SqFt</p>
          <a href="/mandated-properties-internal" className="mandated-article-links">
            <span className="mandated-article-footer-title3">Enquire now</span>
          </a>
          <span className="mandated-article-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </span>
          <p className="mandated-article-line"></p>
        </div>
      </div>
    </div>
  );
}

export default MandatedPropertiesArticle;
