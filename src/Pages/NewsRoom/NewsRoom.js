import React from "react";
import "../../Pages/NewsRoom/NewsRoom.css";

import { useEffect } from "react";
import { useState } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";

function NewsRoom() {
  const [loadstate, setloadstate] = useState(false);

  useEffect(() => {
    // Aos.init();
    RewardsList();
  }, []);

  const [articals, setArticals] = useState([]);

  const RewardsList = async () => {
    setloadstate(true);
    const data = await ApiService.getData("/category/pr_news");
    setloadstate(false);

    setArticals(data);
  };
  const letestArtical = articals ? articals.slice(-1) : "";
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

  console.log(articals, "articals");

  return (
    <>
      {/* <h1 className="medium-heading10 d-flex jsutify-content-center pt-0 px-2 ">Media Coverage</h1> */}
      <h1 className="medium-heading1012 ap-head shadow-sm"> Media Coverage</h1>
      <div className="maindivnews ">
        <div className="rewsroom-parent-div mt-0 pt-3 mt-5">

          <div className="row ">
            {articals
              ? articals.map((ele) => (
                <div className="col-md-6 my-3">
                  <div className="mv-news-items  ">
                    <div className="">
                      <img src={ele?.image} className="image" />
                    </div>
                    <div className="newsroom-second-section-content">
                      <p className="newsroom-second-section-text1">
                        {ele.name}
                      </p>{" "}
                      <p className="theme-grey-text small-text5 ">
                        {ele.report_date}
                      </p>
                      <h5 className="newsroom-second-section-text2 ">
                        {ele.title}
                      </h5>
                      <p
                        className="theme-grey-text small-text5 pb-0 p-0 m-0 my-3 "
                      // dangerouslySetInnerHTML={{
                      //   __html: ele?.description.slice(0, 48),
                      // }}
                      >
                        {ele.description.slice(0, 100)}...
                      </p>
                      <div className="cursor-pointer  ">
                        <a
                          className="small-text5 "
                          href={ele.link}
                          target="_blank"
                        >
                          READ MORE
                        </a>
                        {/* <ArrowRight className="ap-read-more-icon" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              )).reverse()
              : ""}
          </div>

          {/* <div className="row mt-5 pt-3">
            <div className="col-md-6">
              <div className="">
                <div className="mv-news-items ">
                  <img src={news18} className="image" />
                  <div className="newsroom-second-section-content">
                    <p className="newsroom-second-section-text1">99 Acres</p>{" "}
                    <p className="theme-grey-text small-text ap-desc">
                      Feb 20, 2022
                    </p>
                    <h5 className="newsroom-second-section-text2">
                      Union Budget 2022-23: A budget for the long term
                    </h5>
                    <div className="cursor-pointer ">
                      <a
                        className="small-text "
                        href="https://www.99acres.com/articles/union-budget-a-budget-for-the-long-term.html"
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
          </div> */}
        </div>
      </div>
    </>
  );
}

export default NewsRoom;
