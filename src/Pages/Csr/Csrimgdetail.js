import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Csrimgdetail() {
  const { state } = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    setData(state.ele);
    // setUserId(JSON.parse(localStorage.getItem("userRR")));

  }, [data]);
  console.log(data)
  let gallery_image = [
    { image: data?.image },
    { image: data?.image1 },
    { image: data?.image2 },
    { image: data?.image3 },
    { image: data?.image4 },
    { image: data?.image5 },
    { image: data?.image6 },
    { image: data?.image7 }
  ];
  return (
    <div>
      <div className="csr_main">
        <p className="csrtitled text-center">{data?.title}</p>

        <div className="row">
          {gallery_image?.map((ele) => (
            <div className="col-md-6 p-md-5 p-3 ">
              {ele?.image ? <img src={ele.image} alt="csr_image" className="csrimg " /> : ""}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Csrimgdetail;
