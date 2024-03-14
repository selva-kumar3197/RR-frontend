import React, { useState } from "react";

import "./Footer.css";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DownloadReports from "../../Pages/Home/DownloadReaports";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";
import { saveAs } from "file-saver";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import { ToastContainer, toast, Zoom } from "react-toastify";
import PopupFeedback from "../../Components/PopupFeedback"
import { Spinner } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
let xicon = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/xicon.png"
let facebook = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/facebook.png";
let linkedin = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/linkedin.png";
let insta = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/insta.png";
let youtube = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/youtube.png";
let twitter = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/twitter.png";

function MyPdfDocument() {
  return (
    <Document>
      <Page>
        <Text>Hello, world!</Text>
      </Page>
    </Document>
  );
}
function MyPdfPreview() {
  return (
    <PDFViewer>
      {console.log("before")}
      <MyPdfDocument />
      {console.log("after")}
    </PDFViewer>
  );
}
function MyPdf() {
  const blob = new Blob([<MyPdfDocument />], { type: "application/pdf" });
  const blobUrl = URL.createObjectURL(blob);
  saveAs(blobUrl, "my-pdf-file.pdf");
}

const Footer = () => {
  const [showModalaPopup, setShowModalaPopup] = useState(false);
  const [loadstate, setLoadstate] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (ele) => {
    setShow(true);
  };
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (ele) => {
    setShow1(true);
  };

  const [downloadReport, setDownloadReport] = React.useState({
    name: "",
    lastname: "",
    email: "",
    mobile_no: "",
    category: "form",
  });
  const [downloadReportErrors, setDownloadReportErrors] = React.useState({
    name: "",
    lastname: "",
    email: "",
    mobile_no: "",
    category: "form",
  });
  const [feedbackForm, setFeedbackFrom] = React.useState({
    name: "",
    description: "",
    description1: "",
    description2: "",
    description3: "",

    category: "feedback",
  });
  const [feedbackErrors, setFeedbackErrors] = React.useState({
    name: "",
    description: "",
    description1: "",
    description2: "",
    description3: "",

    category: "feedback",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDownloadReport((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(downloadReport);
    setDownloadReportErrors((prevState) => ({
      ...prevState,
      [name]: null,
    }));
  };
  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setFeedbackFrom((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // console.log(downloadReport);
    setFeedbackErrors((prevState) => ({
      ...prevState,
      [name]: null,
    }));
  };
  const downloadValidation = () => {
    const newErrors = {};
    const { name, lastname, email, mobile_no } = downloadReport;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

    if (name === "") {
      newErrors.name = "please enter a name";
    }
    if (lastname === "") {
      newErrors.lastname = " please enter a last name";
    }
    if (email === "" || !emailRegex.test(email)) {
      newErrors.email = "please enter a valid email address";
    }
    if (!mobileRegex.test(mobile_no)) {
      newErrors.mobile_no = "please enter a valid phone number";
    }
    console.log(newErrors);
    return newErrors;
  };
  const [showPdf, setShowPdf] = React.useState(false);

  const handleSubmit = async (event) => {
    const downloadValidationObject = downloadValidation();
    if (Object.keys(downloadValidationObject).length > 0) {
      console.log("if working");
      setDownloadReportErrors(downloadValidationObject);
    } else {
      setLoadstate(true)
      console.log("else working");
      event.preventDefault();
      try {
        const response = await axios.post(
          "https://rr-api.realisticrealtors.com/api/rr/create",
          downloadReport
        );
        if (response.status === 200) {
          toast.success("form submitted")
          setLoadstate(false)
          setShow(!show);

          setShowPdf(true);
        }

        console.log("API response:", response.data);
        // handle the API response
      } catch (error) {
        console.error("API request failed:", error);
        // handle the API error
      }
    }
  };

  const handleSubmit1 = async (event) => {
    const downloadValidationObject = validateFormFeedBack();
    if (Object.keys(downloadValidationObject).length > 0) {
      console.log("if working");
      setDownloadReportErrors(downloadValidationObject);
    } else {
      console.log("else working");
      event.preventDefault();
      try {
        const response = await axios.post(
          "https://rr-api.realisticrealtors.com/api/rr/create",
          feedbackForm
        );
        if (response.status === 200) {
          setShow1(!show1);
          setShowModalaPopup(true);
          setFeedbackFrom({
            name: "",
            description: "",
            description1: "",
            description2: "",
            description3: "",

            category: "feedback",
          })
        }

        console.log("API response:", response.data);
        // handle the API response
      } catch (error) {
        console.error("API request failed:", error);
        // handle the API error
      }
    }
  };

  const validateFormFeedBack = () => {
    const errors = {};

    // Perform validation for each field
    if (feedbackForm.name.trim() === "") {
      errors.name = "This feild is required";
    }

    if (feedbackForm.description.trim() === "") {
      errors.description = "This feild is required";
    }

    if (feedbackForm.description1.trim() === "") {
      errors.description1 = "This feild is required";
    }

    if (feedbackForm.description2.trim() === "") {
      errors.description2 = "This feild is required";
    }
    if (feedbackForm.description3.trim() === "") {
      errors.description3 = "This feild is required";
    }

    setFeedbackErrors(errors);

    // Return true if there are no errors, false otherwise
    return Object.keys(errors).length === 0;
  };


  const [expanded, setExpanded] = useState(true);
  const [expanded2, setExpanded2] = useState(true);
  const [expanded3, setExpanded3] = useState(true);
  const [expanded4, setExpanded4] = useState(true);
  const [expanded5, setExpanded5] = useState(true);

  const [formFields, setFormFields] = useState({
    name: "",
    lastname: "",
    mobile_no: "",
    email: "",
  });


  return (
    <div className="footer-component-contianer ">
      <ToastContainer autoClose={2000} delay={1000} limit={1} />
      {/* <a className="text-decoration-none" href="/Listyourproperty">
        {" "}
        <div className="footer-find-contianer cursor-pointer px-5">
          {" "}
          Let’s find you a new space
        </div>{" "}
      </a> */}
      <div
        className="col-md-12"
        style={{
          textAlign: "center",
        }}
      >
        <div className="">
          <h2 className="foter-heading mb-5  ">We Are Realistic Realtors</h2>
        </div>
      </div>

      <div className="mv-footer">
        <Accordion className="footer-items">
          <AccordionSummary
            expandIcon={
              expanded ? (
                <AddIcon style={{ color: "#b8b8b8" }} />
              ) : (
                <RemoveIcon style={{ color: "#b8b8b8" }} />
              )
            }
            onClick={(event) => {
              setExpanded(!expanded);
            }}
            aria-controls="panel1a-content"
            className="footer-border"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <p className="link-section-heading text-center">Services</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="tp-r-links-contianer">
                <a className="footer-link" href="/corporate_leasing">
                  Corporate Leasing
                </a>
                <a className="footer-link" href="/retail_services">
                  Retail Services
                </a>
                <a className="footer-link" href="/warehouse_services">
                  Warehouse Services
                </a>
                <a className="footer-link" href="/investment_advisory">
                  Investment Advisory
                </a>
                <a className="footer-link" href="/interior_management">
                  Interior Management
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="footer-items">
          <AccordionSummary
            expandIcon={
              expanded2 ? (
                <AddIcon style={{ color: "#b8b8b8" }} />
              ) : (
                <RemoveIcon style={{ color: "#b8b8b8" }} />
              )
            }
            onClick={(event) => {
              setExpanded2(!expanded2);
            }}
            aria-controls="panel1a-content"
            className="footer-border"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <p className="link-section-heading">Properties</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="tp-r-links-contianer">
                <a className="footer-link" href="/properties">
                  Find Properties
                </a>
                <a className="footer-link" href="/form">
                  List your Requirement
                </a>

              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="footer-items">
          <AccordionSummary
            expandIcon={
              expanded3 ? (
                <AddIcon style={{ color: "#b8b8b8" }} />
              ) : (
                <RemoveIcon style={{ color: "#b8b8b8" }} />
              )
            }
            onClick={(event) => {
              setExpanded3(!expanded3);
            }}
            aria-controls="panel1a-content"
            className="footer-border"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <p className="link-section-heading">Insights</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="tp-r-links-contianer">
                <a className="footer-link" href="/casestudy">
                  Case Studies
                </a>
                <a className="footer-link" href="/media">
                  Media Coverage
                </a>
                <a className="footer-link" href="/our-clients">
                  Our Clients
                </a>

                <a className="footer-link" href="/market_trends">
                  Market Trends
                </a>
                {/* <div
                  className="footer-link cursor-pointer"
                  // onClick={(ele) => OnclickApplyJob(ele)}
                  onClick={handleShow}
                >
                  <a className="footer-link">Downloads</a>
                </div> */}
                <div
                  className="footer-link cursor-pointer"
                  // onClick={(ele) => OnclickApplyJob(ele)}
                  onClick={handleShow1}
                >
                  <span className="purple"> User Feedback Form</span>
                </div>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="footer-items">
          <AccordionSummary
            expandIcon={
              expanded4 ? (
                <AddIcon style={{ color: "#b8b8b8" }} />
              ) : (
                <RemoveIcon style={{ color: "#b8b8b8" }} />
              )
            }
            onClick={(event) => {
              setExpanded4(!expanded4);
            }}
            aria-controls="panel1a-content"
            className="footer-border"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <p className="link-section-heading">About Us</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="tp-r-links-contianer">
                <a className="footer-link" href="/aboutus">
                  Our Philosophy
                </a>

                <a className="footer-link" href="/team@rr">
                  Our Team
                </a>
                <a className="footer-link" href="/career">
                  Careers
                </a>

                <a className="footer-link" href="/csr">
                  CSR
                </a>
                {/* <a className="footer-link" href="/csr">
            Life @ Realistic Realtors
          </a> */}

                <a className="footer-link" href="/contactus">
                  Contact us
                </a>
                <a className="footer-link" href="/PrivacyPolicy">
                  Privacy Policy
                </a>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="footer-items">
          <AccordionSummary
            expandIcon={
              expanded5 ? (
                <AddIcon style={{ color: "#b8b8b8" }} />
              ) : (
                <RemoveIcon style={{ color: "#b8b8b8" }} />
              )
            }
            onClick={(event) => {
              setExpanded5(!expanded5);
            }}
            aria-controls="panel1a-content"
            className="footer-border"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <p className="link-section-heading">Contact</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="link-section-contianer col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-3">
                <p className="contact-item">
                  Talk to our support:11{" "}
                  <a href="tel:18001230396" className="text-white">
                    <u>18001230396</u>
                  </a>
                </p>
                <p className="contact-item">
                  Write to us:{" "}
                  <a href="mailto:info@rrpl.net" className="text-white">
                    <u>info@rrpl.net</u>
                  </a>
                </p>
                <p className="contact-item">
                  Find us at:{" "}
                  <span className="text-white">
                    {" "}
                    <u>
                      <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                        316, 3rd Floor, Time Tower,
                      </a>{" "}
                    </u>{" "}
                  </span>
                  <br className="" />{" "}
                  <span className="text-white">
                    {" "}
                    <u>
                      <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                        Mehrauli-Gurgaon Rd, Gurugram,
                      </a>{" "}
                    </u>{" "}
                  </span>
                  <br />
                  <span className="text-white">
                    <u>
                      <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                        Haryana 122002
                      </a>
                    </u>{" "}
                  </span>
                </p>

              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div
        className="footer-link-contianer row  gap-4"
        style={{
          marginLeft: "75px",
          marginRight: "75px",
        }}
      >
        <div className="link-section-contianer col-md-2 ">
          <p className="link-section-heading">Services</p>
          <a className="footer-link" href="/corporate_leasing">
            Corporate Leasing
          </a>
          <a className="footer-link" href="/retail_services">
            Retail Services
          </a>
          <a className="footer-link" href="/warehouse_services">
            Warehouse Services
          </a>
          <a className="footer-link" href="/investment_advisory">
            Investment Advisory
          </a>
          <a className="footer-link" href="/interior_management">
            Interior Management
          </a>
        </div>

        <div className="link-section-contianer col-md-2">
          <p className="link-section-heading">Properties</p>
          <a className="footer-link" href="/properties">
            Find Properties
          </a>
          <a className="footer-link" href="/form">
            List your Requirement
          </a>
          {/* <a className="footer-link" href="/Propertiesforsale">
            Properties for sale
          </a>
          <a className="footer-link" href="/Propertiesforlease">
            Properties for lease
          </a> */}
          {/* <a className="footer-link" href="/contactus">
            Talk to an expert
          </a> */}
        </div>

        <div className="link-section-contianer col-md-2">
          <p className="link-section-heading">Insights</p>
          <a className="footer-link" href="/casestudy">
            Case Studies
          </a>
          <a className="footer-link" href="/media">
            Media Coverage
          </a>
          <a className="footer-link" href="/our-clients">
            Our Clients
          </a>

          <a className="footer-link" href="/market_trends">
            Market Trends
          </a>
          {/* <div
            className="footer-link cursor-pointer"
            // onClick={(ele) => OnclickApplyJob(ele)}
            onClick={handleShow}
          >
            <a className="footer-link">Downloads</a>
          </div> */}
          <div
            className="footer-link cursor-pointer"
            // onClick={(ele) => OnclickApplyJob(ele)}
            onClick={handleShow1}
          >
            <span className="purple"> User Feedback Form</span>
          </div>

          {/* <a className="footer-link" href="/mandated-properties">
            Properties
          </a> */}
        </div>

        <div className="link-section-contianer col-md-2">
          <p className="link-section-heading">About Us</p>
          <a className="footer-link" href="/aboutus">
            Our Philosophy
          </a>

          <a className="footer-link" href="/team@rr">
            Our Team
          </a>
          <a className="footer-link" href="/career">
            Careers
          </a>

          <a className="footer-link" href="/csr">
            CSR
          </a>
          {/* <a className="footer-link" href="/csr">
            Life @ Realistic Realtors
          </a> */}

          <a className="footer-link" href="/contactus">
            Contact us
          </a>
          <a className="footer-link" href="/PrivacyPolicy">
            Privacy Policy
          </a>
        </div>

        <div className="link-section-contianer col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-3">
          <p className="link-section-heading">Contact</p>
          <p className="contact-item">
            Talk to our support:{" "}
            <a href="tel:18001230396" className="text-white">
              <u>18001230396</u>
            </a>
          </p>
          <p className="contact-item">
            Write to us:{" "}
            <a href="mailto:info@rrpl.net" className="text-white">
              <u>info@rrpl.net</u>
            </a>
          </p>
          <p className="contact-item">
            Find us at:{" "}
            <span className="text-white">
              {" "}
              <u>
                <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                </a>{" "}
                316, 3rd Floor, Time Tower,
              </u>{" "}
            </span>
            <br className="" />{" "}
            <span className="text-white">
              {" "}
              <u>
                <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                  Mehrauli-Gurgaon Rd, Gurugram,
                </a>{" "}
              </u>{" "}
            </span>
            <br />
            <span className="text-white">
              <u>
                <a href="https://www.google.com/maps?q=316+3rd+Floor+Time+Tower,+Mehrauli-Gurgaon+Rd,+Gurugram,+Haryana+122002" target="_blank" className="text-white">
                  Haryana 122002
                </a>
              </u>{" "}
            </span>
          </p>

        </div>
      </div>

      <div className="mt-5 pt-5 row hello2">
        <div className="col-md-8">
          <p className="footer-link1">
            Copyright © 2023 Realistic Realtors. All Rights Reserved.
          </p>
        </div>
        <div className="col-md-4 social-icons-contianer-mobile">
          <div className="social-icons-contianer">
            <a
              href="https://www.facebook.com/realisticrealtors"
              target="_blank"
            >
              <LazyLoad>
                <img
                  src={facebook}
                  className="mx-1 img-fluid h-100"
                  alt="social-icon"
                />
              </LazyLoad>

            </a>
            <LazyLoad>
              <a
                href="https://www.linkedin.com/company/realistic-realtors/"
                target="_blank"

              >
                <img src={linkedin} className="mx-1 h-100" alt="social-icon" />
              </a>
            </LazyLoad>
            <LazyLoad>
              <a
                href="https://www.instagram.com/realistic.realtors/"
                target="_blank"
              >
                <img src={insta} className="mx-1 h-100" alt="social-icon" />
              </a>
            </LazyLoad>
            <LazyLoad>
              <a
                href="https://www.youtube.com/user/RealisticRealtors"
                target="_blank"
              >
                <img src={youtube} className="mx-1 h-100" alt="social-icon" />
              </a>
            </LazyLoad>
            <LazyLoad>
              <a href="https://twitter.com/RealisticIndia" target="_blank">
                <img
                  src={twitter}
                  className="mx-1 h-100"
                  alt="social-icon"
                  target="_blank"
                />
              </a>
            </LazyLoad>

          </div>
        </div>
      </div>
      <div className="modal-cont">
        <Modal
          // width={200  }
          show={show}
          onHide={handleClose}
          dialogClassName="model-cont"
          className="model-cont"
          // centered
          size="xl"
        >
          <Modal.Body>
            {/* {allData ? allData.map((ele) => console.log(ele, "mapdata")) : ""} */}
            <div className="ls-modal-container1">
              <div className="ls-m-r-c1 ">
                <span className="ls-close-container" onClick={handleClose}>
                  <img src={xicon} alt="xicon" height="16px" width="16px" />

                </span>
                <div className="px-5 py-5 widthforfeedback">
                  <div className="cup-f-tf-container">
                    <label className="small-text theme-grey-text">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="cup-f-tf1"
                      // onChange={handleOnChange}
                      name="name"
                      id="name"
                      // value={formFields.name}
                      onChange={(event) => handleChange(event)}
                    />
                    <p className="text-danger">{downloadReportErrors?.name}</p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar mt-0">
                    <label className="small-text theme-grey-text">
                      {" "}
                      Last Name *
                    </label>
                    <input
                      onChange={(event) => handleChange(event)}
                      type="text"
                      className="cup-f-tf1"
                      // onChange={handleOnChange}
                      name="lastname"
                      id="lastname"

                    // value={formFields.email}
                    />
                    <p className="text-danger">
                      {downloadReportErrors?.lastname}
                    </p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                    <label className="small-text theme-grey-text">
                      {" "}
                      Phone Number *
                    </label>
                    <input
                      onChange={(event) => handleChange(event)}
                      type="text"
                      className="cup-f-tf1"
                      // onChange={handleOnChange}
                      name="mobile_no"
                      id="mobile_no"

                    // value={formFields.number}
                    />

                    <p className="text-danger">
                      {downloadReportErrors?.mobile_no}
                    </p>
                  </div>
                  <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                    <label className="small-text theme-grey-text">
                      Email ID *
                    </label>
                    <input
                      onChange={(event) => handleChange(event)}
                      type="text"
                      className="cup-f-tf1"
                      // onChange={handleOnChange}
                      name="email"
                      id="email"

                    // value={formFields.exprince}
                    />
                    <p className="text-danger">{downloadReportErrors?.email}</p>
                  </div>

                  <button
                    // style={buttonStyle}
                    className="download-report"
                    onClick={(event) => handleSubmit(event)}
                  >
                    {loadstate ? (
                      <Spinner animation="border" variant="Primary" size="sm" />
                    ) : (
                      <span>Submit</span>

                    )}
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <Modal
        // width={200}
        show={show1}
        onHide={handleClose1}
        dialogClassName="model-cont"
        className="model-cont"
        centered
        size="2xl"
      >
        <Modal.Body>

          <div className="ls-modal-container2 ">
            <div className="ls-m-r-c1 ">
              <span className="ls-close-container" onClick={handleClose1}>
                <img src={xicon} alt="xicon" height="16px" width="16px" />
              </span>
              <div className="px-3 px-md-5 py-md-5 py-3 widthforfeedback1">

                <h1 className="text-center">
                  Now that you have come to this section, why not give us an
                  honest feedback about our website ?
                </h1>
                <div className="cup-f-tf-container ">
                  <label className="small-text theme-grey-text">Name</label>
                  <input
                    type="text"
                    className="cup-f-tf1  "
                    // onChange={handleOnChange}
                    name="name"
                    id="name"
                    // value={formFields.name}
                    onChange={(event) => handleChange1(event)}
                  />
                  <p className="text-danger">{feedbackErrors?.name}</p>
                </div>
                <div className="cup-f-tf-container cup-f-tf-c-top-mar mt-0">
                  <label className="small-text theme-grey-text">
                    {" "}
                    Where did you hear about us ?
                  </label>
                  <input
                    onChange={(event) => handleChange1(event)}
                    type="text"
                    className="cup-f-tf1"
                    // onChange={handleOnChange}
                    name="description"
                    id="description"

                  // value={formFields.email}
                  />
                  <p className="text-danger">{feedbackErrors?.description}</p>
                </div>
                <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                  <label className="small-text theme-grey-text">
                    {" "}
                    What do you like about our website?
                  </label>
                  <input
                    onChange={(event) => handleChange1(event)}
                    type="text"
                    className="cup-f-tf1"
                    // onChange={handleOnChange}
                    name="description1"
                    id="description1"

                  // value={formFields.number}
                  />

                  <p className="text-danger">{feedbackErrors?.description1}</p>
                </div>
                <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                  <label className="small-text theme-grey-text">
                    Which sections appeal to you the most?
                  </label>
                  <input
                    onChange={(event) => handleChange1(event)}
                    type="text"
                    className="cup-f-tf1"
                    // onChange={handleOnChange}
                    name="description2"
                    id="description2"

                  // value={formFields.exprince}
                  />
                  <p className="text-danger">{feedbackErrors?.description2}</p>
                </div>
                <div className="cup-f-tf-container cup-f-tf-c-top-mar  mt-0">
                  <label className="small-text theme-grey-text">
                    What do you think can be improved about our website?
                  </label>
                  <input
                    onChange={(event) => handleChange1(event)}
                    type="text"
                    className="cup-f-tf1"
                    // onChange={handleOnChange}
                    name="description3"
                    id="description3"

                  // value={formFields.exprince}
                  />
                  <p className="text-danger">{feedbackErrors?.description3}</p>
                  {console.log(feedbackForm)}
                </div>

                <button
                  // style={buttonStyle}
                  className="feedback-report"
                  onClick={(event) => handleSubmit1(event)}

                >
                  {/* {loadstate ? (
                    <Spinner animation="border" variant="Primary" size="sm" />
                  ) : (
                    <span>Submit</span>
                    
                  )} */}
                  Submit Form
                </button>

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <PopupFeedback
        show={showModalaPopup}
        onHide={() => setShowModalaPopup(false)}
      ></PopupFeedback>
    </div>
  );
};

export default Footer;
