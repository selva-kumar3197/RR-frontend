import React, { useState, lazy, Suspense } from "react";

import "./Home.css";
import VideoLooper from "react-video-looper";

import Button from "../../Components/Button/Button";
import SectionView from "../../Components/SectionView/SectionView";
import SlideCardComponent from "../../Components/SlideCardComponent/SlideCardComponent";
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazy-load';


import HomeSlider from "./HomeSlider";
import Aos from "aos";
import { useEffect } from "react";
import ApiService from "../../service/ApiService";
import AnimatedText from "react-animated-text-content";
import { useNavigate } from "react-router-dom";
// import home_banner from "../../assets/deskstop12.mp4"
let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4";

let RightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/RightArrow.png";
let home_banner = "https://rr-media-files.s3.ap-south-1.amazonaws.com/deskstop12.mp4"

let home_banner_mobile = "https://rr-media-files.s3.ap-south-1.amazonaws.com/mobile.mp4"


const BannerButton = {
  marginTop: "2em",
  padding: "13px 30px",
};
const BannerButtonMobile = {
  marginTop: "2em",
  padding: "12px 100px",
};

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    // Image has finished loading
    // setIsLoading(false);
  };

  const handleVideoLoad = () => {
    // Video has finished loading
    setIsLoading(false);
  };


  useEffect(() => {
    Aos.init();
  });

  const stopMovie = (e) => {
    e.target.pause();
    console.log("off");
  };

  const playMovie = (e) => {
    e.target.play();
    console.log("on");
  };

  useEffect(() => {
    RewardsList();
  }, []);

  const [articals, setArticals] = useState([]);
  // const [articalImg, setAericalImg] = useState();
  const RewardsList = async () => {
    // const data = await ApiService.getData("/category/articles");
    const data1 = await ApiService.getData("/category/casestudy");
    // setloadstate(false);
    // setCaseStudies(data1);
    setArticals(data1);
  };
  const letestArtical = articals ? articals.slice(-1) : "";
  // const letestCase = caseStudies ? caseStudies.slice(-1) : "";
  console.log(letestArtical, "letestArtical");

  const navigate = useNavigate();

  const handelOnclickArtical = (ele) => {
    navigate("/CaseStudiesDetails", {
      state: {
        ele,
      },
    });
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


      <>


        <Helmet>
          <title>Realistic Realtors: Trusted Commercial Real Estate Advisors
          </title>
          <meta name="description" content="Realistic Realtors is your trusted partner for commercial real estate advisory. Benefit from our experienced real estate advisors.

" />
        </Helmet>
        <div className="containerhome-page-">




          <>
            {isMobile ? (
              <>
                {" "}
                <LazyLoad>
                  <video className="home-page-banner-container" alt="slide-image" cover autoPlay loop muted playsInline onLoadedData={handleVideoLoad}>
                    <source src={home_banner_mobile} type="video/mp4" />
                  </video>

                </LazyLoad>

                <SectionView>
                  <div className=" desktop-pb-5">
                    <p className="homepage-banner-top-text homepage-banner-top-text-margin">
                      India’s Largest Commercial Real Estate Advisory Firm
                    </p>

                    <h2 className="homepage-banner-heading w-md-50">
                      <AnimatedText
                        type="char"
                        interval={0.06}
                        duration={1.5}
                        animation={{
                          y: "100px",
                          ease: "ease",
                          scale: 2.66,
                        }}
                        className="round"
                      >
                        SPACE
                      </AnimatedText>
                      that works for you.

                    </h2>
                    <p className="homepage-banner-top-text ">
                      {" "}
                      We at Realistic Realtors consult clients on their space <br />
                      requirements and curate properties that align with their
                      vision.
                    </p>
                    <a
                      href="/form     "
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <p style={BannerButton} className={"button1"}>
                        List & Find Space
                      </p>
                    </a>
                  </div>
                </SectionView>
              </>
            ) : (
              <>

                <LazyLoad>
                  <video className="home-page-banner-container" alt="slide-image" autoPlay loop muted playsInline onLoadedData={handleVideoLoad}>
                    <source src={home_banner} type="video/mp4" />
                  </video>
                </LazyLoad>


                <SectionView className="" >
                  <div className="pb-5 desktop-pb-5 section_ab ">
                    <p className="homepage-banner-top-text homepage-banner-top-text-margin">
                      India’s Largest Commercial Real Estate Advisory Firm
                    </p>

                    <h2 className="homepage-banner-heading w-md-50">
                      <AnimatedText
                        type="char"
                        interval={0.06}
                        duration={1.5}
                        animation={{
                          x: "200px",
                          y: "100px",
                          ease: "ease",
                          scale: 2.66,
                        }}
                        className="round"
                      >
                        SPACE
                      </AnimatedText>
                      that works
                      <span> for you.</span>

                    </h2>
                    <h1 className="homepage-banner-top-text ">
                      {" "}
                      We at Realistic Realtors consult clients on their space{" "}
                      <br />
                      requirements and curate properties that align with their
                      vision.
                    </h1>
                    <a href="/form">
                      <Button
                        style={BannerButton}
                        className={"white-button"}
                        // title={"Find and Lease Space"}
                        title={"List & Find Space"}
                      />
                    </a>
                  </div>
                </SectionView>


              </>

            )}
          </>
          <>
            <div className="pb-5 mobile-pb-5">
              <p className="homepage-banner-top-text homepage-banner-top-text-margin mobile-home-text">
                India’s Largest Commercial Real Estate Advisory Firm
              </p>
              <h3 className="homepage-banner-heading mobile-home-head">
                SPACE
                <br /> that works for you.
              </h3>
              <p className="homepage-banner-top-text mobile-home-text">
                We at Realistic Realtors consult clients on their space requirements
                and curate properties that align with their vision.
              </p>
              <div className="homepage-button">
                <a href="/Listyourproperty">
                  <Button
                    style={BannerButtonMobile}
                    className={"white-button home-button"}
                    title={"List & Find Space"}
                  />
                </a>
              </div>
            </div>
            <div className="h-sec-2-bg-contianer ">
              <SectionView className="home">
                <div className="row mt-md-3 our-service-ipad">
                  <div className="col-md-2">
                    <div className="h-sec-2-left-contianer">
                      <p>OUR SERVICES</p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="h-sec-2-right-contianer">
                      <h3
                        className="h-sec-2-heading desktop-sec-head text-justify"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        We are Realistic Realtors. We help businesses and investors,
                        small and big, to find solutions for the different real
                        estate needs they have. Our legacy enables us to provide
                        holistic services yielding beneficial results for our
                        patrons' elevated future.
                      </h3>
                      <h3 className="h-sec-2-heading mobile-sec-head">
                        We are Realistic Realtors. We help businesses and investors,
                        small and big, to find solutions for the different real
                        estate needs they have. Our legacy enables us to provide
                        holistic services yielding beneficial results for our
                        patrons elevated future.
                      </h3>

                      <div
                        className="h-sec-2-slide-view-container "
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        <HomeSlider className="" />
                      </div>
                    </div>
                  </div>
                </div>


              </SectionView>
            </div>
            <div className="h-sec-3-contianer desktop-h-sec-3 ">
              <div className="h-sec-3-contianer  row">
                <div className=" col-md-6 ipad-ourservice">
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
                {isMobile ? (
                  <div className="h-sec-3-right-contianer col-md-6 px-3">
                    <div>
                      <div className="row pt-3">
                        <div className="col-md-11  d-flex align-items-center ">
                          <div className="col-md-1 d-flex   align-items-center ">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="6px"
                                height="6  px"
                                src={RightArrow}
                              />
                            </LazyLoad>

                          </div>
                          <p className="h-sec-3-heading pt- m-2  text-white">
                            Serving across 450+ cities
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3  d-flex align-items-center ">
                          <div className="col-md-1 d-flex  align-items-center">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="6px"
                                height="6  px"
                                src={RightArrow}
                              />
                            </LazyLoad>
                          </div>
                          <p className="h-sec-3-heading pt-0 m-2  text-white">
                            20 Million sq. ft. of space transacted
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3 d-flex align-items-center ">
                          <div className="col-md-1 d-flex align-items-center ">

                            <img
                              alt="right-arrow"
                              width="6px"
                              height="6  px"
                              src={RightArrow}
                            />

                          </div>
                          <p className="h-sec-3-heading pt-0 m-2 text-white">
                            Over 400K property owners
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3 d-flex align-items-center ">
                          <div className="col-md-1 d-flex align-items-center ">

                            <img
                              alt="right-arrow"
                              width="6px"
                              height="6  px"
                              src={RightArrow}
                            />

                          </div>
                          <p className="h-sec-3-heading pt-0 m-2 text-white">
                            200+ Committed real estate experts
                          </p>
                        </div>
                      </div>


                    </div>
                    <div className="h-sec-3-bottom-stick-contianer mt-md-4">
                      <h3 className="h-sec-3-heading bigh mt-md-2 ">
                        Our Network is extensive and so is our experience. This
                        helps in creating the right eco-system for investors,
                        property owners, and tenants.
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
                ) : (
                  <div className="h-sec-3-right-contianer col-md-6 px-5">
                    <div>
                      <div className="row">
                        <div className="col-md-11  d-flex align-items-center ">
                          <div className="col-md-1 d-flex   align-items-center ">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="12px"
                                height="12  px"
                                src={RightArrow}
                              />
                            </LazyLoad>
                          </div>
                          <p className="h-sec-3-heading pt- m-2  text-white">
                            Serving across 450+ cities
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3  d-flex align-items-center ">
                          <div className="col-md-1 d-flex  align-items-center">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="12px"
                                height="12  px"
                                src={RightArrow}
                              />
                            </LazyLoad>
                          </div>
                          <p className="h-sec-3-heading pt-0 m-2  text-white">
                            20 Million sq. ft. of space transacted
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3 d-flex align-items-center ">
                          <div className="col-md-1 d-flex align-items-center ">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="12px"
                                height="12  px"
                                src={RightArrow}
                              />
                            </LazyLoad>
                          </div>
                          <p className="h-sec-3-heading pt-0 m-2 text-white">
                            Over 400K property owners
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-11 pt-3 d-flex align-items-center ">
                          <div className="col-md-1 d-flex align-items-center ">
                            <LazyLoad>
                              <img
                                alt="right-arrow"
                                width="12px"
                                height="12  px"
                                src={RightArrow}
                              />
                            </LazyLoad>
                          </div>
                          <p className="h-sec-3-heading pt-0 m-2 text-white">
                            200+ Committed real estate experts
                          </p>
                        </div>
                      </div>


                    </div>
                    <div className="h-sec-3-bottom-stick-contianer mt-4">
                      <h2 className="h-sec-3-heading bigh mt-2 ">
                        Our Network is extensive and so is our experience. This
                        helps in creating the right eco-system for investors,
                        property owners, and tenants.
                      </h2>
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
            </div>
          </>

          {/* sliderdiv */}


        </div>



        <div className="h-sec-4-bg-contianer">
          <SectionView style={{ textAlign: "center" }}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <p className="h-sec-4-top-text mb-5 mobile-mb-5">TRUSTED BY</p>
              <h2 className="h-sec-4-heading  mb-5 pb-4 desktop-mb-5-head ">
                Samsung, BOSE, Sony Multimedia, HT Media, TCS,
                <br />
                TOTO, BIBA, Reliance Retail, Cultfit, DHL, LG, Flipkart,
                <br />
                Yusen Logistics, Apollo Tyres, Reliance JIO BP.
              </h2>
              <p className="h-sec-4-heading  mb-5 pb-4 mobile-mb-5-head">
                Samsung, BOSE, Sony Multimedia, HT Media, TCS,
                <br />
                TOTO, BIBA, Reliance Retail, Cultfit, DHL, LG, Flipkart,
                <br />
                Yusen Logistics, Apollo Tyres, Reliance JIO BP.
              </p>
              <div className="article-home-button">
                <a href="/our-clients">
                  <Button
                    className={"dark-bg-white-color art-home-button"}
                    title={"Our Journey Partner"}
                  />
                </a>
              </div>
            </div>
          </SectionView>
        </div>

        <div
          className="h-sec-5-bg-contianer"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SectionView style={{ paddingTop: "unset", paddingBottom: "3em" }}>
            {console.log(letestArtical, "latest")}
            {letestArtical
              ? letestArtical.map((ele) => (
                <>
                  <div className="h-sec-5-top-contianer">
                    <p className="h-sec-4-top-text">Case Study</p>
                    {/* <div className="h-sec-5-counts-container">
                  <div className="counter-circle-contianer">01</div>
                  <div className="counter-circle-contianer">02</div>
                  <div className="counter-circle-contianer">03</div>
                </div> */}
                    <a
                      className="article-cards-read-all small-text"
                      href="/caseStudy"
                    >
                      Read all
                    </a>
                  </div>
                  <div className="ap-sec-2-container p-0 mt-4">
                    <div className="ap-l-container">
                      <div className="ap-view-img-div">
                        <LazyLoad>
                          <img
                            src={ele?.image}
                            alt="view image"
                            className="ap-view-image "
                            onLoad={handleImageLoad}
                          />
                        </LazyLoad>
                      </div>
                    </div>
                    <div className="ap-r-container">
                      <p className="article-card-heading pb-0 mb-0 fs-1">
                        {ele.title}
                      </p>
                      <p className="article-card-heading mt-0 pt-0 mb-0 pb-0 ">
                        {console.log(ele, "ele.name==>")}
                        {ele.name}
                      </p>
                      {/* <p className="theme-grey-text small-text ap-desc pt-2">
                    May 29, 2022 • 5 min read • Market Insight
                  </p> */}
                      <p className="theme-grey-text small-text small-text1 pb-0">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ele?.description.slice(0, 186),
                          }}
                        ></span>
                      </p>
                      <a
                        // href="/articles"
                        className="small-text5 cursor-pointer "
                        onClick={() => handelOnclickArtical(ele)}
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>


                </>
              ))
              : ""}

            {letestArtical.length == 0 ? (
              <p className="h-sec-4-top-text text-center">
                Loading Case Study........
              </p>
            ) : (
              ""
            )}
          </SectionView>
        </div>
        {/* data-aos="fade-up" data-aos-duration="3000" */}
      </>


    </>

  );
};

export default Home;
