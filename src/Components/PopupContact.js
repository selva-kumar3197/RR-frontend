import Modal from "react-bootstrap/Modal";
import React from "react";
import { useLocation } from "react-router-dom";

function PopupContact(props) {
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
            X
          </span>
          <div
            style={{
              backgroundColor: " #FCFBFA;",
              borderRadiusadius: "12px",
              padding: "40px",
            }}
          >
            <h1 style={modal} className="text-center">
              Contact details successfully submitted. Thank you!
            </h1>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PopupContact;
