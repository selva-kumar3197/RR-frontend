import React from "react";

import "./Mainbaner.css";
function Mainbaner() {
  const BannerButton = {
    marginTop: "2em",
    padding: "13px 30px",
  };
  return (
    <>
   

      <div className="container-fluid homepage-bgimage"></div>
      <p>
        This example creates a full page background image. Try to resize the
        browser window to see how it always will cover the full screen (when
        scrolled to top), and that it scales nicely on all screen sizes.
      </p>
    </>
  );
}

export default Mainbaner;
