import React from "react";
import "./Listyourproperty.css";

import Button from "../Components/Button/Button";

import { useState } from "react";
import ApiService from "../service/ApiService";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Form } from "react-bootstrap";
import ListPopup from "./ListPopup";
import { Helmet } from 'react-helmet';
import LazyLoad from "react-lazy-load";
import Select from "react-select";

let propertyFormImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/listImg.png";

const Listyourproperty = () => {
  const buttonStyle = {
    border: "unset",
    backgroundColor: "#221D35",
    color: "#FFF",
    fontSize: "16px",
    padding: "10px 40px",
  };

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [showModalaPopup, setShowModalaPopup] = useState(false);

  const Nextform = () => {
    console.log(requirment_type, "requirment_type");

    const handleValidationObject = handleValidationFirst();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      setFirst(false);
      setSecond(true);
    }
  };

  const Nextform2 = () => {
    const handleValidationObject = handleValidationSecond();

    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      if (second) {
        console.log("click");
        setThird(true);
        setSecond(false);
      }
    }
  };

  const backForm = () => {
    setFirst(true);
    setSecond(false);
    if (third) {
      setThird(false);
      setSecond(true);
      setFirst(false);
    }
  };

  const [formFields, setFormFields] = useState({
    city: "",
    property_type: "",
    name: "",
    contact_no: "",
    email: "",
    description: "",
  });

  const [formError, setFormError] = useState({
    city: "",
    property_type: "",
    name: "",
    contact_no: "",
    email: "",
    description: "",
    requirment_type: "",
    property_type: "",
  });

  const [requirment_type, setRequirment_type] = useState();
  const [property_type, setProperty_type] = useState();

  const SelectRequirement = (e) => {
    setRequirment_type(e.target.value);
  };

  const SelectProperty = (e) => {
    setProperty_type(e.target.value);
  };

  console.log(requirment_type);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    // Check if the input field has the name attribute set to "name"
    if (name === "city" || name === "name") {
      // Remove numbers from the input value using regular expression
      const sanitizedValue = value.replace(/[0-9]/g, '');

      // Update the state or form fields with the sanitized value
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: sanitizedValue,
      }));
    } else {
      // For other input fields, update the state or form fields normally
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: value,
      }));
    }

    // Clear the form error for this input field
    setFormError((prevFormError) => ({
      ...prevFormError,
      [name]: null,
    }));
  };

  const handleValidationFirst = () => {
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const {
      city,
      // requirment_type,
      // property_type,
      name,
      contact_no,
      email,
      description,
    } = formFields;

    if (!city) {
      newErros.city = "Please Enter city";
    }
    if (!requirment_type) {
      newErros.requirment_type = "Please Enter requirment_type";
    }

    if (!property_type) {
      newErros.property_type = "Please Enter property_type";
    }

    return newErros;
  };

  const handleValidationSecond = () => {
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { name, contact_no, email, description } = formFields;

    if (!contact_no) {
      newErros.contact_no = "Please Enter Contact No";
    } else if (contact_no && contact_no.length > 10) {
      newErros.contact_no = "Contact No should be below 10 characters";
    } else if (contact_no && contact_no.length < 10) {
      newErros.contact_no = "Contact No should be  10 characters";
    }
    if (!name) {
      newErros.name = "Please Enter Full Name";
    } else if (name && !regText.test(name)) {
      newErros.name = "Full Name should be text";
    } else if (name && name.length > 50) {
      newErros.name = "Full Name should be below 50 characters";
    }

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    // if (!description) {
    //   newErros.description = "Please enter description";
    // } else if (description && description.length > 30) {
    //   newErros.description = "description should be below 30 charecters";
    // }

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


  const handleValidationThird = () => {
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { name, contact_no, email, description } = formFields;

    if (!contact_no) {
      newErros.contact_no = "Please Enter Contact No";
    } else if (contact_no && contact_no.length > 10) {
      newErros.contact_no = "Contact No should be below 10 characters";
    } else if (contact_no && contact_no.length < 10) {
      newErros.contact_no = "Contact No should be  10 characters";
    }
    if (!name) {
      newErros.name = "Please Enter Full Name";
    } else if (name && !regText.test(name)) {
      newErros.name = "Full Name should be text";
    } else if (name && name.length > 50) {
      newErros.name = "Full Name should be below 50 characters";
    }

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    if (!description) {
      newErros.description = "Please enter description";
    }

    return newErros;
  };

  const handelSubmit = async (eee) => {
    const handleValidationObject = handleValidationThird();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      try {
        const payload = {
          name:formFields.name,
          city: formFields.city,
          requirment_type: requirment_type,
          property_type: property_type,
          contact_no: formFields.contact_no,
          email: formFields.email,
          description: formFields.description,
          // category: "contactus",
        };
        console.log(payload, "payload");
        const loginApi = await ApiService.postData(
          "/listing_requirment",
          payload
        );
        console.log(loginApi, "listing_requirment ==>");

        if (loginApi.error == false) {
          // toast.success("Contact Details Submitted Successful");
          setShowModalaPopup(true);

          const arr = { ...formFields };
          arr.city = "";
          arr.requirment_type = "";
          arr.property_type = "";
          arr.contact_no = "";
          arr.email = "";
          arr.description = "";
          setFormFields(arr);
          // setTimeout(() => {
          //   window.location.reload();
          // }, 1000);
        } else {
          toast.error("dd");
        }
      } catch (error) {
        toast.error(error.message, "Please Fill Up All Fields");
      }
    }
  };


  const requirementOptions = [
    { value: 'Buy', label: 'Buy' },
    { value: 'Sell', label: 'Sell' },
    { value: 'Lease', label: 'Lease' },
    { value: 'Interior', label: 'Interior' },
  ];

  const propertyOptions = [
    { value: 'Office', label: 'Office' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Warehouse', label: 'Warehouse' },
    { value: 'Residential', label: 'Residential' },
    { value: 'Land', label: 'Land' },
  ];
  return (
    <>
      <Helmet>
        <title>Reach Out to Realistic Realtors for Your Real Estate Needs


        </title>
        <meta name="description" content="Utilize our convenient contact form to get in touch with Realistic Realtors and receive prompt assistance with your real estate inquiries and requirements.

" />
      </Helmet>
      <h1 className="medium-heading1012 ap-head shadow-sm px-4 "> List Your Requirement</h1>
      <div className="row listYourReqBg pb-3">
        <div className="col-md-6  listyour">
          <img src={propertyFormImage} className="listyourimage " />
        </div>

        {first && (
          <div className="col-md-6 row g-0 listYourReqBg">
            <div>
              <div className="m-2 p-3">
                <p className="small-text small-text7 pcfp-r-smll-head mt-3 list-form  pt-md-3 my-5">
                  List your requirement{" "}
                </p>
                <h2 className="large-heading">
                  What is your <br /> requirement ?
                </h2>
                <div className="">
                  <Form.Group className=" w-100 my-0" controlId="formBasicEmail">
                    <Form.Label className="labletext">City <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the city"
                      className="cup-f-tf ls-email-f-in"
                      onChange={handleOnChange}
                      name="city"
                      value={formFields.city}
                      required
                    />
                    <p className="text-danger">{formError.city}</p>
                  </Form.Group>

                  <Form.Group className=" w-100 my-3" controlId="formBasicEmail">
                    <Form.Label className="labletext">
                      Select Your Requirement <span className="text-danger">*</span>
                    </Form.Label>
                    {/* Replace the Form.Select with react-select */}
                    <Select
                      options={requirementOptions}
                      onChange={(selectedOption) => setRequirment_type(selectedOption.value)}
                      placeholder="Select Requirement type"
                    />
                    <p className="text-danger">{formError.requirment_type}</p>
                  </Form.Group>
                  <Form.Group className=" w-100 my-3" controlId="formBasicEmail">
                    <Form.Label className="labletext">Property Type <span className="text-danger">*</span></Form.Label>
                    {/* Replace the Form.Select with react-select */}
                    <Select
                      options={propertyOptions}
                      onChange={(selectedOption) => setProperty_type(selectedOption.value)}
                      placeholder="Select Property type"
                    />
                    <p className="text-danger">{formError.property_type}</p>
                  </Form.Group>
                </div>
                <div className="w-100 text-end mb-3 mr-2 d-flex justify-content-end">
                  <div onClick={Nextform} style={{ marginRight: "5px" }}>
                    <Button
                      style={buttonStyle}
                      title="Next"
                      className="nextbtn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 bottom-box align-items-end ">
              <div className="col-10">.</div>
              <div className="col-2">.</div>
            </div>
          </div>
        )}

        {second && (
          <div className="col-md-6 row  g-0 listYourReqBg">
            <div>
              <div className="p-3 m-2 mt-5">
                <h2 className="large-heading mt-5">
                  Enter your Contact
                  <br /> Details.

                </h2>
                <div className="mt-1">
                  <input
                    type="text"
                    className="cup-f-tf ls-email-f-in w-100 "
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handleOnChange}
                    value={formFields.name}
                  />
                  <p className="text-danger">{formError.name}</p>

                  <input
                    type="tel"
                    className="cup-f-tf ls-email-f-in w-100"
                    placeholder="Enter Phone Number"
                    name="contact_no"
                    onChange={handleOnChange}
                    value={formFields.contact_no}
                    onKeyDown={handleKeyDown}

                    maxLength={10}
                  />

                  <p className="text-danger">{formError.contact_no}</p>

                  <input
                    type="text"
                    className="cup-f-tf ls-email-f-in w-100"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleOnChange}
                    value={formFields.email}
                  />
                  <p className="text-danger">{formError.email}</p>
                </div>
                <div className="w-100 text-end mb-3 mr-2 d-flex justify-content-end">
                  <div onClick={backForm} style={{ marginRight: "5px" }}>
                    <Button
                      style={buttonStyle}
                      title="Prev"
                      className="nextbtn"
                    />
                  </div>
                  <div onClick={Nextform2} style={{ marginRight: "5px" }}>
                    <Button
                      style={buttonStyle}
                      title="Next"
                      className="nextbtn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 bottom-box align-items-end">
              <div className="col-10">.</div>
              <div className="col-2">.</div>
            </div>
          </div>
        )}

        {third && (
          <div className="col-md-6 row g-0 listYourReqBg">
            <div>
              <div className="p-3 m-2">
                <h1 className="large-heading mt-5">Share Your Requirment.</h1>
                <div className="mt-5">
                  <textarea
                    rows="4"
                    type="text"
                    className="cup-f-tf ls-email-f-in w-100"
                    placeholder="Enter Message"
                    name="description"
                    onChange={handleOnChange}
                    value={formFields.description}
                  ></textarea>

                  <p className="text-danger">{formError.description}</p>
                </div>
                <div className="w-100 text-end mb-3 mr-2 d-flex justify-content-end">
                  <div onClick={backForm} style={{ marginRight: "5px" }}>
                    <Button
                      style={buttonStyle}
                      title="Prev"
                      className="nextbtn"
                    />
                  </div>
                  <div onClick={handelSubmit} style={{ marginRight: "5px" }}>
                    <Button
                      style={buttonStyle}
                      title="Submit"
                      className="nextbtn"
                    />
                  </div>
                </div>
                {/* <div className="w-100  mb-3 text-end mb-0">
                <div onClick={backForm} style={{ marginRight: "5px" }}>
                  <Button
                    style={buttonStyle}
                    title="Prev"
                    className="nextbtn"
                  />
                </div>
                <div className="pcfp-bottom-b-container">
                  <Button
                    style={buttonStyle}
                    title="Submit"
                    className="nextbtn"
                  />
                </div>
              </div> */}
              </div>
            </div>
            <div className="row g-0 align-items-end bottom-box">
              <div className="col-10">.</div>
              <div className="col-2">.</div>
            </div>
          </div>
        )}

        <ListPopup
          show={showModalaPopup}
          onHide={() => setShowModalaPopup(false)}
        ></ListPopup>
      </div>
    </>

  );
};

export default Listyourproperty;
