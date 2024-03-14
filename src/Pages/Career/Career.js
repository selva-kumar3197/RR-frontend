import React, { useState } from "react";
import "./Career.css";

import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { Helmet } from 'react-helmet';



import ApiService from "../../service/ApiService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from "react-lazy-load";

let loginsignupImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/CareerDetailsImage.png";
const Career = () => {
  const [lifeList, setLifeList] = useState([
    {
      img: "https://www.youtube.com/watch?v=vtDwqnjEwZg",
    },

  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [allData, setData] = useState();

  console.log(allData, "allData");

  const [loadstate, setloadstate] = useState(false);

  useEffect(() => {
    // Aos.init();
    RewardsList();
  }, []);

  const [articals, setArticals] = useState([]);

  const RewardsList = async () => {
    setloadstate(true);
    const data = await ApiService.getData("/category/career");
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

  const OnclickApplyJob = (ele) => {
    navigate("/ApplyJob", {
      state: {
        ele,
      },
    });
  };

  console.log(articals, "articals");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  var settings = {
    dots: false,

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnPlay: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnHover: true,
          pauseOnPlay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          pauseOnHover: true,
          pauseOnPlay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true,
          pauseOnPlay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {


          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
          pauseOnPlay: true,
          mobilePauseOnTouch: true, // workaround for mobile devices
        },
      },
    ],
  };



  const handleVideoPlayback = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log("show");
  };

  const buttonStyle = {
    border: "unset",
    backgroundColor: "#221D35",
    color: "#FFF",
    fontSize: "16px",
    padding: "10px 40px",
    marginTop: "2em",
  };
  // const [loadstate, setloadstate] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    number: "",
    exprince: "",
    resume: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    number: "",
    exprince: "",
    resume: "",
  });

  const handleOnChange = (e) => {
    const p = { ...formFields };
    p[e.target.name] = e.target.value;
    setFormFields(p);

    setFormError({
      ...formError,
      [e.target.name]: null,
    });
  };
  const handleValidation = () => {
    // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { name, email, number, exprince, resume } = formFields;
    if (!name) {
      newErros.name = "Please Enter Full Name";
    } else if (name && !regText.test(name)) {
      newErros.name = "Full Name should be text";
    } else if (name && name.length > 50) {
      newErros.name = "name should be below 50 charecters";
    }

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    if (!number) {
      newErros.number = "Please Enter number";
    } else if (number && number.length > 10) {
      newErros.number = "Number should be below 10 charecters";
    } else if (number && number.length < 10) {
      newErros.number = "Number should be  10 charecters";
    }

    if (!exprince) {
      newErros.exprince = "Please enter exprince";
    } else if (exprince && exprince.length > 30) {
      newErros.exprince = "exprince should be below 30 charecters";
    }

    if (!resume) {
      newErros.resume = "Please Submit Resume";
    }

    return newErros;
  };
  const handelSubmit = async (eee) => {
    const handleValidationObject = handleValidation();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      try {
        const payload = {
          name: formFields.name,
          email: formFields.email,
          contact_no: formFields.number,
          experience: formFields.exprince,
          image: formFields.resume,
          job_id: allData?.ele?.id,
          category: "applyjob",
        };
        console.log(payload, "payload Data ==>");

        setloadstate(true);
        const loginApi = await ApiService.postData("/applyjobs", payload);
        setloadstate(false);
        console.log(loginApi, "Login Data ==>");

        window.location.reload();

        if (loginApi.error == false) {
          toast.success("Your application has been submitted successfully");
          const arr = { ...formFields };
          arr.name = "";
          arr.email = "";
          arr.number = "";
          arr.exprince = "";
          setFormFields(arr);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        } else {
          toast.error("loginApi.error ");
        }
      } catch (error) {
        toast.error(error.message, "Please Fill Up All Fields");
      }
    }
  };



  return (
    <>
      <Helmet>
        <title>Join Us: Career Opportunities in the Real Estate Industry


        </title>
        <meta name="description" content="Explore exciting career opportunities with Realistic Realtors, a leading company in the real estate industry. Join our team of professionals today!


" />
      </Helmet>
      <h2 className="medium-heading1012 ap-head shadow-sm"> Careers</h2>
      <div className="career-conta">



        <div
          className="ssp-banner-container1"
          style={{
            paddingTop: "100px",
            marginBottom: "60px",
          }}
        >
          <div className="ssp-banner-bg-container2-career">
            <div className="ssp-banner-text-container">
              <h1 className="medium-heading ssp-banner-heading text-white">
                Explore Opportunities
              </h1>
              <p className="small-text ssp-banner-sub-text text-white">
                Explore career opportunities.
              </p>
            </div>
          </div>
        </div>
        <h2 className="newsroom-title mt-0 pt-0 mb-5   w-100 text-center">
          All Career Openings
        </h2>
        <div className="row justify-content-center  align-items-center ">
          {articals.map((ele) => (
            <div className="col-md-4 ml-3  d-flex justify-content-center  ">
              <div className="newJobForm mb-5">
                <div>
                  <h3 className="newJobForm_h1">{ele.title}</h3>
                </div>
                <div>
                  <p className="newJobForm_p">
                    Qualification -{" "}
                    <span className="newJobForm_span"> {ele.qualification}</span>
                  </p>
                  <p className="newJobForm_p">
                    Experience -{" "}
                    <span className="newJobForm_span">{ele.exp}</span>
                  </p>
                  <p className="newJobForm_p">
                    Location -{" "}
                    <span className="newJobForm_span">{ele.job_location}</span>
                  </p>
                </div>
                <button
                  onClick={() => OnclickApplyJob(ele)}
                  className="newJobForm_button "
                  style={{
                    color: "white",
                  }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <p className="medium-heading fs-1">Anyone can apply</p>
            <p className="ac-small-heading">
              We believe opportunities are created, not found.
              <br /> If you can’t see a suitable job for your profile, don’t fret.
              Submit Your Profile. we will consider you
            </p>
            <div
              className="footer-button mobile-footer cursor-pointer text-center m-auto"
            >
              <span className="footer-button-text " onClick={handleShow}>
                Apply now
              </span>
            </div>
          </div>
        </div>

        <div className="carrerslider ">
          <p className="newsroom-title  py-3 w-100 text-center mb-md-5">
            Life @ Realistic Realtors
          </p>
          <div className=" slider  ">
            <Slider {...settings} className="pt-0 careerslider">
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded">
                    <iframe

                      src="https://www.youtube.com/embed/nO-IB2jYN7k"
                      title="YouTube video player"
                      className=" slider-content "
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded ">
                    <iframe

                      src="https://www.youtube.com/embed/LkArHWuhwbk"
                      title="YouTube video player"
                      frameborder="0"
                      className=" slider-content "
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11  rounded">
                    <iframe

                      src="https://www.youtube.com/embed/ed47tW6Wch4"
                      title="YouTube video player"
                      frameborder="0"
                      className=" slider-content "
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded ">
                    <iframe

                      src="https://www.youtube.com/embed/vtDwqnjEwZg?mute=1"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>

                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded  ">
                    <iframe

                      src="https://www.youtube.com/embed/P0I3bV5G6zs"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded ">
                    <iframe

                      src="https://www.youtube.com/embed/A2EGuXTzvsw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded ">
                    <iframe

                      src="https://www.youtube.com/embed/RIRtSCbi3q4"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded ">
                    <iframe

                      src="https://www.youtube.com/embed/e-vPLJrLj-U"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <div className="row  ">
                  <div className="col-md-11 rounded  ">
                    <iframe
                      width="300"
                      height="300"
                      src="https://www.youtube.com/embed/yHlERshFXHI"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      className=" slider-content "
                      onPlay={handleVideoPlayback}
                      onEnded={handleVideoEnd}
                    ></iframe>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        {/* Model */}
        <Modal
          show={show}
          onHide={handleClose}
          dialogClassName="modal-width-manager"
          centered
          size="lg"
        >
          <Modal.Body>
            {/* {allData ? allData.map((ele) => console.log(ele, "mapdata")) : ""} */}
            <div className="ls-modal-container">
              <div className="ls-m-l-c">
                <LazyLoad>
                  <img
                    alt="signup login image"
                    className="ls-image-job"
                    src={loginsignupImage}
                  />
                </LazyLoad>

              </div>
              <div className="ls-m-r-c listYourReqBg">
                <span className="ls-close-container" onClick={handleClose}>
                  X
                </span>
                <div className="px-5 py-5">
                  <div className="cup-f-tf-container">
                    <label className="small-text theme-grey-text">
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      className="cup-f-tf"
                      onChange={handleOnChange}
                      name="name"
                      value={formFields.name}
                    />
                    <p className="text-danger">{formError.name}</p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar mt-0">
                    <label className="small-text theme-grey-text"> Email</label>
                    <input
                      type="text"
                      className="cup-f-tf"
                      onChange={handleOnChange}
                      name="email"
                      value={formFields.email}
                    />
                    <p className="text-danger">{formError.email}</p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                    <label className="small-text theme-grey-text">
                      {" "}
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="cup-f-tf"
                      onChange={handleOnChange}
                      name="number"
                      value={formFields.number}
                    />

                    <p className="text-danger">{formError.number}</p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                    <label className="small-text theme-grey-text">
                      Experience Level
                    </label>
                    <input
                      type="text"
                      className="cup-f-tf"
                      onChange={handleOnChange}
                      name="exprince"
                      value={formFields.exprince}
                    />

                    <p className="text-danger">{formError.exprince}</p>
                  </div>

                  <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                    <label className="small-text theme-grey-text">Resume</label>
                    <input
                      type="file"
                      className="cup-f-tf"
                      onChange={handleOnChange}
                      name="resume"
                      value={formFields.resume}
                    />
                    <p className="text-danger">{formError.resume}</p>
                  </div>

                  <button
                    style={buttonStyle}
                    className="button-componet-container"
                    onClick={handelSubmit}
                  >
                    {loadstate ? (
                      <Spinner animation="border" variant="Primary" size="sm" />
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>

  );
};

export default Career;
