import React, { useState } from "react";
import "./Articles.css";

import { ArrowRight } from "react-bootstrap-icons";



import Aos from "aos";
import { useEffect } from "react";
import ApiService from "../../service/ApiService";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
let articlesabnner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/market-trends.jpg";

const Articles = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  const [loadstate, setloadstate] = useState(false);

  useEffect(() => {
    Aos.init();
    RewardsList();
    PrNewsApi();
  }, []);

  const [prNews, setPrNews] = useState([]);
  const PrNewsApi = async () => {
    const data = await ApiService.getData("/category/market_trends");
    setPrNews(data);
  };

  console.log(prNews, "market_trends");

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
  console.log(letestCase, "letestCase");
  console.log(articals, "letestArtical");
  const [activeWindow, setActiveWindow] = useState(1);
  const [articalDiv, setArticalDiv] = useState(true);
  const [caseDiv, setCaseDiv] = useState(false);
  const toggleCase = () => {
    setArticalDiv(false);
    setCaseDiv(true);
    setActiveWindow(2);
  };
  const toggleArtical = () => {
    setArticalDiv(true);
    setCaseDiv(false);
    setActiveWindow(1);
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
      <h2 className="medium-heading1012 ap-head shadow-sm"> Market Trends</h2>
      <div className="page-noice-bg articles-contianer">
        <div className="page-noice-bg ap-banner-contianer">
          <LazyLoad>
          <img
            src={articlesabnner}
            alt="banner image"
            className="ap-banner-image"
          />
            </LazyLoad>
            <LazyLoad>
            <img
            src={articlesabnner}
            alt="banner image"
            className="ap-banner-image-mobile"
          />
            </LazyLoad>
      
        
        
        
        </div>

        {articalDiv && (
          <>
    

            <div className="ap-ar-cards-container pt-4">
              <div className="row pt-2 px-2 ">
                {prNews
                  ? prNews
                    .map((ele) => (
                      <div className="col-md-6 my-3">
                        <div className="">
                          <div className="mv-news-items ">
                          <LazyLoad>

                            <img src={ele.image} className="image" />
                          </LazyLoad>
                            <div className="newsroom-second-section-content">
                              <p className="newsroom-second-section-text1">{ele.name}</p>{" "}
                              <p className="theme-grey-text small-text5 ">{ele.report_date}</p>
                              <h5 className="newsroom-second-section-text2 articalptag">{ele.title}</h5>
                              <p
                                className="theme-grey-text small-text5 pb-0"
                            
                              >
                                {ele.description.slice(0, 100)}...
                              </p>
                              <div className="cursor-pointer mt-5">
                                <a className="small-text5 " href={ele.link} target="_blank">
                                  READ MORE
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                    .reverse()
                  : ""}
              </div>

            </div>
          </>
        )}
        {caseDiv && (
          <>
            <div className="ap-sec-2-container">
              <div className="ap-l-container">
                {letestCase
                  ? letestCase.map((ele) => (
                    <div className="ap-view-img-div">
                    <LazyLoad>
                    <img
                        src={ele?.image}
                        alt="view imaiew image"
                        className="ap-view-image "
                      />
                    </LazyLoad>
                   
                    </div>
                  ))
                  : ""}
              </div>
              <div className="ap-r-container">
                <p className="theme-voilet-text small-text ap-smalltext">
                  Featured Case Studies
                </p>
                {letestCase
                  ? letestCase.map((ele) => (
                    <>
                      <h1 className="medium-heading ap-view-heading mb-3">
                        {ele.title}
                      </h1>
                 
                      <p className="theme-grey-text small-text pb-0">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ele?.description.slice(0, 350),
                          }}
                        ></span>
                      </p>
                      <a
                        className="small-text cursor-pointer "
                        onClick={() => handelOnclickCaseStudies(ele)}
                      >
                        READ MORE
                      </a>
                      <ArrowRight className="ap-read-more-icon" />
                    </>
                  ))
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
                        caseStudies.map((ele) => (
                          <div>
                            <div className="article-card-container aricaldiv">
                              <div className="artical-card-img-div">
                              <LazyLoad>
                              <img
                                  src={ele?.image}
                                  alt="card image"
                                  className="article-card-image"
                                />
                              </LazyLoad>
                            
                              </div>
                          
                              <p className="article-card-heading">
                                {ele.title.slice(0, 30)}....
                              </p>
                              <p
                                className="small-text theme-grey-text article-card-content aricaldiv"
                                dangerouslySetInnerHTML={{
                                  __html: ele?.description.slice(0, 190),
                                }}
                              >
                              </p>
                              <div className=" ">
                                <a
                                  className="cursor-pointer small-text"
                                  onClick={() => handelOnclickCaseStudies(ele)}
                                >
                                  READ MORE
                                </a>
                                <ArrowRight className="ap-read-more-icon" />
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
      </div>
    </>

  );
};

export default Articles;
