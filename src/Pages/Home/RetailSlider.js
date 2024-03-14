import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionView from "../../Components/SectionView/SectionView";

import Aos from "aos";
function RetailSlider() {
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
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
              Our Associations Across Industries
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
              Multiplex & Entertainment
            </p>

            <p className="slide-discription1 mt-4 ">
              PVR, INOX, Miraj, Dishoom Cinemas, PJP Cinemas, Smash, Game Zone.
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
                02
              </span>{" "}
              Health & Wellness
            </p>

            <p className="slide-discription1 mt-4 ">
              Cultfit Healthcare, Lakme Salon, Geetanjali Salon, Body Shop,
              Guardian Healthcare.
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
                03
              </span>{" "}
              Food & Beverage
            </p>

            <p className="slide-discription1 mt-4 ">
              Dominos, Pizza Hut, Starbucks, Burger King, Barbeque Nation, KFC.
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
                04
              </span>{" "}
              Consumer Electronics
            </p>

            <p className="slide-discription1 mt-4 ">
              Croma, Reliance Digital, Vijay Sales, LG, Samsung, Rocking Deals.
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
                05
              </span>{" "}
              Hypermarkets
            </p>

            <p className="slide-discription1 mt-4 ">
              Spencer, More, Smart Bazaar, V-Mart Retail, Reliance SMART.
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
                06
              </span>{" "}
              Fashion & Apparel
            </p>

            <p className="slide-discription1 mt-4 ">
              Raymonds, Reliance Trends, Max, Pantaloons, EasyBuy, Westside.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default RetailSlider;
