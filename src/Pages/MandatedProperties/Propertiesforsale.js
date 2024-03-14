import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import MandatedArticleCard from "../../Components/MandatedArticleCard/MandatedArticleCard";
import MandatedPropertiesArticle from "../../Components/MandatedPropertiesArticle/MandatedPropertiesArticle";
import "../../Pages/MandatedProperties/MandatedProperties.css";

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



import ApiService from "../../service/ApiService";
let Mandated = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Mandated.png";
let FilterIcon = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/FilterIcon.png";

function Propertiesforsale() {
  const [propertilist, SetPropertilist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPropertiList();
    filterlist();
  }, [propertilist]);

  const getPropertiList = async () => {
    const data = await axios.get(
      `https://rr-api.realisticrealtors.com/api/rr/category/properties`
    );

    SetPropertilist(data.data);
  };

  console.log(propertilist, "propertilist");
  const clickProperti = (ele) => {
    navigate("/mandated-properties-internal", {
      state: {
        ele,
      },
    });
  };

  let countLease = 0;
  const filterlist = () => {
    // const data = propertilist.map((ele) => ele.label == "sale");
    // console.log(data, "propertilistpropertilist");
    propertilist
      .filter((element) => element.label == "Sale")
      .map((ele) => countLease++);
  };

  filterlist();
  console.log(countLease, "countLeasecountLease ==>");

  const [filterList, setFilterList] = useState([]);
  const [listStatus, SetListStatus] = useState({
    status: "location",
  });

  const filterListFuction = async () => {
    const data = await ApiService.getData("/property_filter_list", {
      status: listStatus.status,
    });
    console.log(data, "locationlocationlocation");
  };

  return (
    <>
      <div className="maindivproperties">
        <div className="">
          <div className="mandated-section-one-image"></div>
          <img src={Mandated} className="mandated-image" alt="mandated-image" />
        </div>
        <div className="mandated-section-two sectiontwolistproperty">
          <div className="mandated-section-two-sub-section-one">
            <h1 className="newsroom-title mt-0 pt-0 w-100">
              Properties for Sale
            </h1>
          </div>
          <p className="mandated-section-two-sub-section-one-text desktop-sec-text">
            Showing {countLease} properties
          </p>
          <div className="filter-content">
            <div>
              <p className="mandated-page-second-text mobile-sec-text">
                Showing ‘78 results’
              </p>
            </div>
            <div>
              <img className="mobile-sec-text" src={FilterIcon} />
            </div>
          </div>
          <div className="row justify-content-between mandated-section-two-sub-section-two ">
            {propertilist ? (
              propertilist
                .filter((element) => element.label == "Sale")
                .map((ele) => (
                  <>
                    <div className="col-md-6 my-3">
                      <div className="first-div">
                        <div className="second-div">
                          <img
                            src={ele.image}
                            alt="card image"
                            className="mandated-article-image"
                          />
                          <div className="mandated-article-footer py-3">
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ marginTop: "30px", marginLeft: "5%" }}
                              >
                                <p
                                  className="mandated-article-footer-box1"
                                  onClick={() => clickProperti(ele)}
                                >
                                  {ele?.label}
                                </p>
                              </div>
                              <div
                                style={{
                                  marginTop: "30px",
                                  marginLeft: "10px",
                                }}
                              >
                                <p
                                  className="mandated-article-footer-box1"
                                  onClick={() => clickProperti(ele)}
                                >
                                  {ele?.status}
                                </p>
                              </div>
                            </div>
                            <p
                              className="mandated-article-footer-title"
                              style={{ marginLeft: "5%" }}
                            >
                              {ele.location}
                            </p>
                            <p className="mandated-article-footer-title1 mandated-article-head">
                              {ele.title}
                            </p>
                            <p className="mandated-article-footer-title2 mandated-article-title2">
                              Size: {ele.size} SqFt
                            </p>
                            <div className="enquerynowproperty ">
                              <a
                                // href="/mandated-properties-internal"
                                className="mandated-article-footer-title3 text-decoration-none cursor-pointer"
                                onClick={() => clickProperti(ele)}
                              >
                                <span className="">Enquire now</span>
                                <span className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="20"
                                    fill="currentColor"
                                    class="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                    />
                                  </svg>
                                </span>
                                <p className="mandated-article-line"></p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))
            ) : (
              <h2>Loading</h2>
            )}
            {propertilist.length == 0 ? (
              <p className="fs-2">Loading.............</p>
            ) : (
              ""
            )}
          </div>
          {/* <div className="row justify-content-between mandated-section-two-sub-section-tree">
          <div className="col-md-6">
            <MandatedPropertiesArticle />
          </div>
          <div className="col-md-6">
            <MandatedPropertiesArticle />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Propertiesforsale;
