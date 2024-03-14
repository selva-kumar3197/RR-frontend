import React, { useState } from "react";
import "./ContactUs.css";
import { Helmet } from 'react-helmet';

import { Spinner } from "react-bootstrap";
import ApiService from "../../service/ApiService";
import { ToastContainer, toast, Zoom } from "react-toastify";
import PopupContact from "../../Components/PopupContact";
import LazyLoad from "react-lazy-load";
let facebook = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/facebookDark.png";
let linkedin = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/linkedinDark.png";
let insta = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/instaDark.png";
let youtube = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/youtubDark.png";
let Map = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/ContactMap.png";


const ContactUs = () => {
  const buttonStyle = {
    border: "unset",
    backgroundColor: "#221D35",
    color: "#FFF",
    fontSize: "16px",
    padding: "10px 40px",
    marginTop: "2em",
  };

  const [loadstate, setloadstate] = useState(false);
  const [showModalaPopup, setShowModalaPopup] = useState(false);

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
    // const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regText = /[A-Za-z]/;
    const rangEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const newErros = {};
    const { name, email, number, message } = formFields;
    if (!name) {
      newErros.name = "Please Enter Full Name";
    } else if (name && !regText.test(name)) {
      newErros.name = "Full Name should be text";
    } else if (name && name.length > 50) {
      newErros.name = "name should be below 50 characters";
    }

    if (!email) {
      newErros.email = "Please Enter Email";
    } else if (email && !rangEmail.test(email)) {
      newErros.email = "Please Enter Corect Email";
    }

    if (!number) {
      newErros.number = "Please Enter number";
    } else if (number && number.length > 10) {
      newErros.number = "Number should be below 10 characters";
    } else if (number && number.length < 10) {
      newErros.number = "Number should be  10 characters";
    }

    if (!message) {
      newErros.message = "Please enter Message";
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
          mobile_no: formFields.number,
          description: formFields.message,
          category: "contactus",
        };
        setloadstate(true);
        const loginApi = await ApiService.postData("/create_user", payload);
        setloadstate(false);
        console.log(loginApi, "Login Data ==>");

        if (loginApi.error == false) {
          // toast.success("Contact Details Submitted Successful");
          setShowModalaPopup(true);

          const arr = { ...formFields };
          arr.name = "";
          arr.email = "";
          arr.number = "";
          arr.message = "";
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
  

  return (
    <>
      <Helmet>
        <title>Get in Touch with Our Experienced Real Estate Team


        </title>
        <meta name="description" content="Contact Realistic Realtors to connect with our knowledgeable real estate professionals. Whether you're buying, selling, or need expert advice.


" />
      </Helmet>
      <h2 className="medium-heading1012 ap-head shadow-sm"> Contact Us</h2>

      <ToastContainer autoClose={2000} delay={1000} limit={1} />

      <div className="cup-container page-noice-bg">
        <div className="u-banner-container mv-container">
          <div className="u-banner-bg-contianer cup-BG">
            <div className="u-banner-bottom-div">
              <h1 className="medium-heading u-banner-heading text-white">
                Send us a letter
              </h1>
              <div className="nullhello">
                <p className="small-text text-white u-banner-small-text">
                  Write to us for any query.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="u-banner mv-banner">
          <p className="medium-heading mv-head">Send us a letter</p>
          <p className="small-text mv-text">Write to us for any query.</p>
        </div>

        <div className="cup-sec-2-container ">
          <div className="cup-2-l">
            <div className="green-block"></div>
            <h2 className="cup-2-heading">Find us here</h2>
            <p className="small-text55 small-text cup-sub-heading">
              <b>Office Address</b>
            </p>
            <p className="small-text55 small-text theme-grey-text">
              316 , 3rd Floor, Time Tower, MG Road, Gurugram, Haryana
            </p>

            <p className="small-text55 small-text cup-sub-heading">
              <b>Our Phone Numbers</b>
            </p>
            <p className="small-text55 small-text t-d-l theme-grey-text">
              18001230396
            </p>
            <p className="small-text55 small-text t-d-l theme-grey-text">
              01244707000
            </p>

            <p className="small-text55 cup-sub-heading">
              <b>Our Email</b>
            </p>
            <p className="small-text55 t-d-l theme-grey-text">info@rrpl.net</p>

            <p className="small-text55 cup-sub-heading">
              <b>Our Socials</b>
            </p>
            <div className="a-d-p-social-container cup-m-un">
              <LazyLoad>
                <div className="social-icons-contianer">
                  <a
                    href="https://www.facebook.com/realisticrealtors"
                    target="_blank"
                  >
                    <img
                      src={facebook}
                      className="mx-1  h-100"
                      alt="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/realistic-realtors/"
                    target="_blank"
                  >
                    <img
                      src={linkedin}
                      className="mx-1 h-100"
                      alt="social-icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/realistic.realtors/?igshid=NTdlMDg3MTY%3D"
                    target="_blank"
                  >
                    <img src={insta} className="mx-1 h-100" alt="social-icon" />
                  </a>
                  <a
                    href="https://www.youtube.com/user/RealisticRealtors"
                    target="_blank"
                  >
                    <img src={youtube} className="mx-1 h-100" alt="social-icon" />
                  </a>

                </div>
              </LazyLoad>

            </div>
          </div>

          <div className="cup-2-r">
          <iframe
 
    src="https://www2.realisticrealtors.com/l/1035263/2023-07-19/2b7y"
    width="100%"
    height="500"
    type="text/html"
    frameborder="0"
    allowTransparency="true"
   
 
  ></iframe>
  
 
        
            {/* <div className="cup-f-tf-container">
              <label className="small-text55 theme-grey-text">Name</label>
              <input
                type="text"
                className="cup-f-tf"
                onChange={handleOnChange}
                name="name"
                value={formFields.name}
              />
              <p className="text-danger">{formError.name}</p>
            </div>
            <div className="cup-f-tf-container cup-f-tf-c-top-mar">
              <label className="small-text55 theme-grey-text">Email</label>
              <input
                type="email"
                className="cup-f-tf"
                onChange={handleOnChange}
                name="email"
                value={formFields.email}
              />
              <p className="text-danger">{formError.email}</p>
            </div>
            <div className="cup-f-tf-container cup-f-tf-c-top-mar">
              <label className="small-text55 theme-grey-text">Phone</label>
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
            <div className="cup-f-tf-container cup-f-tf-c-top-mar">
              <label className="small-text55 theme-grey-text">Message</label>
              <textarea
                className="cup-f-tf"
                rows="4"
                cols="50"
                onChange={handleOnChange}
                name="message"
                value={formFields.message}
              ></textarea>
              <p className="text-danger">{formError.message}</p>
            </div>
     
            <button
              // style={buttonStyle}
              className="button-componet-container dark-bg-white-color art-home-button mt-3 px-5"
              onClick={handelSubmit}
            >
              {loadstate ? (
                <Spinner animation="border" variant="Primary" size="sm" />
              ) : (
                <span>Send</span>
              )}
            </button> */}
          </div>
        </div>
        <img className="map" src={Map} alt="map" />

        <div className="row m-auto contactus-secon-div pb-5 bg-conct cup-sec-2-container_below_section">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.042755921442!2d77.07396171491806!3d28.478258997797663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d191f5b587a37%3A0x3f449b3101c4eaba!2sRealistic%20Realtors!5e0!3m2!1sen!2sin!4v1669188305782!5m2!1sen!2sin"
              width="100%"
              height="600"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
        
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="mv-address">
              <div className="u-banner mv-contact-item">
                <h1 className="medium-heading mv-item-head my-4">
                  We have Offices at:
                </h1>
              </div>
              <div className="address">
                <div className="contact-details-first-address">
                  <p className="small-text5 cup-sub-heading contact-details-items first-address">
                    <b>Corporate Office</b>
                  </p>
                  <p className="small-text5 contact-details-items2 first-address">
                    316 , 3rd Floor, Time Tower, MG Road, Gurugram, Haryana.
                  </p>
                </div>
              </div>
              <div className="address mt-3">
                <div className="contact-details-first-address">
                  <p className="small-text5 cup-sub-heading contact-details-items first-address">
                    <b>Noida </b>
                  </p>
                  <p className="small-text5 contact-details-items2 first-address">
                    AWFIS Space Solutions Ground Floor, Plot No.21, Sector 25
                    Noida 201301
                  </p>
                </div>
              </div>
              <div className="address2">
                <div className="contact-details-first-address">
                  <p className="small-text5 cup-sub-heading contact-details-items first-address">
                    <b>Central Delhi</b>
                  </p>
                  <p className="small-text5 contact-details-items2 first-address">
                    410-411, 4th Floor, Ambadeep Building, 14 K.G Marg,
                    Connaught Place, New...
                  </p>
                </div>
              </div>
              {/* <div className="address3">
                <div className="contact-details">
                  <p className="small-text cup-sub-heading contact-details-items">
                    <b>South Delhi</b>
                  </p>
                  <p className="small-text contact-details-items2">
                    218, 219 - 220, 2nd Floor, Ansal Tower, Nehru Place, New Delhi –
                    110019
                  </p>
                </div>
              </div> */}
              <div className="address4">
                <div className="contact-details-first-address">
                  <p className="small-text5 cup-sub-heading contact-details-items first-address">
                    <b>Ahmedabad</b>
                  </p>
                  <p className="small-text5 contact-details-items2 first-address">
                    Office No. 114,316, Fourth Floor, Addor, Aspire, University
                    to Panjrapole Road,...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PopupContact
          show={showModalaPopup}
          onHide={() => setShowModalaPopup(false)}
        ></PopupContact>
      </div>
    </>
  );
};

export default ContactUs;
