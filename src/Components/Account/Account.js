import React from "react";
import Storage from "../../service/Storage";
import AccountPropertiesArticle from "../../Components/AccountPropertiesArticle/AccountPropertiesArticle";
import "./Account.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "../../Components/Button/Button";

function Account() {
  const [overview, setOverview] = React.useState("");

  const handleChange = (event) => {
    setOverview(event.target.value);
  };

  const handelClicklogOut = () => {
    localStorage.removeItem("userRR");
    window.location.reload();
  };
  return (
    <div className="account-container">
      <div className="account-1 m-4 mobile-account-head">
        <div className="account-mobile-logot">
          <div>
            <h3 className="account-name">Account</h3>
          </div>
          <div className=" mobile-logot">
            <ul className="logot-text">
              <li
                className="list-unstyled    fontMetropolis cursor-pointer"
                onClick={handelClicklogOut}
              >
                <a href="/" className="text-decoration-account">
                  {" "}
                  Log Out{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <ul className="p-0">
            <li className="list-unstyled my-2 colour-voilet fontMetropolis cursor-pointer">
              Saved Properties
            </li>
            <li className="list-unstyled  my-2 fontMetropolis cursor-pointer">
              User Information
            </li>
            <li className="list-unstyled  my-2 fontMetropolis cursor-pointer">
              Listing requests
            </li>
          </ul>
        </div>
        <div className="mobile-mandated-drop">
          <FormControl variant="standard" style={{ Width: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Accounts
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={overview}
              onChange={handleChange}
              label="Accounts"
            >
              <MenuItem value={10}>Saved Properties</MenuItem>
              <MenuItem value={20}>User Information</MenuItem>
              <MenuItem value={30}>Listing requests</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="pt-5 mt-5">
          <ul className="p-0 pt-5 mt-4">
            <li
              className="list-unstyled    fontMetropolis cursor-pointer"
              onClick={handelClicklogOut}
            >
              <a href="/" className="text-decoration-none">
                {" "}
                Log Out{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="account-2 pt-6">
        <div className="row justify-content-between mandated-section-two-sub-section-two">
          <div className="col-md-6">
            <AccountPropertiesArticle />
          </div>
          <div className="col-md-6">
            <AccountPropertiesArticle />
          </div>
        </div>
      </div>
      <div className="account-button">
        <a href="/articles">
          <Button
            className={"dark-bg-white-color account-load-button"}
            title={"Load more"}
          />
        </a>
      </div>
    </div>
  );
}

export default Account;
