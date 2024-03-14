import React from "react";
import { useLocation } from "react-router-dom";

function DetailsSlider() {
  const { state } = useLocation();
  console.log(state, "statestate");
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default DetailsSlider;
