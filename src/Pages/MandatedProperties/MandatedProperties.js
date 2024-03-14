import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { toast } from "react-toastify";
import Select from 'react-select';
import Button from "../../Components/Button/Button";

let Mobile_banner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Services_mobile/find-property.jpg";

function MandatedProperties() {
  const [propertilist, SetPropertilist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPropertiList();
  }, []);

  useEffect(() => {
    filterListFuction();
  }, []);

  const getPropertiList = async () => {
    const data = await axios.get(
      `https://rr-api.realisticrealtors.com/api/rr/category/properties`
    );
    SetPropertilist(data.data);
  };

  const clickProperti = (ele) => {
    navigate("/mandated-properties-internal", {
      state: {
        ele,
      },
    });
  };

  const [locationList, setLocationList] = useState([]);
  const [spaceList, setSpaceList] = useState([]);
  const [labelList, setLabelList] = useState([]);

  const locationpay = {
    status: "location",
  };
  const typeSpacepay = {
    status: "property_type",
  };
  const typeLabel = {
    status: "label",
  };

  const filterListFuction = async () => {
    const data = await axios.post(
      "https://rr-api.realisticrealtors.com/api/rr/property_filter_list",
      locationpay
    );

    const data1 = await axios.post(
      "https://rr-api.realisticrealtors.com/api/rr/property_filter_list",
      typeSpacepay
    );

    const data3 = await axios.post(
      "https://rr-api.realisticrealtors.com/api/rr/property_filter_list",
      typeLabel
    );

    const uniqueIds = [];

    const unique = data.data.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.location);

      if (!isDuplicate) {
        uniqueIds.push(element.location);
        return true;
      }

      return false;
    });

    const uniqueSpace = data1.data.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.property_type);

      if (!isDuplicate) {
        uniqueIds.push(element.property_type);
        return true;
      }

      return false;
    });


    console.log(uniqueSpace)

    const uniqueLabel = data3.data.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.property_type);

      if (!isDuplicate) {
        uniqueIds.push(element.property_type);
        return true;
      }

      return false;
    });

    setLocationList(unique);
    setSpaceList(uniqueSpace);
    setLabelList(uniqueLabel);
  };

  const [selectCity, setSelectCity] = useState();
  const [selectType, setSelectType] = useState();
  const [selectLabel, setSelectLabel] = useState();
  const [loading, setLoading] = useState(false);

  const filterCityOnChage = (selectedOption) => {
    setSelectCity(selectedOption);
  };

  const filterTypeOnChage = (selectedOption) => {
    setSelectType(selectedOption);
  };

  const filterLabelOnChage = (selectedOption) => {
    setSelectLabel(selectedOption);
  };

  const updateFilter = async () => {
    setLoading(true);
    propertilist.splice(0);
    const cityapayload = {
      location: selectCity?.value,
      property_type: selectType?.value,
      label: selectLabel?.value,
    };
    const data = await axios.post(
      "https://rr-api.realisticrealtors.com/api/rr/property_filter",
      cityapayload
    );

    if (data.status === 200) {
      setLoading(false);
      if (data.data.length === 0) {
        toast.error("ZERO RECORDS COMING");
      }
      SetPropertilist(data.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Explore the Listings Diverse Array of Properties Available</title>
        <meta name="description" content="Browse through a wide range of real estate listings offered by Realistic Realtors, featuring diverse and appealing properties for every buyer's needs." />
      </Helmet>
      <p className="medium-heading1012 ap-head shadow-sm">Find Properties</p>
      <div className="maindivproperties">
        <div className="mobiledivimg">
          <div className="mandated-section-one-image">
            <div className="ssp-banner-text-container">
              <p className="medium-heading101 ssp-banner-heading text-md-white mandated-color">
                Browse from a list of exclusive properties
              </p>
            </div>
          </div>
          <img src={Mobile_banner} className="mandated-image" alt="mandated-image" />
        </div>
        <div className="mandated-section-two sectiontwolistproperty">
          <p className="medium-heading ssp-banner-heading text-md-white  mandekstop ">
            Browse from a list of exclusive properties
          </p>
          <div className="mandated-section-two-sub-section-one">
            <div className="row filter-mandated">
              <Form.Group className="col-sm text-start">
                <p className="dropdown-one">Select a city</p>
                <Select
                  options={locationList.map((ele) => ({
                    value: ele.location,
                    label: ele.location,
                  }))}
                  onChange={filterCityOnChage}
                  placeholder="Select a city"
                  styles={{ control: (provided) => ({ ...provided, padding: "10px" }) }}
                />
              </Form.Group>
              <Form.Group className="col-sm text-start">
                <p className="dropdown-one">Type of Space</p>
                <Select
                  options={spaceList.map((ele) => ({
                    value: ele.property_type,
                    label: ele.property_type,
                  }))}
                  onChange={filterTypeOnChage}
                  placeholder="Type of Space"
                  styles={{ control: (provided) => ({ ...provided, padding: "10px" }) }}
                />
              </Form.Group>
              <Form.Group className="col-sm text-start">
                <p className="dropdown-one">Available For</p>
                <Select
                  options={labelList.map((ele) => ({
                    value: ele.label,
                    label: ele.label,
                  }))}
                  onChange={filterLabelOnChage}
                  placeholder="Available For"
                  styles={{ control: (provided) => ({ ...provided, padding: "10px" }) }}
                />
              </Form.Group>
              <div className="col-sm text-end">
                <div className="button-div">
                  <Button
                    onClick={updateFilter}
                    className={"dark-bg-white-color art-home-button"}
                    title={"Search"}
                  />
                </div>
              </div>
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border mt-2 text-[#a891f5]" role="status">

                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="row justify-content-between mandated-section-two-sub-section-two ">
            {propertilist.length > 0 ? (
              propertilist.map((ele, index) => (
                <div className="col-md-6 my-3" key={index}>
                  <div className="first-div">
                    <div className="second-div">
                      <img
                        onClick={() => clickProperti(ele)}
                        src={ele.image}
                        alt="card image"
                        className="mandated-article-image"
                      />
                      <div className="mandated-article-footer py-2">
                        <div style={{ display: "flex" }}>
                          <div style={{ marginTop: "30px", marginLeft: "5%" }}>
                            <p className="mandated-article-footer-box1" onClick={() => clickProperti(ele)}>
                              {ele?.label}
                            </p>
                          </div>
                          <div style={{ marginTop: "30px", marginLeft: "10px" }}>
                            <p className="mandated-article-footer-box1" onClick={() => clickProperti(ele)}>
                              {ele?.property_type}
                            </p>
                          </div>
                        </div>
                        <p className="mandated-article-footer-title" style={{ marginLeft: "5%" }}>
                          {ele.location}
                        </p>
                        <p className="mandated-article-footer-title1 mandated-article-head">
                          {ele.title}
                        </p>
                        <p className="mandated-article-footer-title2 mandated-article-title2">
                          Size: {ele.size} SqFt
                        </p>
                        <div className="enquerynowproperty">
                          <a className="mandated-article-footer-title3 text-decoration-none cursor-pointer" onClick={() => clickProperti(ele)}>
                            <span className="">Enquire now</span>
                            <span className="">
                              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                              </svg>
                            </span>
                            <p className="mandated-article-line"></p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              ""
            )}
          </div>

          <div className="article-home-button text-center my-5">
            <p className="h-sec-4-top-text fs-2">
              If you haven't found what you are looking for
            </p>
            <a href="/form">
              <h1
                className={"dark-bg-white-color art-home-button"}
              >
                List your requirement
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MandatedProperties;
