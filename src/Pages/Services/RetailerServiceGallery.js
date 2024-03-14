import React, { useState } from "react";
import "./Services.css";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { useEffect } from "react";



function RetailerServiceGallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const checkBeforeSlide = (c, n) => {
    setActiveIndex(n);
  };
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: checkBeforeSlide,
    pauseOnHover: false,
  };

  const buttonStyles = {
    color: "#FFF",
    backgroundColor: "#221D35",
    border: "unset",
    marginTop: "4em",
  };

  const [Profiles, setProfiles] = useState([]);
  useEffect(() => {
    slidesProfile();
  }, []);

  const slidesProfile = async () => {
    axios({
      mathod: "GET",
      url: `https://rr-api.realisticrealtors.com/api/rr//category/retail_services`,
    })
      .then((res) => {
        // console.log(res);
        if (res.status == 200) {
          setProfiles(res.data);
          console.log(res.data, "err");
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  var settingsClient = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 5000,
    autoplay: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    gallaryData();
  }, []);

  const gallaryData = async () => {
    const data = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr//category/retail_service_gallery"
    );
    setSlides(data.data);
  };
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <section>
        <div className="galleryBg  pt-5 pb-5 px-5 desktop-photos">
          <div className="row px-5">
            <div className="col-md-6 ">
              <h2 className="sliderServiceheading  pb-3 services-title">
                Leading the way through front
              </h2>
            </div>
          </div>


          <div className="row py-2 px-5">
            <div className="col-md-7 ">
              <Slider {...settings} arrows={true} className="hello">
                {Profiles.map((e, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={e.image}
                        alt="team image"
                        className="img-sliderProfile tp-slide-image mt-5 "
                      />
                    </div>
                  );
                })}
              </Slider>
              {console.log(
                Profiles[activeIndex]?.designation,
                "Profiles[activeIndex].designation"
              )}

              <div className="row">
                <div className="col-md-12  ">
                  <h3 className="profilename  ">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h3>
                  <p className="profileDes  ">
                    {Profiles[activeIndex]?.designation}
                  </p>

                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5">
              <img
                className="ssp-5-image"
                alt="gallary image"
                src={slides[activeSlide]?.image}
              />
              <div className="gallary-selection-cotnainer">
                <div className="ssp-section-all-images my-4 text-center ">
                  {slides?.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          "ssp-active-image-contianer " +
                          (activeSlide == i
                            ? "ssp-gallary-active-image-border"
                            : "")
                        }
                      >
                        <img
                          alt="image element gallary"
                          src={e?.image}
                          className="ssp-5-image-element"
                          onClick={() => setActiveSlide(i)}
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="ssp-gallary-heading">
                  Retail Service Excellence{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row px-5">
          <div className="col-md-6 ">
            <p className="profileDes  pt-4">{Profiles[activeIndex].des}</p>
            <h2 className="profilename  pb-3"> {Profiles[activeIndex].name}</h2>
          </div>
        </div> */}
        </div>

        <div className="galleryBg  pt-5 pb-5 px-1 mobile-photos">
          <div className="row px-5">
            <div className="col-md-6 ">
              <h2 className="sliderServiceheading  pb-3">
                Leading the way through front
              </h2>
            </div>
          </div>
          {/* <div className="row px-5"></div> */}
          <div className="row py-2">
            <div className="col-md-7">
              <Slider {...settings}>
                {Profiles?.map((e, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={e.image}
                        alt="team image"
                        className="img-sliderProfile"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  );
                })}
              </Slider>
              <div className="row px-3 text-center">
                <div className="col-md-12 py-2 ">
                  <h3 className="profilename ">
                    {" "}
                    {Profiles[activeIndex]?.name}
                  </h3>
                  <p className="profileDes ">
                    {Profiles[activeIndex]?.designation}
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="text-center">
                <img
                  // className="ssp-5-image"
                  alt="gallary image"
                  width="90%"
                  height="50%"
                  src={slides[activeSlide]?.image}
                />
              </div>
              <div className="gallary-selection-cotnainer">
                <div
                  className="ssp-section-all-images mt-4"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {slides?.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          "ssp-active-image-contianer" +
                          (activeSlide == i
                            ? "ssp-gallary-active-image-border"
                            : "")
                        }
                      >
                        <img
                          alt="image element gallary"
                          src={e?.image}
                          className="ssp-5-image-element"
                          onClick={() => setActiveSlide(i)}
                        />
                      </div>
                    );
                  })}
                </div>
                <p className="ssp-gallary-heading text-center">
                  Retail Service Excellence{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RetailerServiceGallery;
