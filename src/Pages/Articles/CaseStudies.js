import React, { useState } from "react";
import "./Articles.css";

import { ArrowRight } from "react-bootstrap-icons";

import { Helmet } from 'react-helmet';



import Aos from "aos";
import { useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
let news1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical1.png";
let news2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical2.png";
let news3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical3.png";
let news4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical4.png";
let news5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical5.png";
let news6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/news/artical6.png";
let articlesabnner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/case_studies_banner.jpg";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  const [loadstate, setloadstate] = useState(false);

  useEffect(() => {
    Aos.init();
    RewardsList();
  }, []);

  const [articals, setArticals] = useState([]);

  const RewardsList = async () => {
    setloadstate(true);

    const data = await ApiService.getData("/category/articles");
    const data1 = await ApiService.getData("/category/casestudy");
    setloadstate(false);
    setCaseStudies(data1);
    setArticals(data);
  };
  const letestArtical = articals ? articals.slice(-1) : "";
  const letestCase = caseStudies ? caseStudies.slice(-1) : "";

  const FinalCase = [...caseStudies].reverse().splice(1);
  console.log(letestCase, "letestCase");
  console.log(articals, "letestArtical");
  const [activeWindow, setActiveWindow] = useState(1);
  const [articalDiv, setArticalDiv] = useState(false);
  const [caseDiv, setCaseDiv] = useState(true);

  const toggleCase = () => {
    setArticalDiv(false);
    setCaseDiv(true);
    setActiveWindow(1);
  };

  const toggleArtical = () => {
    setArticalDiv(true);
    setCaseDiv(false);
    setActiveWindow(2);
  };

  const navigate = useNavigate();

  const handelOnclickArtical = (ele) => {
    navigate("/article-details", {
      state: {
        ele,
      },
    });
  };

  const handelOnclickCaseStudies = (ele) => {
    navigate("/CaseStudiesDetails", {
      state: {
        ele,
      },
    });
  };

  console.log(articals, "articals");
  return (
<>
<Helmet>
        <title>Discover Success Stories with Our Effective Solutions


</title>
        <meta name="description" content="Explore real estate case studies showcasing how Realistic Realtors provided effective solutions for clients' buying, selling, and investment needs.


" />
      </Helmet>
<div className="page-noice-bg articles-contianer">
      <h1 className="medium-heading1012 ap-head shadow-sm"> Case Studies</h1>
      <div className="page-noice-bg ap-banner-contianer  ">
      <img
          src={articlesabnner}
          alt="banner image"
          className="ap-banner-image1 mt-5"
        />
    
      
      </div>

      {caseDiv && (
        <>
          <div className="ap-sec-2-container">
            <div className="ap-l-container">
              {letestCase
                ? letestCase.map((ele) => (
                  <div className="ap-view-img-div">
               
                  <img
                      src={ele?.image}
                      alt="view imaiew image"
                      className="ap-view-image "
                    />
          
                  
                  </div>
                ))
                : ""}
            </div>
            <div className="ap-r-container">
              <p className="theme-voilet-text small-text5 ap-smalltext">
                Featured Case Studies
              </p>
              {letestCase
                ? letestCase.map((ele) => (
                  <>
                    <p className="medium-heading ap-view-heading  ">
                      {ele.title}
                    </p>
                    <p className="medium-heading ap-view-heading subTitleCaseStudies mb-3">
                      {ele.name}
                      {console.log(ele.name, "ele.name==>")}
                    </p>
                    {/* <p className="theme-grey-text small-text ap-desc">
                        May 29, 2022 • 5 min read • Market Insight
                      </p> */}
                    <p className="theme-grey-text small-text5 ">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ele?.description.slice(0, 844),
                        }}
                      ></span>
                    </p>
                    <a
                      className="small-text5 cursor-pointer "
                      onClick={() => handelOnclickCaseStudies(ele)}
                    >
                      READ MORE
                    </a>
                    {/* <ArrowRight className="ap-read-more-icon" /> */}
                  </>
                )).reverse()
                : ""}
            </div>
          </div>

          <div className="ap-ar-cards-container">
            <div className="article-cards-grid-cotnainer-parent">
              <div className="article-cards-grid-cotnainer">
                {loadstate ? (
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="">
                        <div class="loader">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {caseStudies ? (
                      FinalCase.map((ele) => (
                        <div>
                          <div className="article-card-container aricaldiv my-3">
                            <div className="artical-card-img-div">
                       
                            <img
                                src={ele?.image}
                                alt="card image"
                                className="article-card-image"
                              />
                       
                           
                            </div>

                            <p className="article-card-heading pb-0 mb-0">
                              {ele.title}
                            </p>
                            <p className="article-card-heading mt-0 pt-0 mb-0 pb-0 subTitleCaseStudiesName">
                              {console.log(ele, "ele.name==>")}
                              {ele.name}
                            </p>
                            <p
                              className="small-text5 theme-grey-text mt-3 article-card-content1 aricaldiv"
                              dangerouslySetInnerHTML={{
                                __html: ele?.description.slice(0, 180),
                              }}
                            ></p>
                            <div className=" ">
                              <a
                                className="cursor-pointer small-text5"
                                onClick={() => handelOnclickCaseStudies(ele)}
                              >
                                READ MORE
                              </a>
                              {/* <ArrowRight className="ap-read-more-icon" /> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="loader-div ">
                        <div className="loader text-center">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {articalDiv && (
        <>
         

          <div className="ap-ar-cards-container pt-4">
            <div className="row  pt-2 px-5 my-2">
              <div className="col-md-6">
                <div className="">
                  <div className="mv-news-items ">
                
                  <img src={news1} className="image w-100" />

                
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">Realty </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Dec 05, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Gujarat, Karnataka & Haryana are Top 3 Fastest Growing
                        Indian States
                      </h5>
                      <p className="theme-grey-text small-text pb-0">
                        Gujarat is the fastest-growing state for the last nine
                        years (from FY12 to FY21), according to the latest data
                        released by RBI. Gujarat's Gross State Domestic Product
                        (GSDP) at the constant price has increased at compounded
                        annual growth rate (CAGR) of 8.2 percent.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://www.rprealtyplus.com/news-views/gujarat-karnataka-haryana-are-top-3-fastest-growing-indian-states-108636.html"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
               
                  <div className="mv-news-items ">
            
                    <img src={news2} className="image w-100" />
              
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">
                        The Economic Times
                      </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Nov 27, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Blackstone acquires warehousing assets near Delhi for Rs
                        700cr
                      </h5>
                      <p className="theme-grey-text small-text pb-0">
                        The asset is a mix of operational assets and strategic
                        land parcels for future development. About 1.5 million
                        sq. ft of it is fully leased and operational.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://www.indiatoday.in/business/story/co-working-spaces-commercial-realty-s-sunrise-segment-1939736-2022-04-20"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  pt-5 px-5 ">
              <div className="col-md-6">
                <div className="">
                  <div className="mv-news-items ">
              
                    <img src={news3} className="image w-100" />
          
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">Realty </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Oct 28, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Blackstone-backed Nexus files for $500 million IPO in
                        India's 1st retail REIT public offer
                      </h5>
                      <p className="theme-grey-text small-text pb-0">
                        As per the sources, Nexus Select Trust has on Thursday
                        filed the Draft Red Herring Prospectus (DRHP) with the
                        Securities and Exchange Board of India (Sebi) and is
                        looking to hit the capital market with India's first
                        retail REIT (Real Estate Investment Trust) public issue
                        in the first half of the 2023 calendar year.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://economictimes.indiatimes.com/industry/services/property-/-cstruction/foreign-funds-raise-bets-on-retail-realty-amid-higher-rental-incomes/articleshow/95135090.cms?from=mdr"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <div className="mv-news-items ">
            
                    <img src={news4} className="image w-100" />
             
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">
                        The Economic Times
                      </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Nov 18, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Yotta Infra to invest Rs 39,000 crore to expand
                        operations
                      </h5>
                      <br />
                      <p className="theme-grey-text small-text pb-0">
                        The first of six data centre buildings in the Yotta
                        Greater Noida Data Center Park, Yotta D1, has been set
                        up with an investment of around Rs 1,500 crore. It was
                        built and made operational within 20 months.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://retail.economictimes.indiatimes.com/news/food-entertainment/entertainment/blackstone-backed-nexus-files-for-500-million-ipo-in-indias-1st-retail-reit-public-offer/95607803"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  pt-5 px-5 ">
              <div className="col-md-6">
                <div className="">
                  <div className="mv-news-items ">

                    <img src={news5} className="image w-100" />
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">Realty </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Nov 01, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Brands and malls get ready for the wedding splurge
                      </h5>
                      <p className="theme-grey-text small-text pb-0">
                        While the wedding season accounts for around 15-20% for
                        the overall clothing industry sales, there are several
                        discretionary categories where it is crucial for their
                        survival. For instance, weddings constitute around 60%
                        of jewellery sales and for cosmetics companies, it is
                        the most crucial period.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://economictimes.indiatimes.com/industry/services/retail/brands-and-malls-get-ready-for-the-wedding-splurge/articleshow/94746759.cms"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="">
                  <div className="mv-news-items ">
             

                    <img src={news6} className="image w-100" />
       
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">
                        The Economic Times
                      </p>{" "}
                      <p className="theme-grey-text small-text ap-desc">
                        Oct 09, 2022
                      </p>
                      <h5 className="newsroom-second-section-text2 articalptag">
                        Google Leases 4.64 Lakh SqFt Space at Adani Data Centre
                        in Noida
                      </h5>
                      <br />
                      <p className="theme-grey-text small-text pb-0">
                        Adani Enterprises has given on lease 4.64 lakh sq ft of
                        space at its data centre in Noida to Raiden Infotech, an
                        entity of Google, for Rs 11 crore monthly rent.
                      </p>
                      <div className="cursor-pointer mt-5">
                        <a
                          className="small-text "
                          href="https://economictimes.indiatimes.com/industry/services/property-/-cstruction/yotta-infra-to-invest-rs-39000-crore-to-expand-operations/articleshow/95219745.cms?from=mdr"
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        <ArrowRight className="ap-read-more-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
</>
  );
};

export default CaseStudies;
