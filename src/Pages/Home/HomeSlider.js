import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionView from "../../Components/SectionView/SectionView";
import Aos from "aos";
import LazyLoad from 'react-lazy-load';



let SlideOneImage = "https://rr-media-files.s3.ap-south-1.amazonaws.com/corporate.mp4";

let SlideTwoImage = "https://d2s80gmgq3vhu4.cloudfront.net/retail.mp4";
let SlideThreeImage = "https://rr-media-files.s3.ap-south-1.amazonaws.com/warehouse.mp4";
let SlideFourImage = "https://d2s80gmgq3vhu4.cloudfront.net/interior.mp4";
let SlideFiveImage = "https://rr-media-files.s3.ap-south-1.amazonaws.com/investmentAdvisory.mp4";
function HomeSlider() {
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
  const videoRef = useRef(null);



  return (
    <div>
      {" "}
      <div className="container homeslider">
        <Slider {...settings} className="home_slide">
          <div className="slide-card-contianer sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">01</h1> */}
            <p className="slide-card-heading ">CORPORATE LEASING</p>
            <LazyLoad>
              <video
                className="slide-image mt-5"
                src={SlideOneImage}
                autoPlay loop muted playsInline
              />
            </LazyLoad>


            <p className="slide-discription">
              Corporations need workspaces that are aligned with who they are, how they are, and their future goals. Well-versed in the nitty-gritty of real estate, we are your one-stop solution.
            </p>

            <a className="slide-redirection-link" href="/corporate_leasing">
              Know more ➔
            </a>
          </div>
          <div className="slide-card-contianer sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">02</h1> */}
            <p className="slide-card-heading">RETAIL SERVICES</p>
            <LazyLoad>
              <video
                className="slide-image mt-5"
                src={SlideTwoImage}
                autoPlay loop muted playsInline
              />
            </LazyLoad>

            <p className="slide-discription">
              We understand the importance of visibility when it comes to
              retail. Strategically right locations can help you leverage the
              game. Let your brand shine brighter with our research and
              expertise.
            </p>
            <a className="slide-redirection-link" href="/retail_services">
              Know more ➔
            </a>
          </div>
          <div className="slide-card-contianer sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">03</h1> */}
            <p className="slide-card-heading">WAREHOUSE SERVICES</p>
            <LazyLoad>
              <video
                className="slide-image mt-5"
                src={SlideThreeImage}
                autoPlay loop muted playsInline
              />
            </LazyLoad>

            <p className="slide-discription">
              The ever-evolving structure of commerce has led to required spaces that are efficient and technology-driven. Warehouses that are tailored to your specific needs are hard to come by, but not by us.
            </p>
            <a className="slide-redirection-link" href="/warehouse_services">
              Know more ➔
            </a>
          </div>
          <div className="slide-card-contianer sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">04</h1> */}
            <p className="slide-card-heading">INVESTMENT ADVISORY</p>
            <LazyLoad>
              <video
                className="slide-image mt-5"
                src={SlideFiveImage}
                autoPlay loop muted playsInline
              />
            </LazyLoad>

            <p className="slide-discription">

              Unlock the potential of your property & discover new horizons with
              our Investment solutions. Our market intelligence will allow you
              to make strategic decision that safeguards your future returns.
            </p>
            <a className="slide-redirection-link" href="/investment_advisory">
              Know more ➔
            </a>
          </div>
          <div className="slide-card-contianer sliderptag cursor-pointer">
            {/* <h1 className="slide-card-heading">05</h1> */}
            <p className="slide-card-heading">INTERIOR MANAGEMENT</p>
            <LazyLoad>
              <video
                className="slide-image mt-5"
                src={SlideFourImage}
                autoPlay loop muted playsInline
              />
            </LazyLoad>

            <p className="slide-discription">
              Get your workspace carved to express your culture. Our work
              doesn’t end with finding a property for you, we strive to do more
              & add life by revamping the interiors.
            </p>
            <a className="slide-redirection-link" href="/interior_management">
              Know more ➔
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;
