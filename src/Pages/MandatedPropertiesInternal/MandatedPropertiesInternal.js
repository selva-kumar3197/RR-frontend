import React, { useEffect, useState } from "react";
import "../../Pages/MandatedPropertiesInternal/MandatedPropertiesInternal.css";

import { useLocation } from "react-router-dom";
import ApiService from "../../service/ApiService";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Spinner } from "react-bootstrap";

function MandatedPropertiesInternal() {
  const [overview, setOverview] = React.useState("");
  const [data, setData] = useState();
  const [mainImg, setMainImg] = useState("");

  const handleChange = (event) => {
    setOverview(event.target.value);
  };

  const { state } = useLocation();
  const [userId, setUserId] = useState();

  useEffect(() => {
    setData(state);
    setMainImg(state?.ele?.image);

    // setUserId(JSON.parse(localStorage.getItem("userRR")));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  // console.log(data?.ele?.property_id, "datadatadata");

  // Start Contact form
  const [loadstate, setloadstate] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
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
    const regText = /^[A-Za-z\s]+$/; // Allow letters and spaces only
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErrors = {};
    const { name, email, number, message } = formFields;

    if (!name) {
      newErrors.name = "Please Enter Full Name";
    } else if (!regText.test(name)) {
      newErrors.name = "Full Name should contain only letters";
    } else if (name.length > 50) {
      newErrors.name = "Name should be below 50 characters";
    }

    if (!email) {
      newErrors.email = "Please Enter Email";
    } else if (!rangEmail.test(email)) {
      newErrors.email = "Please Enter Correct Email";
    }

    if (!number) {
      newErrors.number = "Please Enter number";
    } else if (number.length !== 10) {
      newErrors.number = "Number should be 10 characters";
    }

    if (!message) {
      newErrors.message = "Please enter Message";
    }

    return newErrors;
  };
  // console.log(userId._id, "userId");
  const handelSubmit = async (eee) => {
    const handleValidationObject = handleValidation();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      try {
        const idUser = JSON.parse(localStorage.getItem("userRR"));
        const payload = {
          userId: idUser?.userId,
          property_id: data?.ele?.property_id,
          name: formFields.name,
          email: formFields.email,
          contact_no: formFields.number,
          description: formFields.message,
          category: "enquiry",
        };
        setloadstate(true);
        const loginApi = await ApiService.postData(
          "/property_enquiry",
          payload
        );
        setloadstate(false);
        console.log(loginApi, "Login Data ==>");

        if (loginApi.error == false) {
          toast.success("Submit Successful");
          const arr = { ...formFields };
          arr.name = "";
          arr.email = "";
          arr.mobile_no = "";
          arr.description = "";
          setFormFields(arr);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        } else {
          toast.error("loginApi.error");
        }
      } catch (error) {
        toast.error(error.message, "Please Fill Up All Fields");
      }
    }
  };

  // End Contact form

  const handleClickScroll = (e) => {
    const element = document.getElementById("section-1");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const [imagesData, setImagesData] = useState();
  useEffect(() => {
    setImagesData(data?.ele);
  }, [imagesData]);

  return (
    <>
      <ToastContainer autoClose={2000} delay={1000} limit={1} />

      <div className="mandateddetailsdiv">
        <div className="row">
          <div className="col-md-0 mt-5">
            {" "}
            <div>
              {/* <p className="mandated-section-one-block1-overview">Overview </p>
              <p>Particulars </p>
              <p>Description</p>
              <p>Address</p>
              <p>Contact</p> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="mandated-section-one internal-dekstop">
              <div className="d-flexx">
                <div className="mobile-mandated-drop">
                  {/* <FormControl variant="standard" style={{ Width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Overview
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={overview}
                      onChange={handleChange}
                      label="Overview"
                    >
                      <MenuItem value=""> </MenuItem>
                      <MenuItem value={10}>Particulars</MenuItem>
                      <MenuItem value={20}>Description</MenuItem>
                      <MenuItem value={30}>Address</MenuItem>
                      <MenuItem value={40}>Contact</MenuItem>
                      <MenuItem value={50}>Custom</MenuItem>
                    </Select>
                  </FormControl> */}
                </div>
                <div className="d-flex row pb-5">
                  <div className="col-md-7 ">
                    {mainImg ? (
                      <img
                        className="w-100 h-100 img-details-properties"
                        src={mainImg}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-4 mandated-section-one-block3">
                    <h2 className="mandated-section-one-block3-text2">
                      {data?.ele?.title}
                    </h2>
                    <div className="flex mandated-button">
                      <div className="mandated-section-one-block3-text31">
                        <p className="mandated-section-one-block3-text3-1">
                          {data?.ele?.label}
                        </p>
                      </div>
                      <div
                        className="mandated-section-one-block3-text32"
                        style={{ marginLeft: "10px" }}
                      >
                        <p className="mandated-section-one-block3-text3-2">
                          {data?.ele?.status}
                        </p>
                      </div>
                    </div>
                    <p
                      className="mandated-section-one-block3-text4"
                      dangerouslySetInnerHTML={{
                        __html: data?.ele?.description,
                      }}
                    ></p>
                    <div></div>
                    <div
                      className="mandated-contact-flag mt-5 "
                      onClick={handleClickScroll}
                    >
                      <div className="d-flex mt-5 ">
                        <div className="mandated-section-one-block3-button ">
                          <p className="mandated-section-one-block3-button-title cursor-pointer">
                            Contact Us
                          </p>
                        </div>
                        <div>&nbsp;</div>
                        <div className="mandated-section-one-block3-button  ">
                          <p className="mandated-section-one-block3-button-title cursor-pointer">
                            Video Tour
                          </p>
                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="row gap-2 mt-2">
                    <div className="d-flex justify-content-ceter gap-2">
                      {data?.ele?.image !== "undefined" && (
                        <div className="col-md-1" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image)}>
                          <img src={data?.ele?.image} className="w-100 h-100 multiple-img" />
                        </div>
                      )}

                      {data?.ele?.image1 !== "undefined" && (
                        <div className="col-md-1" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image1)}>
                          <img src={data?.ele?.image1} className="w-100 multiple-img" />
                        </div>
                      )}
                      {data?.ele?.image2 !== "undefined" && (
                        <div className="col-md-1" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image2)}>
                          <img src={data?.ele?.image2} className="w-100 multiple-img" />
                        </div>
                      )}
                      {data?.ele?.image3 !== "undefined" && (
                        <div className="col-md-1" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image3)}>
                          <img src={data?.ele?.image3} className="w-100 multiple-img" />
                        </div>
                      )}


                      {data?.ele?.image4 !== "undefined" && (
                        <div className="col-md-1" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image4)}>
                          <img src={data?.ele?.image4} className="w-100 multiple-img" />
                        </div>
                      )}
                    </div>


                  </div>
                </div>

              </div>


            </div>
            <div className="d-flex d-md-none row p-4 internal-mobile">
              <div className="col-md-12 ">
                {mainImg ? (
                  <img
                    className="w-100 h-100 img-details-properties"
                    src={mainImg}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="row gap-2 mt-2">
                <div className="d-flex justify-content-ceter gap-2">
                  {data?.ele?.image !== "undefined" && (
                    <div className="col-md-1 col-2" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image)}>
                      <img src={data?.ele?.image} className="w-100 h-100 multiple-img" />
                    </div>
                  )}
                  {data?.ele?.image1 !== "undefined" && (
                    <div className="col-md-1 col-2" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image1)}>
                      <img src={data?.ele?.image1} className="w-100 multiple-img" />
                    </div>
                  )}
                  {data?.ele?.image2 !== "undefined" && (
                    <div className="col-md-1 col-2" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image2)}>
                      <img src={data?.ele?.image2} className="w-100 multiple-img" />
                    </div>
                  )}
                  {data?.ele?.image3 !== "undefined" && (
                    <div className="col-md-1 col-2" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image3)}>
                      <img src={data?.ele?.image3} className="w-100 multiple-img" />
                    </div>
                  )}
                  {data?.ele?.image4 !== "undefined" && (
                    <div className="col-md-1 col-2" style={{ cursor: "pointer" }} onClick={() => setMainImg(data?.ele?.image4)}>
                      <img src={data?.ele?.image4} className="w-100 multiple-img" />
                    </div>
                  )}
                </div>

              </div>
              <div className="col-md-4 mandated-section-one-block3">
                <h3 className="mandated-section-one-block3-text2">
                  {data?.ele?.title}
                </h3>
                <div className="flex mandated-button">
                  <div className="mandated-section-one-block3-text31">
                    <p className="mandated-section-one-block3-text3-1">
                      {data?.ele?.label}
                    </p>
                  </div>
                  <div
                    className="mandated-section-one-block3-text32"
                    style={{ marginLeft: "10px" }}
                  >
                    <p className="mandated-section-one-block3-text3-2">
                      {data?.ele?.status}
                    </p>
                  </div>
                </div>
                <p
                  className="mandated-section-one-block3-text4"
                  dangerouslySetInnerHTML={{
                    __html: data?.ele?.description,
                  }}
                ></p>
                <div></div>
                <div
                  className="mandated-contact-flag mt-md-5 "
                  onClick={handleClickScroll}
                >
                  <div className="d-flex mt-5 ">
                    <div className="mandated-section-one-block3-button ">
                      <p className="mandated-section-one-block3-button-title cursor-pointer">
                        Contact Us
                      </p>
                    </div>
                    <div>&nbsp;</div>
                    <div className="mandated-section-one-block3-button  ">
                      <p className="mandated-section-one-block3-button-title cursor-pointer">
                        Video Tour
                      </p>
                    </div>
                  </div>
                  {/* <div className="mandated-section-one-block3-button1 ">
                      <p className="mandated-section-one-block3-button-title cursor-pointer">
                        Video Tour
                      </p>
                    </div> */}
                  {/* <div className="CircularTag">
                      <img src={CircularTag} />
                    </div> */}
                </div>
              </div>
            </div>
            <div className="mandated-section-two1">
              <div className="color-bar"></div>
              <p className="mandated-section-two-title mt-3 ">Particulars</p>
              <p className="hr-line"></p>
              <div className="row">
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.property_id}
                    </div>
                    <div className="internal-description">Property ID</div>
                  </div>
                </div>
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.property_type}
                    </div>
                    <div className="internal-description">Property Type</div>
                  </div>
                </div>{" "}
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.size} SqFt
                    </div>
                    <div className="internal-description">Super Area</div>
                  </div>
                </div>{" "}

              </div>
              <div className="row mt-4">
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.status}
                    </div>
                    <div className="internal-description">Property Status</div>
                  </div>
                </div>
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.location}
                    </div>
                    <div className="internal-description">City</div>
                  </div>
                </div>
                <div className="col-md-4 align-items-center d-flex justify-content-center">
                  <div className="">
                    <div className="mb-2 internal-heading">
                      {data?.ele?.label}
                    </div>
                    <div className="internal-description">Available For</div>
                  </div>
                </div>{" "}

              </div>

            </div>


            <div className="mandated-section-four" id="section-1">
              <div className="row">
                <div className="col-md-6">
                  <div className="mandated-section-content1 desktop-contact">
                    <h2>Interested? Our team can</h2>
                    <h3>help you out.</h3>
                    <h2 className="mt-4">Contact us</h2>
                  </div>
                  <div className="mandated-section-content1 mobile-contact">
                    <h3 className="mandated-conct-head">
                      Interested? Our
                      <br /> team can help you
                      <br /> out.
                    </h3>
                    <h2 className="mt-4 mandated-conct-head">Contact us</h2>
                  </div>
                  <p className="mt-5 mandated-section-content2">
                    Fill the form or call us at: 18001230396
                  </p>
                </div>
                <div className="col-md-1">
                  <div className="left-line1"></div>
                </div>
                <div className="col-md-5 mandated-form">
                  <div className="form-div">
                    <div className="">
                      <p className="para-margin">Name</p>
                      <input
                        type="text"
                        className="input-field"
                        onChange={handleOnChange}
                        name="name"
                        value={formFields.name}
                      />
                      <p className="text-danger">{formError.name}</p>
                    </div>
                    <div className="my-2">
                      <p className="para-margin">Email</p>
                      <input
                        type="text"
                        className="input-field"
                        onChange={handleOnChange}
                        name="email"
                        value={formFields.email}
                      />
                      <p className="text-danger">{formError.email}</p>
                    </div>
                    <div className="my-2">
                      <p className="para-margin">Phone</p>
                      <input
                        type="phone"
                        className="input-field"
                        onChange={handleOnChange}
                        name="number"
                        value={formFields.number}
                        maxLength={10}
                      />
                      <p className="text-danger">{formError.number}</p>
                    </div>
                    <div className="my-2">
                      <p className="para-margin">Message</p>
                      <textarea
                        type=""
                        className="input-textarea"
                        onChange={handleOnChange}
                        name="message"
                        value={formFields.message}
                        rows="5"
                      />
                      <p className="text-danger">{formError.message}</p>
                    </div>
                    <div className="send-button cursor-pointer">
                      <p
                        className="send-button-text  mt-md-2"
                        onClick={handelSubmit}
                      >
                        {loadstate ? (
                          <Spinner
                            animation="border"
                            variant="Primary"
                            size="sm"
                          />
                        ) : (
                          <span>Send</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mandated-section-five1  ">
              <div className="mandated-section-five-image pb-5">
                <h1 className="mandated-section-five-image-text">
                  Looking for something particular? Our team can help you find
                  it.
                </h1>
                <a href="/form" className="textdetailproperti">
                  <div className="mandated-section-five-image-button1 mandated-section-five-image-button my-5 ">
                    <h1 className="mandated-section-five-image-button-name mb-0">
                      List your Requirement
                    </h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MandatedPropertiesInternal;
