import React, { useState } from "react";
import "./Services.css";




import Button from "../../Components/Button/Button";
import LazyLoad from "react-lazy-load";
let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4"
let RightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/RightArrow.png";
let companyImagesGroup = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/companyImagesGroup.png";

let img1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/retail/image%2099.png";
let img2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/retail/image%20100.png";
let img3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/retail/image%20101.png";



const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const buttonStyles = {
    color: "#FFF",
    backgroundColor: "#221D35",
    border: "unset",
    marginTop: "4em",
  };

  const slides = [
    {
      image: img1,
      heading: "The Warehouse gallery",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications. 
            He has a strong background in architecture, interior design and.`,
    },
    {
      image: img2,
      heading: "test",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications. 
            He has a strong background in architecture, interior design and.`,
    },
    {
      image: img3,
      heading: "The Warehouse gallery",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications. 
            He has a strong background in architecture, interior design and.`,
    },
  ];

  return (
    <div className="ssp-container page-noice-bg">
      <div className="ssp-banner-container">
        <div className="ssp-banner-bg-container">
          <div className="ssp-banner-text-container">
            <h2 className="medium-heading ssp-banner-heading desktop-banner-head text-white">
              Warehousing Services
            </h2>
            <h2 className="medium-heading ssp-banner-heading mobile-banner-head">
              Industrial &<br /> Warehousing
              <br /> Services
            </h2>
            <p className="small-text ssp-banner-sub-text text-white">
              See what makes ours special.
            </p>
          </div>
        </div>
      </div>

      <div className="ssp-sec-2-container">
        <h2 className="large-heading service-head">
          Mastering the Warehousing,
          <br /> One deal at a time.
        </h2>
        <p className="small-text ssp-2-content desktop-ssp-2-content">
          At Realistic Realtors, we aim at commingling quality with efficiency
          to meet the specific client requirements of sourcing high-tech
          industrial space and warehousing space for manufacturing, assembly,
          research and development, logistics-based distribution, and warehouse
          facilities.
        </p>
        <p className="small-text ssp-2-content mobile-ssp-2-content">
          At Realistic Realtors, we aim at
          <br /> commingling quality with efficiency to
          <br /> meet the specific client requirements of
          <br /> sourcing high-tech industrial space and
          <br /> warehousing space for manufacturing,
          <br /> assembly, research and development,
          <br /> logistics-based distribution, and
          <br /> warehouse facilities.
        </p>
        <a href="/PropertyContactFormRetail">
          <Button style={buttonStyles} title={"Find Warehouses"} />
        </a>
      </div>

      <div className="h-sec-3-contianer row">
        <div className=" col-md-6">
        
          <div className="divvideoivar">
          <LazyLoad>

            <video
              className="h-sec-3-image"
              src={ibars}
              autoPlay loop muted playsInline
          
            />
          </LazyLoad>
          </div>
        </div>
        <div className="h-sec-3-right-contianer col-md-6 px-5">
          <div>
            <div>
              <p className="h-sec-3-dis">
                <img alt="right-arrow" src={RightArrow} /> Over 40,000 property
                owners,3,500 HNIs/NRIs
              </p>
              <p className="h-sec-3-dis">
                <img alt="right-arrow" src={RightArrow} /> 20 million sqft space
                transacted
              </p>
              <p className="h-sec-3-dis">
                <img alt="right-arrow" src={RightArrow} /> Committed Team of
                200+ employees
              </p>
              <p className="h-sec-3-dis">
                <img alt="right-arrow" src={RightArrow} /> Serving across 450+
                cities
              </p>
            </div>
          </div>

          <div className="h-sec-3-bottom-stick-contianer">
            <h3 className="h-sec-3-heading">
              Our network is wide, so is our experience in the real estate
              industry. We think global act local.
            </h3>
            <a href="/aboutus">
              <Button
                className={"transperent-white-border"}
                title={"Know more"}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="ssp-sec-4-container">
        <div className="ssp-4-l-container">
          <p className="small-text theme-voilet-text">Our Clients</p>
          <h1 className="medium-heading ss-4-heading service-4-head">
            We’ve established trust with multiple brands, small and big, local
            as well as International.
          </h1>
        </div>
        <div className="ssp-4-r-container">
          <img
            className="ssp-sec-4-image"
            alt="companies"
            src={companyImagesGroup}
          />
        </div>
      </div>

      <div className="ssp-sec-5-contianer">
        <div className="ssp-5-content">
          <div className="ssp-5-l">
            <img
              className="ssp-5-image"
              alt="gallary image"
              src={slides[activeSlide].image}
            />
          </div>
          <div className="ssp-5-r">
            <div className="gallary-selection-cotnainer">
              <div className="ssp-section-all-images" id="scrollbar">
                {slides.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        "ssp-active-image-contianer " +
                        (activeSlide == i
                          ? "ssp-gallary-active-image-border"
                          : "")
                      }
                    >
                      <img
                        alt="image element gallary"
                        src={e.image}
                        className="ssp-5-image-element"
                        onClick={() => setActiveSlide(i)}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="ssp-gallary-heading">
                {slides[activeSlide].heading}
              </p>
          
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default Services;
