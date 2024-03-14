import React, { useEffect, useState } from "react";
import "./Teams.css";


import Slider from "react-slick";
import Button from "../../Components/Button/Button";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
let linkedin = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/linkdinicon.png";

let one = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/teams/Our_exe/Harinder%20Singh%20Hora.png";
let three = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/teams/Our_exe/Mohit%20Batra.png";
let four = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Harpreet%20Singh%20Hora.jpg";
let five = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Abhinav%20Sharma.jpg";

let proTeam = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/our-team1.jpg";
let Ashish = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Copy%20of%20Ashish%20Chabbra.jpg";
let Dashmeet = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Copy%20of%20Dashmeet%20Singh.jpg";
let Gaurav = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Gaurav%20Kaul.jpg";
let img = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Garvit-Jain.png";
let Karan = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Karan%20Malik.jpg";
let Manish = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Manish%20Srivastava.jpg";
let Ambrsih = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Ambrish.jpg";
let Ujjwal = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Ujjwal.jpg";
let Pramod = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Pramod%20Joshi.jpg";
let Rahul = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Rahul%20Sharma.jpg";
let Monica = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Monica.jpg";

let Manoj = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Manoj%20Jain%20(1).jpg";
let Ruchika = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Ruchika.jpg";
let Puneeth = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/Leadership/Puneet.jpg";





// import two from "../../assets/Images/teams/Our_exe/";
const Teams = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const checkBeforeSlide = (c, n) => {
    setActiveIndex(n);
  };

  const transperentButton = {
    border: "1px solid #FFF",
    background: "transparent",
    color: "#FFF",
    width: "100%",
    padding: "8px 30px",
    fontSize: "14px",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    beforeChange: checkBeforeSlide,
    autoplaySpeed: 5000,
  };

  const slides = [
    
   
    {
      image: three,
      name: "Mr. Mohit Batra",
      designation: "Regional Director",
      hrefa: "https://www.linkedin.com/in/mohit-batra-43a82617/",
      details: `Mr Mohit Batra posses 18 years of Rich experience in Commercial Leasing & Investments with a demonstrated history of working in the commercial Real Estate industry on PAN India level.  He has a strong Real Estate professional skilled in Shopping Centers, Sales, Real Estate Development, Business Development, Investments and Rentals. Captain of team for the expansion & growth of business for territories outside NCR region for Realistic Realtors`,
    },
    {
      image: four,
      name: "Mr. Harpreet Singh Hora",
      designation: "Group Director",
      hrefa: "https://www.linkedin.com/in/harpreet-singh-hora-6b6547139/",
      details: `Distinguished real estate veteran, Mr. Harpreet Singh Hora drives his fate with over 16 years in commercial real estate leasing, consultancy and investment advisory. Starting his career in 2005 at Realistic Realtors, he is a trusted advisor to developers, occupiers, investors, and UHNIs.`,
    },
    {
      image: five,
      name: "Mr. Abhinav Sharma",
      hrefa: "https://www.linkedin.com/in/abhinav-sharma-6974b457/",

      designation: "Senior Vice President",

      details: `Mr. Abhinav Sharma carved a niche for himself with his 17 years of stint in the real estate industry and professional consultancy. He has innate expertise in corporate taxation, IT assessments, MIS, vendor management, transaction management, and specialised information system audits.`,
    },
  ];

  const [team, setTeam] = useState([]);
  useEffect(() => {
    teamList();
  }, []);
  const teamList = async () => {
    const list = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr/category/leadership"
    );

    // console.log(list.data, "Team list  ");
    setTeam(list.data);
  };

  // console.log(team, "team==>");

  var settingsLife = {
    dots: false,
    arow: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  const [activeWindow, setActiveWindow] = useState(1);

  const [workAnniversary, setWorkAnniversary] = useState(true);
  const [internalAwards, setInternalAwards] = useState(false);
  const [recognitionEvent, setrecognitionEvent] = useState(false);
  const toggleWork = () => {
    setActiveWindow(1);
    setWorkAnniversary(true);
    setInternalAwards(false);
    setrecognitionEvent(false);
  };
  const toggleAwards = () => {
    setActiveWindow(2);
    setWorkAnniversary(false);
    setInternalAwards(true);
    setrecognitionEvent(false);
  };
  const toggleEvent = () => {
    setActiveWindow(3);
    setWorkAnniversary(false);
    setInternalAwards(false);
    setrecognitionEvent(true);
  };

  const [allListCategory, setAllListCategory] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [activeImg, setActiveImg] = useState();

  useEffect(() => {
    allTeamRRList();
  }, []);

  const allTeamRRList = async () => {
    // const teamRRList = await axios.get(
    //   "https://rr-api.realisticrealtors.com/api/rr/category/team@rr"
    // );

    const teamRRListCategory = await axios.get(
      "https://rr-api.realisticrealtors.com/api/rr//category/team@rr_category"
    );

    // setAllImages(teamRRList.data);

    handleClick(teamRRListCategory.data?.[0]);

    setAllListCategory(teamRRListCategory.data);

    console.log(teamRRListCategory.data, "teamRRListCategory");
  };

  const [show, setShow] = useState(true);
  const [filterData, setFilterData] = useState();

  const handleClick = async (ele) => {
    // allImages.length = 0;
    setShow(false);
    setActiveImg(ele.id);
    console.log("handleClick ==> ", ele.id);
    const res = await axios.get(
      `https://rr-api.realisticrealtors.com/api/rr/category/team@rr/${ele.id}`
    );

    console.log(res.data, "res data ======>");
    setFilterData(res.data);
  };

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Make the GET request using Axios inside useEffect
    axios.get('https://rr-api.realisticrealtors.com/api/rr/category/leadership')
      .then(response => {
        // Assuming the response contains team data
        setTeamData(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(teamData, "teamData");

  return (
    <div className="page-noice-bg tp-container">
      <h2 className="medium-heading1012 ap-head shadow-sm">Our Team</h2>
      <div className="tp-banner-contianer">
        <LazyLoad>

          <img className="tp-banner-image" src={proTeam} alt="team image" />
        </LazyLoad>
      </div>

      <div className="services-bg-2">
        <div className="tp-sec-2-cotnianer">
          <div className="ab-page-sec-3-contianer">
            <h2 className="large-heading ab-3-heading">
              Alone we can do so little; together we can do so much. We are
              defined by our people. Meet those who make it all happen.
            </h2>
          </div>
        </div>
      </div>

      <div className="tp-slider-container hello ">
        <div className="tp-s-l-container col-md-6 px-4 px-md-5">
          <div className="circle-numbers-contianer">
            <p className="small-text tp-slide-mem-des timer-heading text-white pt-2">
              Our Executive Team
            </p>

          </div>
          <div className="">
            <h3 className="medium-heading tp-slide-mem-name">
              {slides[activeIndex].name}
            </h3>
            <p className="small-text tp-slide-mem-des text-white">
              {slides[activeIndex].designation}
            </p>
            <p className="small-text tp-slide-mem-des text-white">
              {slides[activeIndex].details}
            </p>
            {/* <a href={slides[activeIndex].hrefa} target="_blank">
              <Button title={"Learn more"} />
            </a> */}

            <a href={slides[activeIndex].hrefa}>
              {/* <img src={linkedin} className="mx-2" alt="social-icon" /> */}
              <Button
                className={"viewProfileButt  "}
                title={"View Profile"}
                img={linkedin}
              />
            </a>
          </div>
        </div>
        <div className="tp-s-r-container teamslider col-md-6">
          <Slider {...settings} arrows={true} className="teamslider mt-5">
            {slides.map((e, i) => {
              return (
                <div key={i} className="">
                  <img
                    src={e.image}
                    width="720px"
                    height="400px"
                    alt="team image"
                    className="tp-slide-image mt-5 mb-4 rounded "
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="tp-lea-team-section   ">
        <h2 className="medium-heading  text-start mb-2">Our Leadership Team</h2>

        <div className="row">
        {teamData.map((member) => (
          <div key={member.id} className="col-md-4 py-3 px-4">
            <div class="team-img-container">
              <div className="imgDiv">
                <img src={member.image} className="img-fluid w-100 h-100 object-fit-cover" />
                <a href={member.linkedinUrl} target="_blank">
                  <div class="overlayTeam">
                    <div class="text">
                      <img src={linkedin} className="w-100 h-100" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <p className="p-0 m-0 my-2 pt-2 nameteam fs-3">{member.name}</p>
            <p className="p-0 m-0 desteam fs-6 pline-height">{member.description  }</p>
          </div>
        ))}

        {/* Include the last div block here */}
        <div className="col-md-4 text-center m-auto">
          <p className="my-2 nameteam fs-3">want to join us ?</p>
          <a href="/career" className="temapagetext">
            <p className="nameteam fs-6">checkout the career page</p>
          </a>
        </div>
      </div>

      
      

        <div className="row">
          <h1 className="medium-heading  text-start mb-2 text-center my-md-5 Team-heading">
            Team @ Realistic Realtors
          </h1>
          <div>
            <div className="container-fluid">
              <div className="row flex-nowrap overflow-auto scrollbar-hidden">
                {allListCategory ? (
                  allListCategory.map((ele) => (
                    <div className="col-md-3 px-3">
                      <p
                        className={`textHeadingSliderTeam cursor-pointer mb-5 mt-3 ${ele.id === activeImg ? "w-md-75 pb-3 activeImgDiv" : ""
                          }`}
                        onClick={() => handleClick(ele)}
                      >
                        {ele.title}
                      </p>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>

          </div>

          <div className="row">
            <Slider {...settingsLife} arrows={false} >
              {show && allImages
                ? allImages.map((ele) => (
                  <div>
                    {" "}
                    <img
                      src={ele.image}
                      className="img-fluid   px-2"
                      style={{
                        borderRadius: "15px",


                      }}
                    />
                  </div>
                ))
                : " "}

              {filterData
                ? filterData.map((ele) => (
                  <div>
                    {" "}
                    <img
                      src={ele.image}
                      className="img-fluid px-2"
                      style={{
                        borderRadius: "15px",
                        width: "550px",
                        height: "275px",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                ))
                : " "}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
