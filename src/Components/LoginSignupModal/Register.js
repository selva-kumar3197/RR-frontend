import React, { useState } from "react";
import "./LoginSignupModal.css";

import Modal from "react-bootstrap/Modal";
import { Apple, Google } from "react-bootstrap-icons";

import authservice from "../../service/auth/Authservice";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Spinner } from "react-bootstrap";
import LazyLoad from "react-lazy-load";
let loginsignupImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/loginsignupImage.png";
function Register(props) {
  const [registrationFormFields, setRegistrationFormFields] = useState({
    email: "",
    password: "",
  });

  const [registrationFormError, setRegistrationFormError] = useState({
    email: "",
    password: "",
  });

  const RegistrationHandleValidation = () => {
    // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { password, email } = registrationFormFields;

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    if (!password) {
      newErros.password = "Please enter password";
    } else if (password && password.length < 6) {
      newErros.password = "Password should be minimum 6 charecters";
    }

    return newErros;
  };

  const handleRegistartionOnChange = (e) => {
    const p = { ...registrationFormFields };
    p[e.target.name] = e.target.value;
    setRegistrationFormFields(p);

    setRegistrationFormError({
      ...registrationFormError,
      [e.target.name]: null,
    });
  };

  const handelregister = async () => {
    const RegistrationHandleValidationObject = RegistrationHandleValidation();
    if (Object.keys(RegistrationHandleValidationObject).length > 0) {
      setRegistrationFormError(RegistrationHandleValidationObject);
    } else {
      console.log("Working");
      try {
        const payload = {
          email: registrationFormFields.email,
          password: registrationFormFields.password,
        };
        // setloadstate(true);

        const loginApi = await authservice.signup(payload);
        // setloadstate(false);

        if (loginApi.error == false) {
          toast.success("Registration successful ");
          console.log(loginApi);
          const arr = { ...registrationFormFields };
          arr.email = "";
          arr.password = "";
          setRegistrationFormFields(arr);
        } else {
          toast.error(loginApi.message);
        }
      } catch (error) {
        console.log(error, "error");
        toast.error(error);
      }
    }
  };
  return (
    <div>
      <div className="ls-modal-container">
        <div className="ls-m-l-c">
        <LazyLoad>
        <img
            alt="signup login image"
            className="ls-image"
            src={loginsignupImage}
          />
        </LazyLoad>
       
        </div>
        <div className="ls-m-r-c px-3">
          <span className="ls-close-container" onClick={props.onHide}>
            X
          </span>
          <h1 className="ls-heading large-heading">Register </h1>
          <p className="small-text theme-grey-text large-heading-subtext">
            We do not collect any personal information from a visitor to our
            site unless that visitor.
          </p>
          <div className="social-ls-contianer">
            <div className="s-ls-element-contianer">
              <Google className="social-icon-ls" />
              <p className="small-text theme-grey-text social-heading-ls">
                Continue with Google
              </p>
            </div>
            <div className="s-ls-element-contianer">
              <Apple className="social-icon-ls" />
              <p className="small-text theme-grey-text social-heading-ls">
                Continue with Apple
              </p>
            </div>
          </div>
          <div className="ls-or-devider-contianer">
            <div className="ls-or-devider-border"></div>
            <p className="small-text ls-or-devider-or">OR</p>
            <div className="ls-or-devider-border"></div>
          </div>
          <div className="ls-email-f-container">
            <div className="cup-f-tf-container">
              <label className="small-text ls-email-f-email">Email</label>
              <input
                type="email"
                className="cup-f-tf ls-email-f-in"
                name="email"
                value={registrationFormFields.email}
                onChange={handleRegistartionOnChange}
              />
              <span className="text-danger">{registrationFormError.email}</span>
            </div>
            <div className="cup-f-tf-container">
              <label className="small-text ls-email-f-email">Password</label>
              <input
                type="password"
                className="cup-f-tf ls-email-f-in"
                name="password"
                value={registrationFormFields.password}
                onChange={handleRegistartionOnChange}
              />
              <span className="text-danger">
                {registrationFormError.password}
              </span>
            </div>
            <button className="ls-email-s-butn" onClick={handelregister}>
              <span>Continue</span>
            </button>
          </div>
          <p className="small-text ls-email-f-email ls-bottom-altr-text">
            Alread have an account?
            <span className="theme-voilet-text optional-tex-bottom">
              {" "}
              LOG IN
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
