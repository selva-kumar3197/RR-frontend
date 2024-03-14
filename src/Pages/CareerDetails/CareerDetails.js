import React from "react";
import "../../Pages/CareerDetails/CareerDetails.css";
import LazyLoad from "react-lazy-load";

let Facebook = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/CareerSocialIcons/Facebook.png";
let Linkedin = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/CareerSocialIcons/Linkedin.png";
let Message = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/CareerSocialIcons/Message.png";
let Cleare = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/CareerSocialIcons/Cleare.png";

function CareerDetails() {
  return (
    <>
      <div className="main">
        <div class="main-div d-flex justify-content-md-center ">
          <div className="col-md-4">
            <div className="image-div">
              <div className="image-div-content">
                <p className="main-div-first-line">Opening for</p>
                <p className="main-div-second-line">Social media strategist</p>
              </div>
            </div>
          </div>
          <div className="section-two col-md-4 bg-white">
            <div className="second-block-first-div">
            <LazyLoad>
            <div className="justify-content-md-end clear-modal">
                <img src={Cleare} />
              </div>
            </LazyLoad>
             
              <p className="second-block-first-line">
                We are looking for a{" "}
                <span className="second-block-first-line-color">
                  social media strategist
                </span>{" "}
                for our Mumbai office.
              </p>
              <div className="second-block-content">
                <div className="bar"></div>
                <p className="title-description">Description</p>
                <p className="title-two">
                  A Commercial Building strategically situated at Sector 15
                  Gurugram with good connectivity with major roads and metro
                  station. The nearest metro station is Huda City Center, which
                  is 6 km away. Many famous Restaurants and 5-star hotels are
                  around.
                </p>

                <ul className="title-two">
                  <li> 5 years of experience</li>
                  <li>
                    Develop the information architecture (IA) and the strategy,
                    specifically.
                  </li>
                  <li>
                    Develop the information architecture (IA) and the strategy,
                    specifically.
                  </li>
                  <li className="dots">
                    Collaborate closely with content strategist/UX Writer,
                    engineers, product, operation, and business to develop the
                    IA and the approach/strategy supervision Develop wireframes
                    and assemble them into a detailed flow that covers multiple
                    scenarios, positive and negative, which are later
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-block">
              <div className="d-flex">
                <div className="col-6 footer1">
                  <p className="footer-block-first-line">Share this role</p>
                  <LazyLoad>
                  <div className="career-icons-list">
                    <img src={Facebook} alt="Career-icon" />
                 
                    <img
                      src={Linkedin}
                      className="Career-icon"
                      alt="Career-icon"
                    />
                    <img
                      src={Message}
                      className="Career-icon"
                      alt="Career-icon"
                    />
                  </div>
                  </LazyLoad>
               
                </div>
                <div className="col-6 footer2">
                  <div className="footer-button">
                    <span className="footer-button-text ">Apply now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerDetails;
