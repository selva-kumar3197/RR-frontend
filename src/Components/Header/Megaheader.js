import React from "react";
import "./Megaheader.css";

import { useState } from "react";
import { useEffect } from "react";
import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import LazyLoad from "react-lazy-load";

let headerLogo = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/headerLogo.png";
let headerHam = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/headerHam.png";
let crossClose = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/crossClose.png";
let rightArrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Group351.png";
let backarrow = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/backarrow.png";

function Megaheader() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [sidePanelRight, setSidePanelRight] = useState({ width: "0px" });
  const [sidePanelRightDesc, setSidePanelRightDesc] = useState({
    width: "0px",
  });
  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userRR")));
  }, []);
  const toggleRightPanel = () => {
    if (sidePanelRight.width == "0px") {
      setSidePanelRight({ width: "472px" });
    } else {
      setSidePanelRight({ width: "0px" });
    }
  };
  const toggleRightPanelDesc = () => {
    console.log("hello");
    if (sidePanelRightDesc.width == "0px") {
      setSidePanelRightDesc({ width: "472px" });
    } else {
      setSidePanelRightDesc({ width: "0px" });
    }
  };

  const openModel = () => {
    setSidePanelRight({ width: "0px" });
    setSidePanelRightDesc({ width: "0px" });
    setModalShow(true);
  };

  const [mainDiv, setMainDiv] = useState(true);
  const [service, setService] = useState(false);
  const [insights, setInsights] = useState(false);
  const [properties, setProperties] = useState(false);

  const [searchIcon, setSearchIcon] = useState(false);

  const [aboutUs, setAboutUs] = useState(false);

  const ClickService = () => {
    setService(true);
    setMainDiv(false);
  };
  const Clickinsights = () => {
    setInsights(true);
    setMainDiv(false);
  };
  const ClickProperties = () => {
    setProperties(true);
    setMainDiv(false);
  };
  const ClickSearchIcon = () => {
    setInsights(true);
    setMainDiv(false);
  };
  const ClickaboutUs = () => {
    setAboutUs(true);
    setMainDiv(false);
  };

  const backButton = () => {
    setMainDiv(true);
    setService(false);
    setInsights(false);
    setProperties(false);

    setAboutUs(false);
  };

  const [searchIconImage, setSearchIconImage] = React.useState(false);

  function handelSearchChange() {
    setSearchIconImage(true);
  }
  return (
    <div>
      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />

      <div style={sidePanelRight} className="sidepanel page-noice-bg">
        <div className="right-panel-container desktoppanel">

          <div className="r-p-links-continaer">
            <a className="r-p-link" href="/form">
              List Your Requirement
            </a>
            <a className="r-p-link" href="/properties">
              Find Properties
            </a>{" "}
            <a className="r-p-link" href="/career">
              Careers
            </a>
            <a className="r-p-link" href="/contactus">
              Contact us
            </a>
          </div>
        </div>

        <div className="right-panel-container mobilepanel">
          {service && (
            <div className="navlinkdiv mobilenav-link px-2 mobileDiv">
              <LazyLoad>
                <p onClick={backButton}>
                  {" "}
                  <img src={backarrow} /> Go back
                </p>
              </LazyLoad>

              <div className="tp-l-container mt-5">
                <h6 className="tp-l-heading large-heading fs-1 my-3 ">
                  Our Services
                </h6>
                <p className="small-text theme-grey-text">
                  We help businesses small and big, to find, lease and occupy
                  properties for the different needs that they have. We are
                  Realistic Realtors.
                </p>
                <a
                  href="/our-clients"
                  className="small-text theme-voilet-text"
                ></a>
              </div>
              <div className="tp-r-container">
                <div className="tp-r-links-contianer">
                  <a href="/corporate_leasing" className="link-container">
                    Corporate Leasing
                  </a>
                  <a href="/retail_services" className="link-container">
                    Retail Services
                  </a>
                  <a href="/warehouse_services" className="link-container">
                    Warehouse Services
                  </a>
                  <a href="/investment_advisory" className="link-container">
                    Investment Advisory
                  </a>
                  <a href="/interior_management" className="link-container">
                    Interior Management
                  </a>
                  <a href="/properties" className="link-container">
                    Find Properties
                  </a>
                  <a href="/form" className="link-container">
                    List your Requirement
                  </a>
                </div>
              </div>
            </div>
          )}
          {insights && (
            <div className="navlinkdiv mobilenav-link px-2  mobileDiv">
              <LazyLoad>
                <p onClick={backButton}>
                  {" "}
                  <img src={backarrow} /> Go back
                </p>
              </LazyLoad>

              <div className="tp-l-container mt-5">
                <h6 className="tp-l-heading large-heading fs-1 my-3 ">
                  Our Insights
                </h6>
                <p className="small-text theme-grey-text">
                  We help businesses small and big, to find, lease and occupy
                  properties for the different needs that they have. We are
                  Realistic Realtors.
                </p>
                <a
                  href="/our-clients"
                  className="small-text theme-voilet-text"
                ></a>
              </div>
              <div className="tp-r-container">
                <div className="tp-r-links-contianer">
                  <a className="link-container" href="/casestudy">
                    Case Studies
                  </a>
                  <a className="link-container" href="/media">
                    Media Coverage
                  </a>
                  <a className="link-container" href="/our-clients">
                    Our Clients
                  </a>

                  <a className="link-container" href="/market_trends">
                    Market Trends
                  </a>
                </div>
              </div>
            </div>
          )}
          {/* {properties && (
            <div className="navlinkdiv mobilenav-link px-2  mobileDiv">
            <LazyLoad>
            <p onClick={backButton}>
                {" "}
                <img src={backarrow} /> Go back
              </p>
            </LazyLoad>
            
              <div className="tp-l-container mt-5">
                <h6 className="tp-l-heading large-heading fs-1 my-3 ">
                  Our Insights
                </h6>
                <p className="small-text theme-grey-text">
                  We help businesses small and big, to find, lease and occupy
                  properties for the different needs that they have. We are
                  Realistic Realtors.
                </p>
                <a
                  href="/our-clients"
                  className="small-text theme-voilet-text"
                ></a>
              </div>
              <div className="tp-r-container">
                <div className="tp-r-links-contianer">
                  <a className="link-container" href="/casestudy">
                    Case Studies
                  </a>
                  <a className="link-container" href="/media">
                    Media Coverage
                  </a>
                  <a className="link-container" href="/our-clients">
                    Our Clients
                  </a>

                  <a className="link-container" href="/market_trends">
                    Market Trends
                  </a>
                </div>
              </div>
            </div>
          )} */}
          {aboutUs && (
            <div className="navlinkdiv mobilenav-link px-2  mobileDiv">
              <LazyLoad>
                <p onClick={backButton}>

                  <img src={backarrow} /> Go back
                </p>
              </LazyLoad>

              <div className="tp-l-container mt-5">
                <h6 className="tp-l-heading large-heading fs-1 my-3 ">
                  About Us
                </h6>
                <p className="small-text theme-grey-text">
                  We help businesses small and big, to find, lease and occupy
                  properties for the different needs that they have. We are
                  Realistic Realtors.
                </p>
                <a
                  href="/our-clients"
                  className="small-text theme-voilet-text"
                ></a>
              </div>
              <div className="tp-r-container">
                <div className="tp-r-links-contianer">
                  <a href="/aboutus" className="link-container">
                    Our Philosophy
                  </a>
                  <a href="/team@rr" className="link-container">
                    Our Team
                  </a>

                  <a href="/career" className="link-container">
                    Careers
                  </a>
                  <a href="/csr" className="link-container">
                    CSR
                  </a>
                  <a href="/awards" className="link-container">
                    Awards & Affiliations
                  </a>
                </div>
              </div>
            </div>
          )}
          {mainDiv && (
            <>
              <div className="navlinkdiv mobilenav-link">
                <nav>
                  <ul className="ull">
                    <li className="header-nav">
                      <LazyLoad>
                        <div onClick={ClickService}>
                          <a className="header-link">Our Services</a>
                          <img
                            className="right-arrow"
                            alt="right-arrow"
                            src={rightArrow}
                          />
                        </div>
                      </LazyLoad>


                    </li>
                    <li className="header-nav">
                      <LazyLoad>
                        <a href="/properties" >
                          <p className="header-link">
                            Properties

                          </p>
                        </a>
                      </LazyLoad>


                    </li>
                    <li className="header-nav">
                      <LazyLoad>
                        <div onClick={Clickinsights}>
                          <a className="header-link">Insights</a>
                          <img
                            className="right-arrow"
                            alt="right-arrow"
                            src={rightArrow}
                          />
                        </div>
                      </LazyLoad>

                    </li>
                    <li className="header-nav">
                      <LazyLoad>
                        <div onClick={ClickaboutUs}>
                          <a className="header-link">About Us</a>
                          <img
                            className="right-arrow"
                            alt="right-arrow"
                            src={rightArrow}
                          />
                        </div>
                      </LazyLoad>

                    </li>
                  </ul>
                </nav>
              </div>

              <div className="r-p-links-continaer">
                <a className="r-p-link" href="/form">
                  List Your Requirement
                </a>
                <a className="r-p-link" href="/properties">
                  Find Properties
                </a>{" "}
                <a className="r-p-link" href="/career">
                  Careers
                </a>
                <a className="r-p-link" href="/contactus">
                  Contact us
                </a>
              </div>
            </>
          )}
        </div>
      </div>

      <header>
        <div
          className="containernav desktopnav "
          style={{
            position: "fixed",
            transition: "visibility 0.3s ease-in-out, opacity 0.3s ease-in-out",
            visibility: isVisible ? "visible" : "hidden",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div className="navlinkdiv col-md-3 ">
            <nav>
              <ul className="ull">
                <li>
                  <a href="" className="header-link">
                    Services
                  </a>
                  <div className=" megamenuservice toppanel page-noice-bg">
                    <div className="tp-contianer">
                      <div className="tp-l-container">
                        <h2 className="tp-l-heading large-heading">
                          Our Services
                        </h2>
                        <p className="small-text theme-grey-text">
                          We help businesses small and big, to find, lease and
                          occupy properties for the different needs that they
                          have. We are Realistic Realtors.
                        </p>
                        <a
                          href="/our-clients"
                          className="small-text theme-voilet-text"
                        ></a>
                      </div>
                      <div className="tp-r-container">
                        <div className="tp-r-links-contianer">
                          <a
                            href="/corporate_leasing"
                            className="link-container"
                          >
                            Corporate Leasing
                          </a>
                          <a href="/retail_services" className="link-container">
                            Retail Services
                          </a>
                          <a
                            href="/warehouse_services"
                            className="link-container"
                          >
                            Warehouse Services
                          </a>
                          <a
                            href="/investment_advisory"
                            className="link-container"
                          >
                            Investment Advisory
                          </a>
                          <a
                            href="/interior_management"
                            className="link-container"
                          >
                            Interior Management
                          </a>
                        </div>
                        <div className="tp-r-links-contianer">
                          {/* <a
                            href="/Propertiesforsale"
                            className="link-container"
                          >
                            Properties for sale
                          </a>
                          <a
                            href="/Propertiesforlease"
                            className="link-container"
                          >
                            Properties for lease
                          </a> */}
                          <a href="/properties" className="link-container">
                            Find Properties
                          </a>
                          <a href="/form" className="link-container">
                            List your Requirement
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/properties" className="header-link">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="/casestudy" className="header-link">
                    Insights
                  </a>
                  <div className=" megamenuinsights toppanel page-noice-bg">
                    <div className="tp-contianer">
                      <div className="tp-l-container">
                        <h1 className="tp-l-heading large-heading ">
                          Insights
                        </h1>
                        <p className="small-text theme-grey-text">
                          We help businesses small and big, to find, lease and
                          occupy properties for the different needs that they
                          have. We are Realistic Realtors.
                        </p>
                        <a
                          href="/our-clients"
                          className="small-text theme-voilet-text"
                        ></a>
                      </div>
                      <div className="tp-r-container">
                        <div className="tp-r-links-contianer">
                          <a className="link-container" href="/casestudy">
                            Case Studies
                          </a>
                          <a className="link-container" href="/media">
                            Media Coverage
                          </a>
                          <a className="link-container" href="/our-clients">
                            Our Clients
                          </a>

                          <a className="link-container" href="/market_trends">
                            Market Trends
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="logo">
            <a href="/">
              <img
                className="mv-header-logo-image"
                alt="header-logo"
                src={headerLogo}
              />
            </a>{" "}
          </div>

          <div className="lastnavdiv d-flex align-items-center justify-content-center">
            <nav>
              <ul className="ull">
                <li>
                  <a
                    href="/aboutus"
                    className="header-link d-flex justify-content-center mt-1"
                  >
                    About Us
                  </a>
                  <div className=" megamenuabouts toppanel page-noice-bg">
                    <div className="tp-contianer">
                      <div className="tp-l-container">
                        <h2 className="tp-l-heading large-heading ">
                          {" "}
                          About us
                        </h2>
                        <p className="small-text theme-grey-text">
                          We help businesses small and big, to find, lease and
                          occupy properties for the different needs that they
                          have. We are Realistic Realtors.
                        </p>
                        <a
                          href="/our-clients"
                          className="small-text theme-voilet-text"
                        ></a>
                      </div>
                      <div className="tp-r-container">
                        <div className="tp-r-links-contianer">
                          <a href="/aboutus" className="link-container">
                            Our Philosophy
                          </a>
                          <a href="/team@rr" className="link-container">
                            Our Team
                          </a>
                          {/* <a href="/aboutus" className="link-container">
                            Vision & Mission
                          </a> */}
                          <a href="/career" className="link-container">
                            Careers
                          </a>
                          <a href="/csr" className="link-container">
                            CSR
                          </a>
                          <a href="/awards" className="link-container">
                            Awards & Affiliations
                          </a>
                          {/* <a className="link-container" href="/our-clients">
                            Our Clients
                          </a> */}
                        </div>
                        <div className="tp-r-links-contianer">
                          {/* <a href="/csr" className="link-container">
                            CSR
                          </a>
                          <a href="/clients" className="link-container">
                            Clients
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>



                <li className="mt-1">
                  {sidePanelRight.width === "0px" ? (
                    <img
                      className="img-fluid cursor-pointer"
                      onClick={() => toggleRightPanel()}
                      alt="ham-icon"
                      src={headerHam}
                    />
                  ) : (
                    <img
                      className="ham-icon cursor-pointer"
                      onClick={() => toggleRightPanel()}
                      alt="ham-icon"
                      src={crossClose}
                    />
                  )}
                  {/* <img className="ham-icon" alt="ham-icon" src={headerHam} /> */}
                </li>



              </ul>
            </nav>
          </div>
        </div>

        <div
          className="containernav mobilenav"
          style={{
            position: "fixed",
            transition: "visibility 0.3s ease-in-out, opacity 0.3s ease-in-out",
            visibility: isVisible ? "visible" : "hidden",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <LazyLoad>
            <div className="navlinkdiv">
              <nav>
                <ul className="ull">
                  <li>
                    {" "}
                    {sidePanelRight.width == "0px" ? (
                      <img
                        className="ham-icon"
                        onClick={() => toggleRightPanel()}
                        alt="ham-icon"
                        src={headerHam}
                      />
                    ) : (
                      <img
                        className="ham-icon"
                        onClick={() => toggleRightPanel()}
                        alt="ham-icon"
                        src={crossClose}
                      />
                    )}

                  </li>
                </ul>
              </nav>
            </div>
          </LazyLoad>
          <LazyLoad>
            <div className="logo">
              <a href="/">
                <img
                  className="mv-header-logo-image"
                  alt="header-logo"
                  src={headerLogo}
                />
              </a>{" "}
            </div>
          </LazyLoad>


          <div className="lastnavdiv">
            <nav>
              <ul className="ull">

              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Megaheader;
