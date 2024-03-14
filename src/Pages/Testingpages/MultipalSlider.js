import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MultipalSlider() {
  const [data, setData] = useState([
    {
      name: "Harish",
      div: "A",
      image: [
        {
          img: "first",
        },
        {
          img: "second",
        },
      ],
    },
    {
      name: "adead",
      div: "B",
      image: [
        {
          img: "first img",
        },
        {
          img: "Second IMg",
        },
      ],
    },
  ]);

  const dd = data.map((ele) => console.log(ele.image[0]));
  //   console.log(dd);

  const navigate = useNavigate();

  const onClickDetails = (ele) => {
    console.log(ele, "eleeleeleele");
    navigate("/DetailsSlider", {
      state: {
        ele,
      },
    });
  };
  return (
    <div>
      <div>
        {data.map((ele) => (
          <>
            <p>{ele.name}</p>
            <p>{ele.div}</p>
            <p>{ele?.image[0].img} </p>
            <a onClick={() => onClickDetails(ele)}> click</a>
          </>
        ))}
      </div>
    </div>
  );
}

export default MultipalSlider;
