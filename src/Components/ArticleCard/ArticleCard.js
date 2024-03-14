import React, { useEffect, useState } from "react";
import "./ArticleCard.css";

import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import LazyLoad from "react-lazy-load";

const ArticleCard = () => {
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
    setCaseStudies(data1);
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
      <div className="">
        <div className="">
          <div className="row">
            <>
              {caseStudies ? (
                [...caseStudies].reverse().map((ele) => (
                  <div>
                    <div className="col-md-3">
                      <div className="artical-card-img-div">
                      <LazyLoad>
                      <img
                          src={ele?.image}
                          alt="card image"
                          className="article-card-image"
                        />
                      </LazyLoad>

                    
                      </div>
                      {/* <p className="small-text theme-grey-text pt-3 articalhover">
                        June 24, 2022 • 5 min read • Research
                      </p> */}
                      <p className="article-card-heading">
                        {ele.title.slice(0, 30)}....
                      </p>
                      <p
                        className="small-text theme-grey-text article-card-content aricaldiv"
                        dangerouslySetInnerHTML={{
                          __html: ele?.description.slice(0, 190),
                        }}
                      >
                        {/* {ele.description.slice(0, 150)}.... */}
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
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ArticleCard;
