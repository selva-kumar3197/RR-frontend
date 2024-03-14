import Modal from "react-bootstrap/Modal";
import React from "react";
import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazy-load";
let xicon = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/xicon.png"


function PopupFeedback(props) {
  // let location = useLocation();
  // console.log(location.state, "location");

  const modal = {
    fontFamily: "Canela",
    fontStyle: "normal",
    fontWeight: 100,
    fontSize: "36px",
    lineHeight: "110%",
    color: "#403663",
  };

  return (
    <div>
      <Modal
        // {...props}
        show={props.show}
        dialogClassName="modal-width-manager"
        centered
      >
        <Modal.Body>
          <span className="ls-close-container" onClick={props.onHide}>
          <LazyLoad>
          <img src={xicon} alt="xicon" height="16px" width="16px" />
          </LazyLoad>
          </span>
          <div
            style={{
              backgroundColor: " #FCFBFA;",
              borderRadiusadius: "12px",
              padding: "40px",
            }}
          >
            <h1 style={modal} className="text-center">
            We appreciate your time. <br /> Thank you for your valuable feedback!
            </h1>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopupFeedback;
