import React, { useState } from "react";
import "./LoginSignupModal.css";

import Modal from "react-bootstrap/Modal";
import { Apple, Google } from "react-bootstrap-icons";
import authservice from "../../service/auth/Authservice";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { Spinner } from "react-bootstrap";
import Register from "./Register";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user";
import LazyLoad from "react-lazy-load";
let googlelogo = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/google.png";
let loginsignupImage = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/loginsignupImage.png";
const LoginSignupModal = (props) => {
  // const navigate = useNavigate();

  const [logincomponent, setLogincomponent] = useState(true);
  const [registercomponent, setRegistercomponent] = useState(false);
  const [loginData, setLoginData] = useState();
  const [loadstate, setloadstate] = useState(false);

  const { details, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  dispatch(setUser());

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const handleValidation = () => {
    // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { password, email } = formFields;

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    if (!password) {
      newErros.password = "Please enter password";
    } else if (password && password.length > 6) {
      newErros.password = "Password should be below 6 charecters";
    }

    return newErros;
  };

  const handleOnChange = (e) => {
    const p = { ...formFields };
    p[e.target.name] = e.target.value;
    setFormFields(p);

    setFormError({
      ...formError,
      [e.target.name]: null,
    });
  };

  const youhaveaccount = () => {
    setLogincomponent(true);
    setRegistercomponent(false);
  };

  const youdonthaveaccount = () => {
    setLogincomponent(false);
    setRegistercomponent(true);
  };

  const HandelLogin = async () => {
    const handleValidationObject = handleValidation();
    if (Object.keys(handleValidationObject).length > 0) {
      setFormError(handleValidationObject);
    } else {
      try {
        const payload = {
          email: formFields.email,
          password: formFields.password,
        };
        setloadstate(true);
        const loginApi = await authservice.login(payload);
        setloadstate(false);

        if (loginApi.error == false) {
          const user = loginApi.data;
          localStorage.setItem("userRR", JSON.stringify(user));
          dispatch(setUser(user));

          toast.success("Login Successful");
          const arr = { ...formFields };
          arr.email = "";
          arr.password = "";
          setFormFields(arr);
          console.log(loginApi, " Login Data ==>");
          setLoginData(JSON.parse(localStorage.getItem("userRR")));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Email is not registered");
        }
      } catch (error) {
        toast.error(error.message, "Please Fill Up All Fields");
      }
    }
  };

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
        setloadstate(true);

        const loginApi = await authservice.signup(payload);
        setloadstate(false);

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
    <>
      <ToastContainer autoClose={2000} delay={1000} limit={1} />
      <Modal {...props} dialogClassName="modal-width-manager" centered>
        <Modal.Body>
          {/* Login Component */}
          {logincomponent && (
            <div className="ls-modal-container">
              <div className="ls-m-l-c login-mobile">
              <LazyLoad>
              <img
                  alt="signup login image"
                  className="ls-image"
                  src={loginsignupImage}
                />
              </LazyLoad>
               
              </div>
              <div className="ls-m-r-c px-3 ls-m-r-c-mobile">
                <span className="ls-close-container" onClick={props.onHide}>
                  X
                </span>
                <h2 className="ls-heading large-heading">Sign In</h2>
                <p className="small-text theme-grey-text large-heading-subtext">
                  We do not collect any personal information from a visitor to
                  our site unless that visitor.
                </p>
                <div className="social-ls-contianer">
                <LazyLoad>
                <div className="s-ls-element-contianer">
                    {/* <Google className="social-icon-ls" /> */}
                    <img src={googlelogo} />
                    <p className="small-text theme-grey-text social-heading-ls">
                      Continue with Google
                    </p>
                  </div>
                </LazyLoad>
               
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
                      value={formFields.email}
                      onChange={handleOnChange}
                    />{" "}
                    <span className="text-danger">{formError.email}</span>
                  </div>
                  <div className="cup-f-tf-container">
                    <label className="small-text ls-email-f-email">
                      Password
                    </label>
                    <input
                      type={"password"}
                      className="cup-f-tf ls-email-f-in"
                      name="password"
                      value={formFields.password}
                      onChange={handleOnChange}
                    />
                    <span className="text-danger">{formError.password}</span>
                  </div>
                  <button className="ls-email-s-butn" onClick={HandelLogin}>
                    {loadstate ? (
                      <Spinner animation="border" variant="Primary" size="sm" />
                    ) : (
                      <span>Continue</span>
                    )}
                  </button>
                </div>
                <p className="small-text ls-email-f-email ls-bottom-altr-text">
                  You don't have an account?
                  <span
                    className="theme-voilet-text optional-tex-bottom"
                    onClick={youdonthaveaccount}
                  >
                    {" "}
                    Create account
                  </span>
                </p>
              </div>
            </div>
          )}
          {/* Registration Component */}
          {registercomponent && (
            <div className="ls-modal-container">
            <LazyLoad>
            <div className="ls-m-l-c login-mobile">
                <img
                  alt="signup login image"
                  className="ls-image"
                  src={loginsignupImage}
                />
              </div>
            </LazyLoad>
           
              <div className="ls-m-r-c px-3 ls-m-r-c-mobile">
                <span className="ls-close-container" onClick={props.onHide}>
                  X
                </span>
                <h1 className="ls-heading large-heading">Sign up </h1>
                <p className="small-text theme-grey-text large-heading-subtext">
                  We do not collect any personal information from a visitor to
                  our site unless that visitor.
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
                    <span className="text-danger">
                      {registrationFormError.email}
                    </span>
                  </div>
                  <div className="cup-f-tf-container">
                    <label className="small-text ls-email-f-email">
                      Password
                    </label>
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
                    {loadstate ? (
                      <Spinner animation="border" variant="Primary" size="sm" />
                    ) : (
                      <span>Continue</span>
                    )}
                  </button>
                </div>
                <p className="small-text ls-email-f-email ls-bottom-altr-text">
                  Alread have an account?
                  <span
                    className="theme-voilet-text optional-tex-bottom"
                    onClick={youhaveaccount}
                  >
                    {" "}
                    LOG IN
                  </span>
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginSignupModal;
