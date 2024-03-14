import Modal from "react-bootstrap/Modal";
import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button/Button";
// import Button from "../../Components/Button/Button";

function ListPopup(props) {
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

  const BannerButtonMobile = {
    marginTop: "2em",
    padding: "12px 100px",
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
            <a href="/" className="text-white">
              {" "}
              X
            </a>
          </span>
          <div
            style={{
              backgroundColor: " #FCFBFA;",
              borderRadiusadius: "12px",
              padding: "40px",
            }}
          >
            <h1 style={modal} className="text-center">
              Your requirement is successfully submitted. Thank you!
            </h1>
            <div className="text-center m-auto">
              <a href="/">
                <Button
                  className={"dark-bg-white-color art-home-button mt-4"}
                  title={"OK"}
                />
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ListPopup;
