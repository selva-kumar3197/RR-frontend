import React, { useEffect, useState } from "react";

import "./Rewards.css";


import authservice from "./../../service/aboutusService/RewardsService";
import ApiService from "../../service/ApiService";
const Rewards = () => {
  const [loadstate, setloadstate] = useState(false);

  const [rewards, setRewards] = useState([]);
  useEffect(() => {
    RewardsList();
    console.log("Hello");
  });

  const RewardsList = async () => {
    const data = await ApiService.getData("/category/awards");
    setRewards(data);
  };

  return (
    <>
      <h2 className="medium-heading1012 ap-head shadow-sm">  Awards & Affiliations</h2>
      <div className="rap-container page-noice-bg">
        <div className="u-banner-container reward-container">
          <div className="u-banner-bg-contianer rap-BG ">
            <div className="u-banner-bottom-div">
              <h1 className="medium-heading u-banner-heading">
                Awards & Affiliations
              </h1>
              <p className="u-banner-small-text ">What inspires us.</p>
            </div>
          </div>
        </div>

        <div className="rap-rewards-cotnainer">
          {rewards ? (
            rewards.map((e, i) => {
              return (
                <div key={i} className="rap-reward py-5">
                  <img className="rap-reward-image" src={e?.image} />
                  <p className="small-text56 rap-reward-heading text-center">
                    {e?.title}
                  </p>
                </div>
              );
            }).reverse()
          ) : (
            <p className="large-heading"> Loading...</p>
          )}

          {rewards ? (
            rewards.length == 0 ? (
              <p className="large-heading"> Loading...</p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>

  );
};

export default Rewards;
