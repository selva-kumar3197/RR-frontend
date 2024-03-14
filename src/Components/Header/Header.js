import React, { useEffect, useState } from "react";

import "./Header.css";
import { ArrowRight } from "react-bootstrap-icons";

import LoginSignupModal from "../LoginSignupModal/LoginSignupModal";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import LazyLoad from "react-lazy-load";
let headerLogo = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/headerLogo.png";
let headerSearchIcon = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/headerSearchIcon.png";
let headerHam = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/headerHam.png";
let crossClose = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/crossClose.png";

function Header() {
  const [sidePanelRight, setSidePanelRight] = useState({ width: "0px" });
  const [sidePanelTop, setSidePanelTop] = useState({ width: "0px" });
  const [topPanelServices, setTopPanelServices] = useState({ height: "0px" });
  const [topPanelAboutUs, setTopPanelAboutUs] = useState({ height: "0px" });
  const [topPanelInsights, setTopPanelInsights] = useState({ height: "0px" });
  const [modalShow, setModalShow] = useState(false);

  const toggleRightPanel = () => {
    setTopPanelServices({ height: "0px" });
    setTopPanelAboutUs({ height: "0px" });
    setTopPanelInsights({ height: "0px" });
    if (sidePanelRight.width == "0px") {
      setSidePanelRight({ width: "472px" });
    } else {
      setSidePanelRight({ width: "0px" });
    }
  };

  const toggleTopPanelServices = () => {
    setSidePanelRight({ width: "0px" });
    setTopPanelAboutUs({ height: "0px" });
    setTopPanelInsights({ height: "0px" });
    if (topPanelServices.height == "0px") {
      setTopPanelServices({ height: "400px" });
    } else {
      setTopPanelServices({ height: "0px" });
    }
  };

  const toggleTopPanelAboutUs = () => {
    setSidePanelRight({ width: "0px" });
    setTopPanelServices({ height: "0px" });
    setTopPanelInsights({ height: "0px" });
    if (topPanelAboutUs.height == "0px") {
      setTopPanelAboutUs({ height: "400px" });
    } else {
      setTopPanelAboutUs({ height: "0px" });
    }
  };

  const toggleTopPanelInsights = () => {
    setSidePanelRight({ width: "0px" });
    setTopPanelServices({ height: "0px" });
    setTopPanelAboutUs({ height: "0px" });
    if (topPanelInsights.height == "0px") {
      setTopPanelInsights({ height: "400px" });
    } else {
      setTopPanelInsights({ height: "0px" });
    }
  };

  const openModel = () => {
    setSidePanelRight({ width: "0px" });
    setModalShow(true);
  };

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userRR")));
  }, []);
  console.log(user, "useruser");

  return (
    <div>
      <div style={sidePanelRight} className="sidepanel page-noice-bg">
        <div className="mv-topnav">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                style={{
                  fontWeight: 10,
                }}
              >
                <h2 className="tp-l-heading large-heading ">Our Services</h2>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h2 className="tp-l-heading large-heading ">Our Services</h2>
                <p className="small-text theme-grey-text mv-small-text">
                  We help businesses small and big, to find, lease and occupy
                  properties for the different needs that they have. We are
                  Realistic Realtors.
                </p>
                <a
                  href="/clients"
                  className="small-text theme-voilet-text mv-small-text"
                ></a>
                <div className="tp-r-container">
                  <div className="tp-r-links-contianer">
                    <a href="/services" className="link-container">
                      services
                    </a>
                    <a href="/CorporateService" className="link-container">
                      Corporate services
                    </a>
                    <a href="/RetailServices" className="link-container">
                      Retail services
                    </a>
                    <a href="/" className="link-container">
                      Warehouse services
                    </a>
                    <a href="/InteriorManagement" className="link-container">
                      Interior Management
                    </a>
                  </div>
                  <div className="tp-r-links-contianer">
                    <a href="/InvestmentAdvisory" className="link-container">
                      Investment Advisory
                    </a>
                    <a href="/" className="link-container">
                      Corporate services
                    </a>
                    <a href="/RetailServices" className="link-container">
                      Retail services
                    </a>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                style={{
                  fontWeight: 10,
                }}
              >
                <a className="header-link" href="/mandated-properties-results">
                  <h3 className="tp-l-heading large-heading ">Properties</h3>
                </a>
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                style={{
                  fontWeight: 10,
                }}
              >
                <h3 className="tp-l-heading large-heading ">Insights</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="tp-contianer">
                  <div className="tp-l-container">
                    <h3 className="tp-l-heading large-heading">Insights</h3>
                    <p className="small-text theme-grey-text mv-small-text">
                      We help businesses small and big, to find, lease and
                      occupy properties for the different needs that they have.
                      We are Realistic Realtors.
                    </p>
                    <a
                      href="/clients"
                      className="small-text theme-voilet-text mv-small-text"
                    ></a>
                  </div>
                  <div className="tp-r-container">
                    <div className="tp-r-links-contianer">
                      <a href="/articles" className="link-container">
                        Articles
                      </a>
                      <a href="/" className="link-container">
                        Case Studies
                      </a>

                      <a href="/" className="link-container">
                        Media Coverage
                      </a>
                      <a href="/" className="link-container">
                        CSR
                      </a>
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* <div className="right-panel-container">
          <div className="r-p-acc-container">
            {user ? (
              <h3 className="r-p-acc-heading"> Welcome </h3>
            ) : (
              <h3 className="r-p-acc-heading">Have an accout?</h3>
            )}

            <p className="r-p-acc-content">
              Log in to save properties track listing requests and more.
            </p>

            {user ? (
              <a href="/account">
                <p className="r-p-acc-content theme-voilet-text r-p-acc-b-link">
                  Go to account <ArrowRight />
                </p>
              </a>
            ) : (
              <p
                onClick={openModel}
                className="r-p-acc-content theme-voilet-text r-p-acc-b-link"
              >
                Log in <ArrowRight />
              </p>
            )}
          </div>
          <div className="r-p-links-continaer">
            <a className="r-p-link" href="/career">
              Careers
            </a>
            <a className="r-p-link" href="/search">
              List your Requirement
            </a>
            <a className="r-p-link" href="/search">
              Properties
            </a>
            <a className="r-p-link" href="/privacypolicy">
              Privacy Policy
            </a>
            <a className="r-p-link" href="/Services">
              Insights
            </a>
          </div>
        </div> */}
      </div>

      <div style={topPanelServices} className="toppanel page-noice-bg">
        <div className="tp-contianer">
          <div className="tp-l-container">
            <h2 className="tp-l-heading large-heading ">Our Services</h2>
            <p className="small-text theme-grey-text">
              We help businesses small and big, to find, lease and occupy
              properties for the different needs that they have. We are
              Realistic Realtors.
            </p>
            <a href="/clients" className="small-text theme-voilet-text"></a>
          </div>
          <div className="tp-r-container">
            <div className="tp-r-links-contianer">
              <a href="/CorporateService" className="link-container">
                Corporate Leasing
              </a>
              <a href="/RetailServices" className="link-container">
                Retail services
              </a>
              <a href="/WarehousesServices" className="link-container">
                Warehouse services
              </a>
              <a href="/InvestmentAdvisory" className="link-container">
                Investment Advisory
              </a>
              <a href="/InteriorManagement" className="link-container">
                Interior Management
              </a>
            </div>
            <div className="tp-r-links-contianer">
              <a href="/Propertiesforsale" className="link-container">
                Properties for sale
              </a>
              <a href="/Propertiesforlease" className="link-container">
                Properties for lease
              </a>
              <a href="/form" className="link-container">
                List your Requirement
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={topPanelAboutUs} className="toppanel page-noice-bg">
        <div className="tp-contianer">
          <div className="tp-l-container">
            <h2 className="tp-l-heading large-heading "> About us</h2>
            <p className="small-text theme-grey-text">
              We help businesses small and big, to find, lease and occupy
              properties for the different needs that they have. We are
              Realistic Realtors.
            </p>
            <a href="/clients" className="small-text theme-voilet-text"></a>
          </div>
          <div className="tp-r-container">
            <div className="tp-r-links-contianer">
              <a href="/aboutus" className="link-container">
                About Us
              </a>
              <a href="/teams" className="link-container">
                Our Team
              </a>
              {/* <a href="/aboutus" className="link-container">
                Vision & Mission
              </a> */}
              <a href="/contactus" className="link-container">
                Contact us
              </a>
            </div>

          </div>
        </div>
      </div>

      <div style={topPanelInsights} className="toppanel page-noice-bg">
        <div className="tp-contianer">
          <div className="tp-l-container">
            <h1 className="tp-l-heading large-heading ">Insights</h1>
            <p className="small-text theme-grey-text">
              We help businesses small and big, to find, lease and occupy
              properties for the different needs that they have. We are
              Realistic Realtors.
            </p>
            <a href="/clients" className="small-text theme-voilet-text"></a>
          </div>
          <div className="tp-r-container">
            <div className="tp-r-links-contianer">
              <a href="/articles" className="link-container">
                Articles
              </a>
              <a href="/articles" className="link-container">
                Case Studies
              </a>

              <a href="/newsroom" className="link-container">
                Media Coverage
              </a>
              <a href="/csr" className="link-container">
                CSR
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-contianer">
        <div className="header-links-contianer">
          <p
            onClick={() => toggleTopPanelServices()}
            href="/"
            className="header-link"
          >
            Services
          </p>
          <p className="header-link">
            <a className="header-link" href="/mandated-properties">
              Properties
            </a>
          </p>
          <p
            className="header-link"
            href="/"
            onClick={() => toggleTopPanelInsights()}
          >
            Insights
          </p>
        </div>

        <a href="/">
          <img
            className="header-logo-image"
            alt="header-logo"
            src={headerLogo}
          />
        </a>


        <div className="header-links-contianer">

          <p
            className="header-link"
            href="/aboutus"
            onClick={() => toggleTopPanelAboutUs()}
          >
            About Us
          </p>
          <LazyLoad>
            <a className="header-link" href="/search">
              <img alt="search-icon" src={headerSearchIcon} />
            </a>


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
          </LazyLoad>
        </div>
      </div>

      <div className="mv-header-contianer">
        <div className="mv-header-links-contianer links-item">
          <p
            onClick={() => toggleTopPanelServices()}
            href="/"
            className="mv-header-link"
          >
            Services
          </p>
          <p className="mv-header-link">
            <a className="mv-header-link" href="/mandated-properties-results">
              Properties
            </a>
          </p>
          <p
            className="mv-header-link"
            href="/"
            onClick={() => toggleTopPanelInsights()}
          >
            Insights
          </p>
        </div>
        <LazyLoad>
          {sidePanelTop.width == "0px" ? (
            <img
              className="mv-ham-icon"
              onClick={() => toggleRightPanel()}
              alt="ham-icon"
              src={headerHam}
            />
          ) : (
            <img
              className="mv-ham-icon"
              onClick={() => toggleRightPanel()}
              alt="ham-icon"
              src={crossClose}
            />
          )}
          <a href="/">
            <img
              className="mv-header-logo-image"
              alt="header-logo"
              src={headerLogo}
            />
          </a>{" "}


          <div className="mv-header-links-contianer">
            <p
              className="mv-header-link links-item"
              href="/aboutus"
              onClick={() => toggleTopPanelAboutUs()}
            >
              About Us
            </p>
            <a className="mv-header-link" href="/search">
              <img alt="search-icon" src={headerSearchIcon} />
            </a>
          </div>
        </LazyLoad>
      </div>
      <LoginSignupModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Header;
