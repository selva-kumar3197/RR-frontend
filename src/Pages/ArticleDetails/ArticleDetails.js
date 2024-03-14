import React from "react";
import "./ArticleDetails.css";


import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ArticleDetails = () => {
  const [loadstate, setloadstate] = useState(false);
  const [articals, setArticals] = useState([]);

  const [data, setData] = useState();
  const [title, setTitle] = useState();
  const [imgBlog, setImgBlog] = useState();
  const [description, setDescription] = useState();

  const { state } = useLocation();
  const { stateCase } = useLocation();
  console.log(state, "state ==>");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  useEffect(() => {
    setData(state);
    setTitle(state?.ele?.title);
    setImgBlog(state?.ele?.image);
    setDescription(state?.ele?.description);
    RewardsList();
  });
  const RewardsList = async () => {
    const data = await ApiService.getData("/category/articles");
    console.log(data, "data ==>");

    setArticals(data);
  };
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
      
        </div>
        <div className="a-d-p-banner-left a-d-mobile">
          {/* <Button className="a-d-p-button " title={"MARKET NEWS"} /> */}
          <h1 className="medium-heading a-d-p-heading a-d-head">
            Life sciences in Asia
            <br /> Pacific: A big booster for
            <br /> growth
          </h1>
          <p className="small-text a-d-desc">
            8 min read | 28/06/2022
            <br /> Written By
            <br /> Realistic Realtors
          </p>
        
        </div>
        <LazyLoad>
        <div className="a-d-p-banner-right">
          <img src={imgBlog} className="a-d-p-image" />
        </div>
        </LazyLoad>
      
      </div>

      <div className="a-d-p-details-container small-text">
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
     
      </div>

      
    </div>
  );
};

export default ArticleDetails;
