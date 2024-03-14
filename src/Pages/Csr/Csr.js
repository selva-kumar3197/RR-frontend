import React, { useEffect } from "react";
import "./Csr.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let CsrBanner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/bannercsr.png";
let img1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (1).png";
let img2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (5).png";
let img3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (6).png";
let img4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (7).png";
let img5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (8).png";
let img6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (9).png";
let img7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (10).png";
let img8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (13).png";
let img9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (14).png";
let img10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (15).png";
let img11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (16).png";
let img12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (17).png";
let img13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (18).png";
let img14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (19).png";
let img15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (20).png";
let img16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (21).png";
let img17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (22).png";
let img18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (23).png";
let img19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (24).png";
let img20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (25).png";
let img21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (26).png";
let img22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/csr_page/1 (27).png";


const Csr = () => {
  const [CSRList, setCSRlist] = useState("")
  const [imgList, setImgList] = useState([
    {
      img: [
        { imge: img8 },
        { imge: img9 },
        { imge: img10 },
        { imge: img11 },
        { imge: img12 },
        { imge: img13 },
        { imge: img14 },
      ],
      des: "Green covers are the need of the present time. Stronger roots enable us to achieve greater  heights and wide spread branches. Keeping the focus clear, a small contribution made for a  healthier future on our Founder’s Day.",
      title: "Plantation Drive",
    },

    {
      img: [{ imge: img15 }, { imge: img16 }, { imge: img17 }, { imge: img18 }],
      des: "Prioritizing the ethos of Selfless Service, Realistic Realtors Organized Langar Seva on Baisakhi. We feel blessed to serve mankind with utter devotion and dedication.",
      title: "Vaisakhi",
    },
    {
      img: [{ imge: img19 }, { imge: img20 }, { imge: img21 }, { imge: img22 }],
      des: "Our co-workers demonstrated the  spirit by donating blood in significant quantities to help save lives. The camp was successful in raising public awareness about blood donation, its importance, and social obligation among many stakeholders.",
      title: "Blood Donation",
    },
    {
      img: [
        // { imge: img1 },
        { imge: img5 },
        { imge: img2 },
        { imge: img3 },
        { imge: img4 },

        { imge: img6 },
        // { imge: img7 },
      ],
      des: "This Children’s Day was a ride back to childhood for RRians at Saksham Foundation. Sharing the smile and joy of winning a chocolate, giving the right answer & earning a yummy snack",
      title: "Children’s Day",
    },
  ]);

  const navigate = useNavigate();
  const handelClickimg = (ele) => {
    navigate("/Csrimgdetail", {
      state: {
        ele,
      },
    });
  };
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const baseURL = 'https://rr-api.realisticrealtors.com/api/rr/'

  useEffect(() => {
    const getCsrList = async () => {
      try {
        const res = await axios.get(`${baseURL}category/csr`);
        if (res.status === 200) {
          console.log(res.data);
          setCSRlist(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCsrList();
  }, []);

  return (
    <>
      <h1 className="medium-heading1012 ap-head shadow-sm"> C S R</h1>

      <div className="csr_main">
        <div className="Csr_Banner_container">
          <p className="dp-csr-para ">ACT RESPONSIBLE</p>
          <img src={CsrBanner} alt="CSR Banner" className="csrbanner" />
          <p className="dp-csr-para mt-5">
            With corporations continuously evolving to gain an edge in today’s
            competitive world, it is essential to integrate sustainability into
            their business strategies to leave a positive impression on society.
          </p>
        </div>

        <div className="row">
          {CSRList
            ? CSRList.map((ele) => (
              <>
                <div className="col-md-6 py-md-5 px-md-5">
                  <img
                    src={ele?.image}
                    className=" csrimg cursor-pointer"
                    onClick={() => handelClickimg(ele)}
                  />
                  <p className="csrtext my-4">{ele.description}</p>
                </div>
              </>
            )).reverse()
            : ""}
        </div>
      </div>
    </>
  );
};

export default Csr;
