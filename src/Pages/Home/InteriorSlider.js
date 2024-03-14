import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionView from "../../Components/SectionView/SectionView";
import Aos from "aos";

function InteriorSlider() {
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

    responsive:  [
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
      <div className="container homeslider  pt-2 pb-5">
        <div className="row my-3 text-center">
          <div className="col-md-12 mt-5">
            <h2 className="newSectiontext">Our Value Addition</h2>
          </div>
        </div>
        <Slider {...settings} className="interior">
          <div className="slide-card-contianer mt-md-4  sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p
              className="slide-card-heading1"
              style={{
                width: "400px",
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
              Pre - Engangement Services
            </p>

            <p className="slide-discription12 mt-4 ">
              By connecting you with reliable channel associates who value your
              time & money, we ensure that your requirements are first
              understood and then assessed based on site inspection & actual
              measurements.
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
              Quality Assurance
            </p>

            <p className="slide-discription12 mt-4 ">
              We align the test-fit outs, post which a 3D render is prepared
              serving as an excellent illustration material to optimise the
              entire workflow and to deliver just the result you wanted.
            </p>
          </div>
          <div className="slide-card-contianer mt-md-4 sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p
              className="slide-card-heading1"
              style={{
                width: "400px",
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
              </span>{" "}
              Competitive Procurement
            </p>

            <p className="slide-discription12 mt-4 ">
              We procure modern, durable and cost-effective interior materials
              based on mutually agreed budgets. A transparent & comprehensive
              work order is shared before the work initiation.
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
              On - Time Delivery
            </p>

            <p className="slide-discription12 mt-4 ">
              As per a structured work schedule, the work completed over a
              period of time is reassessed on regular intervals, with the goal
              of timely completion and successful delivery.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default InteriorSlider;
