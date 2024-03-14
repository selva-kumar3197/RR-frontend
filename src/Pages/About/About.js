import React from "react";
import "./About.css";
import { Helmet } from 'react-helmet';



import SectionView from "../../Components/SectionView/SectionView";
import LazyLoad from 'react-lazy-load';

import "./../../Components/AboutCard/AboutCard.css";
import { useEffect } from "react";
import Aos from "aos";
let proTeam = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/aboutusteam.jpg";
let ABOUT_SERVICES_1 = "https://rr-media-files.s3.ap-south-1.amazonaws.com/ABOUT+SERVICES+1.mp4";
let ABOUT_SERVICES_2 = "https://rr-media-files.s3.ap-south-1.amazonaws.com/About+Service+2.mp4";
let ABOUT_SERVICES_3 = "https://rr-media-files.s3.ap-south-1.amazonaws.com/About+Service+3.mp4";
let ibars = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/iBars.mp4";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Helmet>
        <title>About Us: Trusted Experts in the Real Estate Industry


        </title>
        <meta name="description" content="Learn about Realistic Realtors and our commitment to providing exceptional real estate services. Discover our team's expertise and client-focused approach.


" />
      </Helmet>
      <div className="ab-page-contianer page-noice-bg">
        <h2 className="medium-heading1012 ap-head shadow-sm"> About Us</h2>
        <div className="ab-banner-container  ">
          <div className="ab-banner-image-bg mt-5">
            <div className="">
              <div className="ab-banner-heading-contianer desktop-head ">
                <h3 className="ab-banner-heading">It’s all about the process</h3>
                <h1 className="small-text ab-banner-subheading text-white mt-2 ">
                  We offer unrivalled & tailor-made real estate solutions
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="ab-banner-heading-contianer mobile-head">
          <h3 className="ab-banner-heading ab-head">
            It’s all about the
            <br /> process
          </h3>
          <p className="small-text ab-banner-subheading ab-subhead  ">
            We offer unrivalled & tailor-made real estate solutions
          </p>
        </div>

        <SectionView className="">
          <>
            <p className=" w-100  m-auto aboutUs-text">
              When it comes to comprehensive & holistic real estate solutions,
              Realistic Realtors is your trusted partner. Over the years, we
              transacted more than 20 million sq. ft. of commercial space,
              mitigating realty risks & facilitating consistent growth of our
              clients. Offering customized solutions to over 15,000 satisfied
              patrons, we specialize in optimizing their workplace flexibility &
              productivity in more than 450 cities in India. Rolling out
              well-researched & distinctive offerings, we aim to achieve maximum
              client satisfaction by providing properties that meet the
              expectations of budget, location, and facilities.
            </p>
          </>
        </SectionView>
        <div
          className="ab-page-sec-2-contianer pt-0 mt-0"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SectionView className="pt-0 mt-0">
            <div className="row pt-4 ">
              <div className="col-md-4">
                <p className="small-text ac-heading-number fs-5">Our Vision</p>
                <h3 className="medium-heading">
                  {" "}
                  Highly Competitive Transactions
                </h3>
                <LazyLoad>
                  <video
                    className="ac-image-contianer"
                    src={ABOUT_SERVICES_2}
                    autoPlay loop muted playsInline
                  />
                </LazyLoad>


                <p className="small-text  pt-3 desktop-text about-us-text">
                  To accelerate the mapping of complete Real Estate
                  infrastructure, enabling the execution of the most competitive
                  Real Estate Transactions.
                </p>
                {/* <p className="small-text  pt-3 mobile-text-cont">
                Strengthened by our inherent legacy,
                <br /> we ensure to provide strategic
                <br /> & customised solutions for businesses
                <br />
                of all shapes and sizes.
              </p> */}
              </div>
              <div className="col-md-4 ">
                <p className="small-text ac-heading-number fs-5">Our Mission</p>
                <h3 className="medium-heading"> Personalized Solutions</h3>
                <LazyLoad>
                  <video
                    className="ac-image-contianer"
                    src={ABOUT_SERVICES_1}
                    autoPlay loop muted playsInline
                  />
                </LazyLoad>

                <p className="small-text  pt-3 desktop-text about-us-text">
                  To provide Personalized and Value-Added Services for all Real
                  Estate Transactions.
                </p>
                {/* <p className="small-text  pt-3 mobile-text-cont">
                Our extensive knowledge & widespread
                <br /> empowers us to deliver long-term
                <br />
                qualitative & beneficial outcomes
              </p> */}
              </div>
              <div className="col-md-4">
                <p className="small-text ac-heading-number fs-5">Our Promise</p>
                <h3 className="medium-heading">End-to-End Services</h3>
                {/* <p className="ac-small-heading"></p> */}
                <LazyLoad>
                  <video
                    className="ac-image-contianer"
                    src={ABOUT_SERVICES_3}
                    autoPlay loop muted playsInline
                  />
                </LazyLoad>

                <p className="small-text  pt-3 desktop-text about-us-text">
                  To serve you with consistent, transparent and engaging
                  experience backed by wholistic practices.
                </p>
                {/* <p className="small-text  pt-3 mobile-text-cont">
                Businesses that are growing fast need a partner
                <br /> that can handle their end-to-end needs.
                <br />
                That’s where we come in the picture to serve you with
                consistent,
                <br /> transparent and engaging experience backed by universal
                practices.
              </p> */}
              </div>
            </div>
          </SectionView>
        </div>

        <div className=" ">
          <div
            className="aboutusbgimages"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="ab-page-sec-3-contianer1 ab-mobile">
              <h3 className="large-heading ab-3-heading">
                We mean business when we are talking about real estate solutions
                and advisory. The desire to be the best at what we do drives us to
                work not only harder but smarter as well.
              </h3>
              <p className="small-text ab-3-subheading fs-5 mt-2">
                Harinder Singh Hora,&nbsp;Founder Chairman, Realistic Realtors
              </p>
            </div>
          </div>
        </div>



        <div className=" desktopaboutdiv">
          <div className="row ibartextdiv m-0 p-0 ">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="p-4 pt-5 mt-4 abouusscrool">
                <h2 className="h-sec-3-heading bigh pt-3 fs-md-1 fs-2xl-2">
                  Why Choose Realistic Realtors ?
                </h2>

                <p className="ibartext">
                  While we cover all aspects of professional real estate advisory,
                  we can be competitive in delivering our commitments and making
                  it a personal experience in the most profitable way for our
                  partners.
                </p>
                <div className="">
                  <details className="px-0 borderDetails ">
                    <summary className="px-1">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-11 px-0">
                          <h2 className="sm-heading">Our Widespread Network</h2>
                        </div>
                        <div className="col-md-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon aboutUsIcon "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <div>
                      <div className="row justify-content-center align-items-center">
                        <p className="text-white ibartext">
                          By offering strategic real estate solutions and
                          cutting-edge services, Realistic Realtors provides its
                          clients access to state-of-the-art properties in over
                          450 cities with its widespread network of more than
                          4,00,000 property owners.
                        </p>{" "}
                      </div>
                    </div>
                  </details>

                  <details className="px-0 borderDetails">
                    <summary className="px-1">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-11 px-0">
                          <h2 className="sm-heading">Technology Adoption</h2>
                        </div>
                        <div className="col-md-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon aboutUsIcon "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <div>
                      <div className="row">
                        <p className="text-white ibartext">
                          We know how to leverage technology to get maximum
                          efficiency in our plan of action while providing you
                          with a wide range of connections through our network of
                          <b> 200+ </b> Developers & <b>150+</b> Channel Partners
                          that promote your growth.
                        </p>{" "}
                      </div>
                    </div>
                  </details>

                  <details className="px-0 borderDetails">
                    <summary className="px-1">
                      <div className="row justify-content-center align-items-center">
                        <div className="col-md-11 px-0">
                          <h2 className="sm-heading">Partners Above All</h2>
                        </div>
                        <div className="col-md-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon aboutUsIcon "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <div>
                      <div className="row">
                        <p className="text-white ibartext">
                          Prioritizing the customer’s expectations, we channelize
                          the growth of our clientele by providing sought-after
                          properties. Our core values of service excellence, fair
                          negotiation, and transparency enable us to achieve the
                          highest levels of client satisfaction at every step.
                        </p>{" "}
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mobileaboutusdiv">
          <div className="col-md-6">
            <div className="divvideoivar">
              <LazyLoad>
                <video className="w-100" src={ibars} autoPlay loop muted playsInline />
              </LazyLoad>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 pt-md-5 mt-4 abouusscrool">
              <h2 className="h-sec-3-heading bigh2 pt-md-3 fs-1">
                Why Choose Realistic Realtors ?
              </h2>

              <p className="ibartext">
                While we cover all aspects of professional real estate advisory,
                we can be competitive in delivering our commitments and making it
                a personal experience in the most profitable way for our partners.
              </p>
              <div className="">
                <details className="px-0 borderDetails">
                  <summary className="px-1">
                    <div className="row">
                      <div className="col-md-11 px-0">
                        <h2 className="sm-heading">Our Widespread Network</h2>
                      </div>
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon aboutUsIcon "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div>
                    <div className="row">
                      <p className="text-white ibartext">
                        Our physical presence is PAN INDIA with services in more
                        than <b>450 cities</b>. We have been able to provide the
                        perfect permutation & combination for the real estate
                        needs of more than <b>40,000</b> Owners & <b>3500</b>{" "}
                        HNIs/NRIs clients.
                      </p>{" "}
                    </div>
                  </div>
                </details>

                <details className="px-0 borderDetails">
                  <summary className="px-1">
                    <div className="row">
                      <div className="col-md-11 px-0">
                        <h2 className="sm-heading">Technology Adoption</h2>
                      </div>
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon aboutUsIcon "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div>
                    <div className="row">
                      <p className="text-white ibartext">
                        We know how to leverage technology to get maximum
                        efficiency in our plan of action while providing you with
                        a wide range of connections through our network of&nbsp;
                        <b>200+</b> Developers & <b>150+</b> Channel Partners that
                        promote your growth.
                      </p>{" "}
                    </div>
                  </div>
                </details>

                <details className="px-0 borderDetails">
                  <summary className="px-1">
                    <div className="row">
                      <div className="col-md-11 px-0">
                        <h2 className="sm-heading">Partners Above All </h2>
                      </div>
                      <div className="col-md-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon aboutUsIcon "
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div>
                    <div className="row">
                      <p className="text-white ibartext">
                        We know the value of a good client relationship and what
                        it brings to the table, we regard it above everything
                        else. Our core values of service excellence, fair
                        negotiation and transparency enable us to achieve the
                        highest levels of client satisfaction in all our
                        relationships.
                      </p>{" "}
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" aboutus-bg-2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <SectionView>
            <div className="row">
              <div className="col-md-12">
                <h2 className="medium-heading ab-sec-head-desktop pb-2">
                  Together, we conceptualize the idea of strong & holistic growth.
                </h2>
                <p className="medium-heading ab-sec-head-mobile">
                  Together, we conceptualize the idea of strong & holistic growth.
                </p>
                <p className="h-sec-5-bottom-container-dis mobile-h-sec-5-head-para pb-0 mb-0 ">
                  Team Realistic is a high-touch team of 200+ members, known for
                  extensive market knowledge.The endeavor is to provide
                  transparent process & continual access to all internal &
                  external relationship for the welfare of ALL.
                </p>
              </div>
            </div>
            <LazyLoad>
              <img
                src={proTeam}
                alt="ab pro team image"
                className="ab-pro-team-image "
              />
            </LazyLoad>

          </SectionView>
        </div>
      </div>
    </>
  );
};

export default About;
