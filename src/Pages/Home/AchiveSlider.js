import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionView from "../../Components/SectionView/SectionView";

import Aos from "aos";

function AchiveSlider() {
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
      <div className="container homeslider pb-5 ">
        <div className="row  text-center">
          <div className="col-md-12 mt-5">
            <h2 className="newSectiontext">Achieve Your Real Estate Goals</h2>
          </div>
        </div>
        <Slider {...settings} className="interior ">
          <div className="slide-card-contianer mt-md-4 sliderptag cursor-pointer ">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next"
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                01
              </span>{" "}
              Reach New Territories
            </p>

            <p className="slide-discription1 mt-4 ">
              Explore new territories with us and develop a strategy to
              shortlist traditional or modern spaces for multiple locations
              based on authentic local market knowledge.
            </p>
          </div>
          <div className="slide-card-contianer  mt-md-4 sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading1">
              <span
                className="slide-card-heading1-next "
                style={{
                  marginRight: "5px",
                }}
              >
                {" "}
                02
              </span>{" "}
              Open Workspace
            </p>

            <p className="slide-discription1 mt-4 ">
              Transparency and equality are productivity boosters, we can find
              customized or co-working spaces that express this comfort for your
              workforce.
            </p>
          </div>
          <div className="slide-card-contianer  mt-md-4 sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p
              className="slide-card-heading1"

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
              Centralization of Business
            </p>

            <p className="slide-discription1 mt-4 ">
              Focused vision helps to achieve quality results, give us an
              opportunity to plan your strategic & economic relocations into
              private or serviced spaces.
            </p>
          </div>
          <div className="slide-card-contianer  mt-md-4 sliderptag cursor-pointer">
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
              Hybrid Work Culture
            </p>

            <p className="slide-discription1 mt-4 ">
              We understand that exceptional times call for exceptional measures
              and so we also offer flexi spaces to meet the needs of the new
              era.
            </p>
          </div>
          <div className="slide-card-contianer  mt-md-4 sliderptag cursor-pointer">
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
              Rebranding
            </p>

            <p className="slide-discription1 mt-4 ">
              Give your office visitors the opportunity to experience style,
              vibrancy & comfort by having a creative space offering sunlit
              areas, recreation & lounges.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AchiveSlider;
