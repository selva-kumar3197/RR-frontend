import React from "react";
import "./ArticleDetails.css";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";


const CaseStudiesDetails = () => {
  const [loadstate, setloadstate] = useState(false);
  const [articals, setArticals] = useState([]);

  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [name, setName] = useState();
  const [imgBlog, setImgBlog] = useState();
  const [description, setDescription] = useState();

  const { state } = useLocation();
  console.log(state, "state ==>");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  useEffect(() => {
    setData(state);
    setTitle(state?.ele?.title);
    setImgBlog(state?.ele?.image);
    setDescription(state?.ele?.description);
    setName(state?.ele?.name);
    // RewardsList();
  });

  //   const RewardsList = async () => {
  //     const data = await ApiService.getData("/category/articles");
  //     console.log(data, "data ==>");

  //     setArticals(data);
  //   };
  const navigate = useNavigate();

  const handelOnclickArtical = (ele) => {
    navigate("/article-details", {
      state: {
        ele,
      },
    });
  };
  return (
    <div className="page-noice-bg a-d-p-container">
      <div className="a-d-p-banner-contianer">
        <div className="a-d-p-banner-left a-d-desktop">
          <h2 className="medium-heading a-d-p-heading">{title}</h2>
          <h2 className="medium-heading a-d-p-heading">{name}</h2>
        </div>
        <div className="a-d-p-banner-left a-d-mobile">
          <h3 className="medium-heading a-d-p-heading">{title}</h3>
          <h1 className="medium-heading a-d-p-heading a-d-head">{name}</h1>
        </div>
        <div className="a-d-p-banner-right">
        <LazyLoad>
          <img src={imgBlog} className="a-d-p-image" />
        </LazyLoad>
        </div>
      </div>

      <div className="a-d-p-details-container1 small-text6 small-text-5 ">
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
        {/* <p>
          The evolving real estate sector of India is re-establishing its
          foundation in the new normal of today. Supporting and nurturing this
          road to recovery are the various government initiatives that are
          predicted to provide the much needed impetus.
        </p> */}
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
                {articals ? (
                  articals.map((ele) => (
                    <div>
                      <div className="article-card-container aricaldiv">
                        <div className="artical-card-img-div">
                        <LazyLoad>
                        <img
                            src={ele.image}
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
                            onClick={() => handelOnclickArtical(ele)}
                            target="_blank"
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
    </div>
  );
};

export default CaseStudiesDetails;
