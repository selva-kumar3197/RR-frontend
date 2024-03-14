import React, { useState } from "react";
import "./Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../Components/Button/Button";

import axios from "axios";
import { useEffect } from "react";
import RetailSlider from "../Home/RetailSlider";
import RetailerServiceGallery from "./RetailerServiceGallery";
import { Helmet } from 'react-helmet';
import LazyLoad from "react-lazy-load";



let RightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/RightArrow.png";

let imgcor1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (1).png";
let imgcor2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (2).png";
let imgcor3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (3).png";
let imgcor4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (4).png";
let imgcor5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (5).png";
let imgcor6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (6).png";
let imgcor7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (7).png";
let imgcor8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (8).png";
let imgcor9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (9).png";
let imgcor10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (10).png";
let imgcor11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (11).png";
let imgcor12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (12).png";
let imgcor13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (13).png";
let imgcor14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (14).png";
let imgcor15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (15).png";
let imgcor17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (17).png";
let imgcor18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (18).png";
let imgcor19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (19).png";
let imgcor20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (20).png";
let imgcor21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (21).png";
let imgcor22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (22).png";
let imgcor23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (23).png";
let imgcor24 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (24).png";




let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4"


const RetailServices = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const checkBeforeSlide = (c, n) => {
    setActiveIndex(n);
  };
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: checkBeforeSlide,
    pauseOnHover: false,
  };

  const buttonStyles = {
    color: "#FFF",
    backgroundColor: "#221D35",
    border: "unset",
    marginTop: "4em",
  };

  const [Profiles, setProfiles] = useState([]);
  useEffect(() => {
    slidesProfile();
  }, []);

  const slidesProfile = async () => {
    axios({
      mathod: "GET",
      url: `https://rr-api.realisticrealtors.com/api/rr//category/retail_services`,
    })
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          setProfiles(res.data);
          console.log(res.data, "err");
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  var settingsClient = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    gallaryData();
  }, []);

  const gallaryData = async () => {
    const data = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr//category/retail_service_gallery"
    );
    setSlides(data.data);
  };
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Retail Space Solutions and Shop Spaces for Rent
        </title>
        <meta name="description" content="Realistic Realtors offers comprehensive retail services, including retail space solutions and shop spaces for rent, catering to your retail business needs.


" />
      </Helmet>
      <div className="ssp-container page-noice-bg">
        <div className="ssp-banner-container">
          <div className="ssp-banner-bg-container33">
            <div className="ssp-banner-text-container1">
              <div>
                <h1 className="medium-heading ssp-banner-heading text-white">
                  Retail Services
                </h1>
                <h1 className="small-text ssp-banner-sub-text text-white">
                  See what makes ours special.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="services-bg-2">
          <div className="ssp-sec-2-container">
            <h2 className="large-heading">
              Retail Space <br /> that works for you.{" "}
            </h2>
            <p className="small-text ssp-2-content">
              Retail spaces are like shooting stars. You miss one, you never know
              when you are going to see the next. We use an all-inclusive approach
              when it comes to retail service. Our highly skilled consultants will
              make sure that a strategy is proposed only after we go through your
              portfolio and other aspects that affect your decision so that our
              solutions offer long-term benefits.
            </p>
            <a href="/form">
              <Button
                className={"dark-bg-white-color art-home-button mt-5"}
                title={"List & Find Space"}
              />
            </a>
          </div>
        </div>

        <div className="h-sec-3-contianer  row">
          <div className=" col-md-6">
            <div className="divvideoivar">
              <LazyLoad>
                <video className="h-sec-3-image" src={ibars} autoPlay loop muted playsInline />
              </LazyLoad>
            </div>
          </div>
          {isMobile ? (
            <div className="h-sec-3-right-contianer col-md-6 px-4 mt-4">
              <div>
                <div className="row">
                  <div className="col-md-11  d-flex align-items-center ">
                    <div className="col-md-1 d-flex  justify-content-center align-items-center ">
                      <img
                        alt="right-arrow"
                        width="6px"
                        height="6px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt- m-2  text-white">
                      Leasing Services
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="6px"
                        height="6px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2  text-white">
                      Store Positioning Strategy
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3 d-flex align-items-center ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="6px"
                        height="6px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Property Sourcing
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="6px"
                        height="6px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Relocation Assistance
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="6px"
                        height="6px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Transaction Management for Sale and Lease
                    </p>
                  </div>
                </div>

                <div className="h-sec-3-bottom-stick-contianer mt-5">
                  <h2 className="h-sec-3-heading bigh mt-3 ">
                    Our Network is extensive and so is our experience. This helps
                    in creating the right eco-system for investors, property
                    owners, and tenants.
                  </h2>
                  <div className="py-4 ">
                    <a href="/aboutus">
                      <Button
                        className={"transperent-white-border"}
                        title={"Learn more"}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-sec-3-right-contianer col-md-6 px-4">
              <div>
                <div className="row">
                  <div className="col-md-11  d-flex align-items-center ">
                    <div className="col-md-1 d-flex   align-items-center ">
                      <img
                        alt="right-arrow"
                        width="12px"
                        height="12px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt- m-2  text-white">
                      Leasing Services
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center ">
                    <div className="col-md-1 d-flex align-items-center">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="12px"
                        height="12px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2  text-white">
                      Store Positioning Strategy
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3 d-flex align-items-center ">
                    <div className="col-md-1 d-flex align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="12px"
                        height="12px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Property Sourcing
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex  align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="12px"
                        height="12px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Relocation Assistance
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex  align-items-center ">
                      <img
                        alt="right-arrow"
                        src={RightArrow}
                        width="12px"
                        height="12px"
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Transaction Management for Sale and Lease
                    </p>
                  </div>
                </div>

                <div className="h-sec-3-bottom-stick-contianer mt-5">
                  <h2 className="h-sec-3-heading bigh mt-3 ">
                    Our Network is extensive and so is our experience. This helps
                    in creating the right eco-system for investors, property
                    owners, and tenants.
                  </h2>
                  <div className="py-4 ">
                    <a href="/aboutus">
                      <Button
                        className={"transperent-white-border"}
                        title={"Learn more"}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="services-bg-21 ">
          <div className="ssp-sec-2-container1">
            <RetailSlider />
          </div>
        </div>
        <RetailerServiceGallery />

        <div className="bg-clientpage ">
          <div className=" p-md-5">
            <div className="row">
              <div className="col-md-6 p-5">
                <p className="small-text theme-voilet-text">Our Clients</p>
                <p className="medium-heading mobile-heading-client ss-4-heading w-100">
                  We have established trust with multiple large & small brands
                  with our experience
                </p>
              </div>
              <div className="col-md-6 p-5 text-center m-auto">
                <div className="text-center">
                  <Slider {...settingsClient} arrows={false}>
                    <div>
                      <img src={imgcor1} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor2} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor3} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor4} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor5} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor6} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor7} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor8} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor9} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor10} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor11} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor12} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor13} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor14} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor15} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor24} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor17} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor18} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor19} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor20} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor21} className="img-fluid w-75 px-2 py-2" />
                    </div>
                    <div>
                      <img src={imgcor22} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor23} className="img-fluid w-75 px-2 py-2" />
                      <img src={imgcor24} className="img-fluid w-75 px-2 py-2" />
                    </div>
                  </Slider>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default RetailServices;
