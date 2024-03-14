import React, { useState } from "react";
import "./Services.css";
import { Helmet } from 'react-helmet';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../Components/Button/Button";

import axios from "axios";
import { useEffect } from "react";
import InteriorSlider from "../Home/InteriorSlider";
import LazyLoad from "react-lazy-load";

let RightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/RightArrow.png";

let imgcor1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(1).png";
let imgcor2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(2).png";
let imgcor3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(3).png";
let imgcor4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(4).png";
let imgcor5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(5).png";
let imgcor6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(6).png";
let imgcor7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(7).png";
let imgcor8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(8).png";
let imgcor9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(9).png";
let imgcor10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(11).png";
let imgcor11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(12).png";
let imgcor12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(13).png";
let imgcor13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(14).png";
let imgcor14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(15).png";
let imgcor15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1%20(16).png";





let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4"
const InteriorManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

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
    pauseOnHover: false,

    beforeChange: checkBeforeSlide,
  };

  const [Profiles, setProfiles] = useState([]);
  useEffect(() => {
    slidesProfile();
  }, []);

  const slidesProfile = async () => {
    axios({
      mathod: "GET",
      url: `https://rr-api.realisticrealtors.com/api/rr//category/interior_management`,
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

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    gallaryData();
  }, []);

  const gallaryData = async () => {
    const data = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr/category/interior_service_gallery"
    );
    setSlides(data.data);
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <title>Transform Your Space with Our Interior Design Solutions


        </title>
        <meta name="description" content="Realistic Realtors offers top-notch online interior design services in India, providing innovative and personalized solutions to transform your space.


" />
      </Helmet>
      <div className="ssp-container page-noice-bg">
        <div className="ssp-banner-container">
          <div className="ssp-banner-bg-container1">
            <div className="ssp-banner-text-container">
              <h1 className="medium-heading ssp-banner-heading text-white">
                Interior Managment
              </h1>
              <h1 className="small-text ssp-banner-sub-text text-white">
                See what makes ours special.
              </h1>
            </div>
          </div>
        </div>

        <div className="services-bg-2">
          <div className="ssp-sec-2-container">
            <h3 className="large-heading">
              Interior Design <br />
              that works for you
            </h3>
            <p className="small-text ssp-2-content">
              Understanding the core of space structuring, we are able to
              interpret your vision and thoughts and translate it into a design
              that is elegant and functional and execute it to your satisfaction.
              With the support of our group associates of Architects and
              Contractors, we transform the dreams of many into reality.
            </p>
            <a href="/form">

              <Button
                className={"dark-bg-white-color art-home-button mt-5"}
                title={"Design your Space"}
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
                  <div className="col-md-11 pt-3  d-flex align-items-center ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center">
                      <img
                        alt="right-arrow"
                        width="6px"
                        height="6px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2  text-white">

                      Design Consultancy Services
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3 d-flex align-items-center ">
                    <div className="col-md-1 d-flex justify-content-center align-items-center ">
                      <img
                        alt="right-arrow"
                        width="6px"
                        height="6px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Design & Build Services
                    </p>
                  </div>
                </div>

                <div className="h-sec-3-bottom-stick-contianer mt-5">
                  <h3 className="h-sec-3-heading bigh1 mt-5 ">
                    Our Network is extensive and so is our experience. This helps
                    in creating the right eco-system for investors, property
                    owners, and tenants.
                  </h3>
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
            <div className="h-sec-3-right-contianer col-md-6 px-5">
              <div>
                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center ">
                    <div className="col-md-1 d-flex  align-items-center">
                      <img alt="right-arrow" src={RightArrow} />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2  text-white">
                      Design Consultancy Services
                      {/* <img alt="right-arrow" src={RightArrow} /> */}
                    </p>
                  </div>
                </div>
                <div className="row mb-md-5">
                  <div className="col-md-11 pt-3 d-flex align-items-center mb-md-5 ">
                    <div className="col-md-1 d-flex  align-items-center ">
                      <img alt="right-arrow" src={RightArrow} />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Design & Build Services
                    </p>
                  </div>
                </div>


                <div className="h-sec-3-bottom-stick-contianer  mt-md-5">
                  <h3 className="h-sec-3-heading bigh mt-md-5 ">
                    Our Network is extensive and so is our experience. This helps
                    in creating the right eco-system for investors, property
                    owners, and tenants.
                  </h3>
                  <div className="pt-4 ">
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
        <div className=" ">

          <div className="services-bg-21">
            <div className="ssp-sec-2-container1">
              <InteriorSlider />
            </div>
          </div>
        </div>

        <div className="galleryBg  pt-5 pb-5 px-5 desktop-photos">
          <div className="row px-5">
            <div className="col-md-6 ">
              <h2 className="sliderServiceheading  pb-3 services-title">
                Leading the way through front
              </h2>
            </div>
          </div>
          <div className="">

          </div>

          <div className="row py-2 px-5">
            <div className="col-md-7 ">

              <Slider {...settings} arrows={true} className="hello">
                {Profiles.map((e, i) => {
                  return (
                    <div key={i} className="mt-5">
                      <img
                        src={e.image}
                        alt="team image"
                        className="img-sliderProfile tp-slide-image "
                      />
                    </div>
                  );
                })}
              </Slider>
              {console.log(
                Profiles[activeIndex]?.designation,
                "Profiles[activeIndex].designation"
              )}

              <div className="row">
                <div className="col-md-12 ">
                  <h2 className="profilename  ">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h2>
                  <p className="profileDes  ">
                    {Profiles[activeIndex]?.designation}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <img
                className="ssp-5-image"
                alt="gallary image"
                src={slides[activeSlide]?.image}
              />
              <div className="gallary-selection-cotnainer">
                <div className="ssp-section-all-images my-4 text-center">
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
                          src={e?.image}
                          className="ssp-5-image-element"
                          onClick={() => setActiveSlide(i)}
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="ssp-gallary-heading">
                  Interior Management Service Excellence{" "}
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="galleryBg  pt-5 pb-5 px-1 mobile-photos">
          <div className="row px-5">
            <div className="col-md-6 ">
              <h2 className="sliderServiceheading  pb-3">
                Leading the way through front
              </h2>
            </div>
          </div>
          {/* <div className="row px-5"></div> */}
          <div className="row py-2">
            <div className="col-md-7">
              <Slider {...settings}>
                {Profiles.map((e, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={e.image}
                        alt="team image"
                        className="img-sliderProfile"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  );
                })}
              </Slider>
              <div className="row px-3 text-center">
                <div className="col-md-12 py-2 ">
                  <h2 className="profilename ">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h2>
                  <p className="profileDes ">
                    {Profiles[activeIndex]?.designation}
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="text-center">
                <img
                  // className="ssp-5-image"
                  alt="gallary image"
                  width="90%"
                  height="50%"
                  src={slides[activeSlide]?.image}
                />
              </div>
              <div className="gallary-selection-cotnainer">
                <div
                  className="ssp-section-all-images mt-4"
                // style={{ display: "flex", justifyContent: "center" }}
                >
                  {slides.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          "ssp-active-image-contianer" +
                          (activeSlide == i
                            ? "ssp-gallary-active-image-border"
                            : "")
                        }
                      >
                        <img
                          alt="image element gallary"
                          src={e?.image}
                          className="ssp-5-image-element"
                          onClick={() => setActiveSlide(i)}
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="ssp-gallary-heading text-center">
                  Interior Management Service Excellence{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  </Slider>
                </div>
                {/* <div className="row mb-3 text-center m-auto">

                <div className="col-md-4">
                  <img src={imgcor1} className="img-fluid w-75" />
                </div>

                <div className="col-md-4">
                  <img src={imgcor5} className="img-fluid w-75" />
                </div>
                <div className="col-md-4">
                  <img src={imgcor6} className="img-fluid w-75" />
                </div>
              </div>

              <div className="row mt-3 text-center m-auto">
                <div className="col-md-4">
                  <img src={imgcor7} className="img-fluid  w-75" />
                </div>
                <div className="col-md-4">
                  <img src={imgcor8} className="img-fluid  w-75" />
                </div>
                <div className="col-md-4">
                  <img src={imgcor9} className="img-fluid  w-75" />
                </div>
              </div>
              <div className="row mt-3 text-center m-auto">
                <div className="col-md-4">
                  <img src={imgcor4} className="img-fluid  w-75" />
                </div>
                <div className="col-md-4">
                  <img src={imgcor2} className="img-fluid  w-75" />
                </div>
                <div className="col-md-4">
                  <img src={imgcor3} className="img-fluid  w-75" />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteriorManagement;
