import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionView from "../../Components/SectionView/SectionView";


import Aos from "aos";
function WarehouseSlider() {
  useEffect(() => {
    Aos.init();
  });
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {" "}
      <div className="container homeslider pb-5 pt-2">
        <div className="row my-3 text-center">
          <div className="col-md-12 mt-3">
            <h2 className="newSectiontext">
              We Understand What You Are Looking For
            </h2>
          </div>
        </div>
        <Slider {...settings} className="interior">
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p
              className="slide-card-heading1"
              style={{
                width: "300px",
              }}
            >
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                01{" "}
              </span>
              Location
            </p>

            <p className="slide-discription1 mt-4 ">
              Strategically located warehouse to save time & cost
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                02{" "}
              </span>{" "}
              Compliance
            </p>

            <p className="slide-discription1 mt-4 ">
              Legally compliant to ensure usage permissions & safety norms
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p
              className="slide-card-heading1"
              style={{
                width: "300px",
              }}
            >
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                03{" "}
              </span>
              Dock Design
            </p>

            <p className="slide-discription1 mt-4 ">
              Offering high efficiency & fulfilling the shipping requirements
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                04{" "}
              </span>{" "}
              Ceiling Height
            </p>

            <p className="slide-discription1 mt-4 ">
              To ensure the maximum utilisation of the three-dimensional space
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                05{" "}
              </span>{" "}
              Floor Load Capacity
            </p>

            <p className="slide-discription1 mt-4 ">
              To support stationary loads & movement without any damage
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                06{" "}
              </span>
              Ventilation Design
            </p>

            <p className="slide-discription1 mt-4 ">
              To offer comfort & safety to the occupier
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default WarehouseSlider;
