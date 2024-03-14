import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
let loginsignupImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/loginsignupImage.png";


let job_image = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/about/Frame.png";
function ApplyJob() {
  const [allData, setAllData] = useState();
  const [Resume, setResume] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (ele) => {
    setShow(true);
  };
  const { state } = useLocation();
  useEffect(() => {
    setAllData(state);
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [allData]);

  const buttonStyle = {
    border: "unset",
    backgroundColor: "#221D35",
    color: "#FFF",
    fontSize: "16px",
    padding: "10px 40px",
    marginTop: "2em",
  };
  const [loadstate, setloadstate] = useState(false);

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

    if (e.target.name === "resume") {
      // File upload handling (unchanged from the previous implementation)
      const file = e.target.files[0];
      if (file) {
        p.resume = file;
      } else {
        p.resume = null;
        setFormError({
          ...formError,
          [e.target.name]: "Please select a valid image file.",
        });
      }
    } else if (e.target.name === "exprince") {
      // Experience field validation
      const experienceValue = e.target.value;
      const numericExperience = parseFloat(experienceValue);

      if (isNaN(numericExperience) || numericExperience < 0) {
        // Experience is not a non-negative number
        p.exprince = ""; // Clear the field value
        setFormError({
          ...formError,
          [e.target.name]: "Experience should be a non-negative number.",
        });
      } else {
        // Valid experience value, update the form field
        p[e.target.name] = experienceValue;
      }
    } else {
      // For all other fields (excluding resume and experience), update the form field
      p[e.target.name] = e.target.value;
    }

    setFormFields(p);

    setFormError({
      ...formError,
      [e.target.name]: null,
    });
  };


  const handleValidation = () => {

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

    if (!exprince || isNaN(exprince)) {
      newErros.exprince = "Please enter the experience in no of years.";
    }
    else if (exprince && exprince.length > 30) {
      newErros.exprince = "exprince should be below 30 charecters";
    }

    if (!resume) {
      newErros.resume = "Please Submit Resume";
    }

    return newErros;
  };
  const handleKeyDown = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);

    // Allow numeric digits (0-9) and backspace (8) key from both main number keys and numpad keys
    const numericRegex = /^[0-9]$/;
    const isNumeric = numericRegex.test(keyValue);
    const isBackspace = keyCode === 8;

    // Allow numeric digits from numpad keys (keyCode 96 to 105)
    const isNumpadNumeric = keyCode >= 96 && keyCode <= 105;

    if (!(isNumeric || isBackspace || isNumpadNumeric)) {
      event.preventDefault();
    }
  };


  const handelSubmit = async (eee) => {
    const handleValidationObject = handleValidation();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      try {
        const formData = new FormData();
        formData.append("name", formFields.name);
        formData.append("email", formFields.email);
        formData.append("contact_no", formFields.number);
        formData.append("experience", formFields.exprince);
        formData.append("image", formFields.resume);
        formData.append("job_id", allData?.ele?.id);
        formData.append("category", "applyjob");

        console.log(formData, "formData");
        setloadstate(true);
        const loginApi = await ApiService.postData("/applyjobs", formData);
        setloadstate(false);
        setShow(!show)

        if (loginApi.error === false) {
          toast.success("Your application has been submitted successfully");
          const arr = { ...formFields };
          arr.name = "";
          arr.email = "";
          arr.number = "";
          arr.exprince = "";
          setFormFields(arr);
        } else {
          toast.error(loginApi.error);
        }
      } catch (error) {
        toast.error(error.message, "Please Fill Up All Fields");
      }
    }
  };


  return (
    <div className="row">
      <ToastContainer autoClose={2000} delay={1000} limit={1} />

      <div>
        <div className="jobmaindiv px-md-5 pb-md-5 ">
          <div className="row">
            <style>
              {`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
            </style>
            <div
              className="col-md-8 careerscroll "
            // style={{ height: "700px", overflow: "auto" }}

            >
              <div className="px-3 mt-md-5">
                <p className="second-block-first-line desktop-sec-block w-100 h-auto">
                  We are looking for a <br className=" applyjob-1 " />
                  <span></span>
                  <span className="second-block-first-line-color ">
                    {allData?.ele?.title} <br className=" applyjob-1 " />
                  </span>{" "}
                  <div className="mt-2">
                    for{" "}
                    <span className="second-block-first-line-color ">
                      {" "}
                      {allData?.ele?.job_location}
                    </span>
                  </div>
                </p>

                <div className="">
                  <div className="bar"></div>
                  <div className="col-md-4 mt-md-2 mb-3 apply-desktop">


                  </div>
                  <p className="title-description">Description</p>


                  <ul className="title-two fs-5 w-100 p-0">
                    <li className="listStyle">
                      {" "}
                      <b>{allData?.ele?.exp} of experience</b>
                    </li>
                    <li
                      className="listStyle"
                      dangerouslySetInnerHTML={{
                        __html: allData?.ele?.description,
                      }}
                    ></li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-md-4  ">
              <div className="apply-deskstop">
                <LazyLoad>
                  <img
                    src={job_image}
                    className="mt-5 apply-job applyJobImage"
                    alt="images"
                  />
                </LazyLoad>

              </div>
              <div className="d-flex apply-mobile">
                <div
                  className="footer-button mobile-footer cursor-pointer mt-3"
                  // onClick={(ele) => OnclickApplyJob(ele)}
                  onClick={handleShow}
                >
                  <span className="footer-button-text  ">Apply now</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>



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
              <div className="px-4 py-5">
                <div className="cup-f-tf-container">
                  <label className="small-text5 theme-grey-text">
                    Full Name &nbsp;<span className="text-danger"> *</span>
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
                  <label className="small-text5 theme-grey-text"> Email &nbsp;<span className="text-danger"> *</span></label>
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
                  <label className="small-text5 theme-grey-text">
                    {" "}
                    Phone Number &nbsp;<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    className="cup-f-tf"
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    name="number"
                    value={formFields.number}
                    maxLength={10}
                  />


                  <p className="text-danger">{formError.number}</p>
                </div>
                <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                  <label className="small-text5 theme-grey-text">
                    Experience Level &nbsp;<span className="text-danger"> *</span>
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
                  <label className="small-text5 theme-grey-text">Resume &nbsp;<span className="text-danger"> *</span></label>
                  <input
                    type="file"
                    className="cup-f-tf"
                    onChange={handleOnChange}
                    name="resume"
                  // value={formFields.resume}
                  />
                  <p className="text-danger">{formError.resume}</p>
                </div>

                <p className="text-danger">Note :  The Resume must be PDF format </p>

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
  );
}

export default ApplyJob;
