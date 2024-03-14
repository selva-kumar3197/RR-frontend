import React from "react";
import "./PropertyContact.css";
import { Helmet } from 'react-helmet';


import Button from "../../Components/Button/Button";

const PropertyContact = () => {
  const buttonStyle = {
    color: "#403663",
    border: "unset",
    marginTop: "3em",
  };

  return (
 <>
    <Helmet>
        <title>Contact Us for Property Inquiries: Realistic Realtors


</title>
        <meta name="description" content="Reach out to Realistic Realtors for all your property inquiries. Our dedicated team is here to assist you promptly and professionally.


" />
      </Helmet>
     <div className="pcp-content page-noice-bg">
      <div className="pcp-content-bg-container">
        <div className="pcp-banner-content-cotnainer">
          <h1 className="large-heading pcp-b-heading desktop-pcp-head text-white">
            Looking for Real Estate solutions? You’re at the right place.
          </h1>
          <h2 className="large-heading pcp-b-heading mobile-pcp-head">
            Looking for Real<br /> Estate solutions?<br /> You’re at the right<br /> place.
          </h2>
          <a href="/mandated-properties">
            <Button style={buttonStyle} title={"Find me a property"} />
          </a>
        </div>
      </div>
    </div>
 </>
  );
};

export default PropertyContact;
