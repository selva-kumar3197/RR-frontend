import React from "react";
import "./ThreeCardsContainer.css";

import ArticleCard from "../ArticleCard/ArticleCard";
import { useState } from "react";
import { useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import LazyLoad from "react-lazy-load";

const ThreeCardsContainer = (props) => {
  const [caseStudies, setCaseStudies] = useState([]);

  const [loadstate, setloadstate] = useState(false);

  useEffect(() => {
    RewardsList();
  }, []);

  const [articals, setArticals] = useState([]);

  const RewardsList = async () => {
    setloadstate(true);

    const data = await ApiService.getData("/category/articles");
    const data1 = await ApiService.getData("/category/casestudy");
    setloadstate(false);
    setCaseStudies(data1.slice(3));
    setArticals(data);
  };
  const letestArtical = articals ? articals.slice(-1) : "";
  const letestCase = caseStudies ? caseStudies.slice(-1) : "";
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
      <div className="article-cards-grid-cotnainer-parent">
        {props.heading ? (
          <div className="article-cards-heading-container">
            <h2 className="article-cards-heading medium-heading position">
              {props.heading}
            </h2>
            <a
              className="article-cards-read-all small-text99 mt-md-3   "
              href="/casestudy"
            >
              Read all
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="">
          <div className=" py-4">
            <div className="article-cards-grid-cotnainer-parent">
              <div className="article-cards-grid-cotnainer1">
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
                      [...caseStudies].map((ele) => (
                        <div>
                          <div className="article-card-container aricaldiv">
                            <div className="artical-card-img-div">
                         
                            <img
                                src={ele?.image}
                                alt="card image"
                                className="article-card-image"
                              />
                     
                           
                            </div>
                            <p className="article-card-heading">
                              {ele.title.slice(0, 30)}....
                            </p>
                            <p
                              className="small-text5 theme-grey-text article-card-content aricaldiv"
                              dangerouslySetInnerHTML={{
                                __html: ele?.description.slice(0, 180),
                              }}
                            >
                              {/* {ele.description.slice(0, 150)}.... */}
                            </p>
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
                    ).reverse() : (
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
        </div>
      </div>
    </>
  );
};

export default ThreeCardsContainer;
