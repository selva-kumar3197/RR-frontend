import React, { useEffect, useState } from "react";
import "./Services.css";

import Button from "../../Components/Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import AchiveSlider from "../Home/AchiveSlider";
import { Helmet } from 'react-helmet';
import LazyLoad from "react-lazy-load";


const RightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/RightArrow.png";

const imgcor1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (1).png";
const imgcor2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (2).png";
const imgcor3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (3).png";
const imgcor4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (4).png";
const imgcor5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (5).png";
const imgcor6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (6).png";
const imgcor7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (7).png";
const imgcor8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (8).png";
const imgcor9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (9).png";


const imgcor10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(11).png";
const imgcor11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/BBL-logo.png";

const imgcor12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(13).png";
const imgcor13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(14).png";

let imgcor14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(15).png";
let imgcor15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(16).png";
let imgcor16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(17).png";
let imgcor17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(18).png";
let imgcor18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(19).png";
let imgcor19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1%20(20).png";
let imgcor20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (21).png";
let imgcor21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (22).png";
let imgcor22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (23).png";
let imgcor23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (24).png";
let imgcor24 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (25).png";
let imgcor25 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (26).png";
let imgcor26 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (27).png";
let imgcor27 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (28).png";
let imgcor28 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (29).png";
let imgcor29 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (30).png";
let imgcor30 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (31).png";
let imgcor31 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (32).png";
let imgcor32 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (33).png";
let imgcor33 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (34).png";
let imgcor34 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (35).png";
let imgcor35 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (36).png";
let imgcor36 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (37).png";
let imgcor37 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (38).png";
let imgcor38 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (39).png";
let imgcor39 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (40).png";
let imgcor40 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (41).png";
let imgcor41 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (42).png";
let imgcor42 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (43).png";
let img2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/corporate/image%20104.png";
let img3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/corporate/image%20103.png";
let img4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/corporate/image%20101.png";
let img5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/gallary/corporate/image%20102.png";


let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4";

const CorporateService = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const checkBeforeSlide = (c, n) => {
    setActiveIndex(n);
  };
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: checkBeforeSlide,
    pauseOnHover: false,
  };
  var settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 9000,
    // pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const [Profiles, setProfiles] = useState([]);
  useEffect(() => {
    slidesProfile();
  }, []);

  const slidesProfile = async () => {
    axios({
      mathod: "GET",
      url: `https://rr-api.realisticrealtors.com/api/rr//category/corporate_leasing`,
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

  const [slides1, setSlides1] = useState([]);

  useEffect(() => {
    gallaryData();
  }, []);

  const gallaryData = async () => {
    const data = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr//category/corporate_service_gallery"
    );
    setSlides1(data.data);
  };

  console.log(
    slides1.map((ele) => console.log(ele.image)),
    "==>data"
  );

  const slides = [
    {
      image: img2,
      heading: "",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications.
            He has a strong background in architecture, interior design and.`,
    },
    {
      image: img3,
      heading: "Corporate Leasing Service Excellence",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications.
            He has a strong background in architecture, interior design and.`,
    },
    {
      image: img4,
      heading: "Corporate Leasing Service Excellence",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications.
            He has a strong background in architecture, interior design and.`,
    },
    {
      image: img5,
      heading: "Corporate Leasing Service Excellence",
      content: `Alexander Minelli holds 2 degrees in Animation Film/TV and Interactive Communications.
            He has a strong background in architecture, interior design and.`,
    },
  ];

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
        <title>Corporate Leasing Services - Find Ideal Office Spaces for Lease

        </title>
        <meta name="description" content="Discover the perfect office space for lease with Realistic Realtors' corporate leasing services. Benefit from our professional and comprehensive leasing solutions.

" />
      </Helmet>
      <div className="ssp-container page-noice-bg">
        <div className="ssp-banner-container">
          <div className="ssp-banner-bg-container2">
            <div className="ssp-banner-text-container ">
              <h1 className="medium-heading ssp-banner-heading text-white">
                Corporate Leasing
              </h1>
              <h1 className="small-text ssp-banner-sub-text text-white">
                See what makes ours special.
              </h1>
            </div>
          </div>
        </div>
        <div className="services-bg-2">
          <div className="ssp-sec-2-container">
            <h2 className="large-heading">
              Office Space <br />
              that works for you.
            </h2>

            <p className="small-text ssp-2-content">
              Corporate houses and MNCs are always on the lookout for spaces that
              meet their organizational goals. That’s where we fill in the gap by
              offering customized and holistic leasing services pillared on the
              unrivaled and extensive experience of two decades in commercial real
              estate.
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
            <LazyLoad>
              <div className="h-sec-3-right-contianer col-md-6 px-4 my-2 ">
                <div className="mt-md-5">
                  <div className="row">
                    <div className="col-md-11 pt-3  d-flex align-items-center ">
                      <div className="col-md-1 d-flex justify-content-center align-items-center">
                        {isMobile ? (
                          <img
                            alt="right-arrow"
                            width="6px"
                            height="6px"
                            src={RightArrow}
                          />
                        ) : (
                          <img
                            alt="right-arrow"
                            width="12px"
                            height="12  px"
                            src={RightArrow}
                          />
                        )}
                      </div>
                      <p className="h-sec-3-heading pt-0 m-2  text-white">

                        Leasing Services
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11 pt-3 d-flex align-items-center ">
                      <div className="col-md-1 d-flex justify-content-center align-items-center ">
                        {isMobile ? (
                          <img
                            alt="right-arrow"
                            width="6px"
                            height="6px"
                            src={RightArrow}
                          />
                        ) : (
                          <img
                            alt="right-arrow"
                            width="12px"
                            height="12  px"
                            src={RightArrow}
                          />
                        )}
                      </div>
                      <p className="h-sec-3-heading pt-0 m-2 text-white">
                        Landlord Representation
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-11 pt-3  d-flex align-items-center  ">
                      <div className="col-md-1 d-flex justify-content-center align-items-center ">
                        {isMobile ? (
                          <img
                            alt="right-arrow"
                            width="6px"
                            height="6px"
                            src={RightArrow}
                          />
                        ) : (
                          <img
                            alt="right-arrow"
                            width="12px"
                            height="12  px"
                            src={RightArrow}
                          />
                        )}
                      </div>
                      <p className="h-sec-3-heading pt-0 m-2 text-white">
                        Tenant Representation
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                <div className="col-md-12 pt-3 d-flex align-items-center">
                  <div className="col-md-12 gap-2 d-flex  align-items-center ">
                    {isMobile ? (
                      <img
                        alt="right-arrow "
                        width="6px"
                        height="6px"
                        src={RightArrow}
                      />
                    ) : (
                      <img
                        alt="right-arrow"
                        width="12px"
                        height="12  px"
                        src={RightArrow}
                      />
                    )}
                  </div>
                  <p className="h-sec-3-heading pt-0 m-2  text-white">
                    Renegotiations
                  </p>
                </div>
              </div> */}
                  <div className="row">
                    <div className="col-md-11 pt-3  d-flex align-items-center  ">
                      <div className="col-md-1 d-flex justify-content-center align-items-center ">
                        {isMobile ? (
                          <img
                            alt="right-arrow"
                            width="6px"
                            height="6px"
                            src={RightArrow}
                          />
                        ) : (
                          <img
                            alt="right-arrow"
                            width="12px"
                            height="12  px"
                            src={RightArrow}
                          />
                        )}
                      </div>
                      <p className="h-sec-3-heading pt-0 m-2 text-white">
                        Renegotiations
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-11 pt-3  d-flex align-items-center  ">
                      <div className="col-md-1 d-flex justify-content-center align-items-center ">
                        {isMobile ? (
                          <img
                            alt="right-arrow"
                            width="6px"
                            height="6px"
                            src={RightArrow}
                          />
                        ) : (
                          <img
                            alt="right-arrow"
                            width="12px"
                            height="12  px"
                            src={RightArrow}
                          />
                        )}
                      </div>
                      <p className="h-sec-3-heading pt-0 m-2 text-white">
                        Advisory- Consolidation/Expansion
                      </p>
                    </div>
                  </div>

                  {/* <div className="row">
                <div className="col-md-11 pt-3  d-flex align-items-center ">
                  <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <img alt="right-arrow" src={RightArrow} />
                  </div>
                  <p className="h-sec-3-heading pt-0 m-2   text-white">
                    Serving across 450+ cities
                  </p>
                </div>
              </div> */}
                </div>
                <div className="h-sec-3-bottom-stick-contianer mt-4">
                  <h3 className="h-sec-3-heading bigh mt-5 ">
                    Our Network is extensive and so is our experience. This helps in
                    creating the right eco-system for investors, property owners,
                    and tenants.
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
            </LazyLoad>

          ) : (
            <div className="h-sec-3-right-contianer col-md-6 px-5">
              <div>
                <div className="row">
                  <div className="col-md-11  d-flex align-items-center ">
                    <div className="col-md-1 d-flex   align-items-center ">
                      <img
                        alt="right-arrow"
                        width="12px"
                        height="12  px"
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
                    <div className="col-md-1 d-flex  align-items-center">
                      <img
                        alt="right-arrow"
                        width="12px"
                        height="12  px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2  text-white">
                      {/* <img alt="right-arrow" src={RightArrow} /> */}
                      Landlord Representation
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 pt-3 d-flex align-items-center ">
                    <div className="col-md-1 d-flex align-items-center ">
                      <img
                        alt="right-arrow"
                        width="12px"
                        height="12  px"
                        src={RightArrow}
                      />
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Tenant Representation
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex align-items-center ">
                      {isMobile ? (
                        <img
                          alt="right-arrow"
                          width="6px"
                          height="6px"
                          src={RightArrow}
                        />
                      ) : (
                        <img
                          alt="right-arrow"
                          width="12px"
                          height="12  px"
                          src={RightArrow}
                        />
                      )}
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Renegotiations
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-11 pt-3  d-flex align-items-center  ">
                    <div className="col-md-1 d-flex align-items-center ">
                      {isMobile ? (
                        <img
                          alt="right-arrow"
                          width="6px"
                          height="6px"
                          src={RightArrow}
                        />
                      ) : (
                        <img
                          alt="right-arrow"
                          width="12px"
                          height="12  px"
                          src={RightArrow}
                        />
                      )}
                    </div>
                    <p className="h-sec-3-heading pt-0 m-2 text-white">
                      Advisory- Consolidation/Expansion
                    </p>
                  </div>
                </div>

                {/* <div className="row">
                <div className="col-md-11 pt-3  d-flex align-items-center ">
                  <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <img alt="right-arrow" src={RightArrow} />
                  </div>
                  <p className="h-sec-3-heading pt-0 m-2   text-white">
                    Serving across 450+ cities
                  </p>
                </div>
              </div> */}
              </div>
              <div className="h-sec-3-bottom-stick-contianer mt-4">
                <h3 className="h-sec-3-heading bigh mt-2 ">
                  Our Network is extensive and so is our experience. This helps in
                  creating the right eco-system for investors, property owners,
                  and tenants.
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
          )}
        </div>

        <div className="services-bg-21">
          <div className="ssp-sec-2-container1">
            <AchiveSlider />
          </div>
        </div>
        <div className="galleryBg  pt-5 pb-5 px-5 desktop-photos">
          <div className="row lg:px-5">
            <div className="col-md-6 ">
              <h3 className="sliderServiceheading  pb-3 services-title">
                Leading the way through front
              </h3>
            </div>
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
                        className="img-sliderProfile tp-slide-image"
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
                  <h3 className="profilename ">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h3>
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
                src={slides1[activeSlide]?.image}
              />
              <div className="gallary-selection-cotnainer">
                <div className="ssp-section-all-images my-4 text-center">
                  {slides1.map((e, i) => {
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
                  Corporate Leasing Service Excellence
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
                <div className="col-md-12 ">
                  <h2 className="profilename pt-2">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h2>
                  <p className="profileDes  ">
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
                  height="100%"
                  src={slides1[activeSlide]?.image}
                />
              </div>
              <div className="gallary-selection-cotnainer">
                <div
                  className="ssp-section-all-images mt-4 "
                >
                  {slides1.map((e, i) => {
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
                  Corporate Leasing Service Excellence{" "}
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
                <h2 className="medium-heading mobile-heading-client ss-4-heading w-100">
                  We have established trust with multiple large & small brands
                  with our experience
                </h2>
              </div>
              <div className="col-md-6 p-5 text-center m-auto">
                <div className="text-center">
                  <Slider {...settingsClient} arrows={false}>
                    <div>
                      <img
                        src={imgcor1}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor2}
                        className="img-fluid w-75  px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor3}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor4}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor5}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor6}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor7}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor8}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor9}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor10}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor11}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor12}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor13}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor14}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor15}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor16}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor17}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor18}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor19}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor20}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor21}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>

                    <div>
                      <img
                        src={imgcor22}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor23}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor24}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor25}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor26}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor27}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor28}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor29}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor30}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor31}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor32}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor33}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor34}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor35}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor36}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor37}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor38}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor39}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                    </div>
                    <div>
                      <img
                        src={imgcor40}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor41}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
                      <img
                        src={imgcor42}
                        className="img-fluid w-75 px-2 py-2"
                        alt="images"
                      />
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
        {/* <div className="bg-clientpage mobile">
        <div className="clientservicediv">
          <div className="row">
            <div className="col-md-6">
              <p className="small-text theme-voilet-text text-center">
                Our Clients
              </p>
              <h1 className="medium-heading ss-4-heading w-100 text-center">
                We have established trust with multiple large & small brands
                with our experience
              </h1>
            </div>
            <div className="col-md-6 p-5">
              <div className="p-5">
                <img src={imgcor1} className="img-fluid py-2 " />
                <img src={imgcor5} className="img-fluid py-2 " />
                <img src={imgcor6} className="img-fluid py-2" />
                <img src={imgcor7} className="img-fluid py-2" />
                <img src={imgcor8} className="img-fluid py-2" />
                <img src={imgcor9} className="img-fluid py-2" />
                <img src={imgcor4} className="img-fluid py-2" />
                <img src={imgcor2} className="img-fluid py-2" />
                <img src={imgcor3} className="img-fluid py-2" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
        {/* <div className="ssp-sec-6-container">
        <ThreeCardsContainer heading={"Case Studies"} />
      </div> */}
      </div>
    </>

  );
};

export default CorporateService;
