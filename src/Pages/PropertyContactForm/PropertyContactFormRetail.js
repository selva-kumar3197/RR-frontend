import React, { useState } from "react";
import "./PropertyContactForm.css";

import { ArrowLeft } from "react-bootstrap-icons";
import Button from "../../Components/Button/Button";

import ApiService from "../../service/ApiService";
import { ToastContainer, toast, Zoom } from "react-toastify";
const propertyFormImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/propertyFormImage.png";


const PropertyContactFormRetail = () => {
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
  const Nextform = () => {
    setFirst(false);
    setSecond(true);
    if (second) {
      setThird(true);
      setSecond(false);
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

  const [loadstate, setloadstate] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    contact_no: "",
    property_type: "",
    property_address: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    contact_no: "",
    property_type: "",
    property_address: "",
  });

  const handleOnChange = (e) => {
    const p = { ...formFields };
    p[e.target.name] = e.target.value;
    setFormFields(p);

    setFormError({
      ...formError,
      [e.target.name]: null,
    });
    // console.log(p, "Form");
  };
  const handleValidation = () => {
    // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { name, email, contact_no, property_type, property_address } =
      formFields;
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

    if (!contact_no) {
      newErros.contact_no = "Please Enter contact_no";
    } else if (contact_no && contact_no.length > 10) {
      newErros.contact_no = "contact_no should be below 10 charecters";
    } else if (contact_no && contact_no.length < 10) {
      newErros.contact_no = "contact_no should be  10 charecters";
    }

    if (!property_type) {
      newErros.property_type = "Please enter property_type";
    }
    if (!property_address) {
      newErros.property_address = "Please enter property_address";
    }

    return newErros;
  };

  const handelSubmit = async (eee) => {
    const handleValidationObject = handleValidation();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
      console.log(handleValidationObject, "handleValidationObject");
    } else {
      try {
        const user = JSON.parse(localStorage.getItem("userRR"));
        console.log(user._id, " useruseruser=>>");
        const payload = {
          name: formFields.name,
          email: formFields.email,
          contact_no: formFields.contact_no,
          property_type: formFields.property_type,
          property_address: formFields.property_address,
          description: formFields.message,
          userId: user._id,
          category: "user_property",
        };
        console.log(payload, "payload==>");
        setloadstate(true);
        const loginApi = await ApiService.postData(
          "/user/property_sell",
          payload
        );
        setloadstate(false);
        console.log(loginApi, "Login Data ==>");

        if (loginApi.error == false) {
          toast.success("Enlisting successful");
          const arr = { ...formFields };
          arr.name = "";
          arr.email = "";
          arr.contact_no = "";
          arr.property_type = "";
          arr.property_address = "";
          arr.message = "";
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

  return (
    <div className="pcfp-container">
      <div className="pcfp-l-cotnainer">
        <img src={propertyFormImage} className="pcfp-l-image" />
      </div>

      {first && (
        // <div className="pcfp-r-cotnainer">
        //   <ArrowLeft className="pcfl-back-icon" />
        //   <a
        //     style={{ marginLeft: "10px" }}
        //     className="small-text pcfl-back-icon cursor-pointer"
        //     onClick={backForm}
        //   >
        //     Go Back
        //   </a>
        //   <p className="small-text pcfp-r-smll-head mt-3 pt-3">
        //     List your property{" "}
        //   </p>
        //   <h1 className="large-heading">
        //     What city is your
        //     <br /> property in?
        //   </h1>
        //   <div className="mt-5">
        //     <input
        //       type="text"
        //       className="cup-f-tf ls-email-f-in w-75 mb-4"
        //       placeholder="Enter Property City"
        //       // onChange={handleOnChange}
        //       // name="property_address"
        //       // value={formFields.property_address}
        //     />
        //     {/* <p className="text-danger">{formError.property_address}</p> */}

        //     <input
        //       type="text"
        //       className="cup-f-tf ls-email-f-in w-75"
        //       placeholder="Enter Property Type"
        //       // onChange={handleOnChange}
        //       // name="property_type"
        //       // value={formFields.property_type}
        //     />
        //     {/* <p className="text-danger">{formError.property_type}</p> */}
        //   </div>
        //   <div className="pcfp-bottom-container">
        //     <div className="pcfp-bottom-b-container" onClick={Nextform}>
        //       <Button style={buttonStyle} title="Next" className="nextbtn" />
        //     </div>
        //     <div className="pcfp-bottom-loader-container">
        //       <div className="pcfp-bottom-loader-complete"></div>
        //       <div className=""></div>
        //       <div className=""></div>
        //     </div>
        //   </div>
        // </div>
        <div className="pcfp-r-cotnainer">
          <ArrowLeft className="pcfl-back-icon" />
          <a
            style={{ marginLeft: "10px" }}
            className="small-text pcfl-back-icon"
            onClick={backForm}
          >
            Go Back
          </a>
          <p className="small-text pcfp-r-smll-head pcfp-small-text">
            Select the service type
          </p>
          <h2 className="large-heading pcfp-head">
            What type of Retail Space are you looking for?
          </h2>
          <div className="pcfp-c-select-container">
            <select className="pcfp-c-select">
              <option value="1">Rent</option>
              <option value="2">Buy</option>
              <option value="2">Sell </option>
            </select>
          </div>
          <div className="pcfp-bottom-container">
            <div className="pcfp-bottom-b-container">
              <Button style={buttonStyle} title="Next" onClick={Nextform} />
            </div>
            <p className="pcfp-step">Step 1/4</p>
            <div className="pcfp-bottom-loader-container">
              <div className="pcfp-bottom-loader-complete"></div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      )}

      {second && (
        <div className="pcfp-r-cotnainer">
          <ArrowLeft className="pcfl-back-icon" />
          <a
            style={{ marginLeft: "10px" }}
            className="small-text pcfl-back-icon cursor-pointer"
            onClick={backForm}
          >
            Go Back
          </a>
          <p className="small-text pcfp-r-smll-head mt-3 pt-3">Enter Details</p>
          <h2 className="large-heading">
            Enter your Contact
            <br /> Details.
          </h2>
          <div className="mt-5">
            <input
              type="text"
              className="cup-f-tf ls-email-f-in w-75 mb-4"
              placeholder="Enter Your Name"
              // onChange={handleOnChange}
              // name="name"
              // value={formFields.name}
            />
            {/* <p className="text-danger">{formError.name}</p> */}

            <input
              type="text"
              className="cup-f-tf ls-email-f-in w-75"
              placeholder="Enter Phone Number"
              // onChange={handleOnChange}
              // name="contact_no"
              // value={formFields.contact_no}
            />
            {/* <p className="text-danger">{formError.contact_no}</p> */}
          </div>
          <div className="pcfp-bottom-container">
            <div className="pcfp-bottom-b-container" onClick={Nextform}>
              <Button style={buttonStyle} title="Next" className="nextbtn" />
            </div>
            <div className="pcfp-bottom-loader-container">
              <div className="pcfp-bottom-loader-complete"></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      )}

      {third && (
        <div className="pcfp-r-cotnainer">
          <ArrowLeft className="pcfl-back-icon" />
          <a
            style={{ marginLeft: "10px" }}
            className="small-text pcfl-back-icon cursor-pointer"
            onClick={backForm}
          >
            Go Back
          </a>
          <p className="small-text pcfp-r-smll-head mt-3 pt-3">Enter Details</p>
          <h1 className="large-heading">Share Your Properties Requirment.</h1>
          <div className="mt-5">
            <input
              type="text"
              className="cup-f-tf ls-email-f-in w-75 mb-4"
              placeholder="Enter Your Email"
              // onChange={handleOnChange}
              // name="email"
              // value={formFields.email}
            />
            {/* <p className="text-danger">{formError.email}</p> */}

            <input
              type="text"
              className="cup-f-tf ls-email-f-in w-75"
              placeholder="Enter Message"
              // onChange={handleOnChange}
              // name="message"
              // value={formFields.message}
            />
            {/* <p className="text-danger">{formError.message}</p> */}
          </div>
          <div className="pcfp-bottom-container">
            <div className="pcfp-bottom-b-container">
              <Button
                style={buttonStyle}
                title="Submit"
                className="nextbtn"
                // onClick={handelSubmit}
              />
            </div>
            <div className="pcfp-bottom-loader-container">
              <div className="pcfp-bottom-loader-complete"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyContactFormRetail;
