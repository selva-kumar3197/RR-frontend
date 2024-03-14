import React from "react";
import "./Clients.css";


import ThreeCardsContainer from "../../Components/ThreeCardsContainer/ThreeCardsContainer";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import LazyLoad from "react-lazy-load";

let corporateImg1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (1).png";
let imgcor2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (2).png";
let imgcor3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (3).png";
let imgcor1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (4).png";
let imgcor4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (5).png";
let imgcor5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (6).png";
let imgcor6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (7).png";
let imgcor7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (8).png";
let imgcor8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (9).png";
let imgcor9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (10).png";
let imgcor10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (11).png";
let imgcor11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/bandhan.png";
let imgcor12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (13).png";
let imgcor13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (14).png";
let imgcor14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (15).png";
let imgcor15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (16).png";
let imgcor16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (17).png";
let imgcor17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (18).png";
let imgcor18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (19).png";
let imgcor19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (20).png";
let imgcor20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (21).png";
let imgcor21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (22).png";
let imgcor22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (23).png";
let imgcor23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (24).png";
let imgcor24 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (25).png";
let imgcor25 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (26).png";

let imgcor26 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (27).png";
let imgcor27 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (28).png";
let imgcor28 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (29).png";
let imgcor29 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (30).png";
let imgcor30 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (31).png";
let imgcor31 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (32).png";
let imgcor32 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (33).png";
let imgcor33 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (34).png";
let imgcor34 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (35).png";
let imgcor35 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (36).png";
let imgcor36 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (37).png";
let imgcor37 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/Marubeni.png";
let imgcor38 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (39).png";
let imgcor39 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (40).png";
let imgcor40 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (41).png";
let imgcor41 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (42).png";
let imgcor42 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (43).png";
let imgcor43 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/1 (44).png";


let imgcretail1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (1).png";
let imgcretail2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (2).png";
let imgcretail3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (3).png";
let imgcretail4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (4).png";
let imgcretail5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (5).png";
let imgcretail6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (6).png";
let imgcretail7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/office/dominos.png";
let imgcretail8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (8).png";
let imgcretail9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (9).png";
let imgcretail10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (10).png";
let imgcretail11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (11).png";
let imgcretail12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (12).png";
let imgcretail13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (13).png";
let imgcretail14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (14).png";
let imgcretail15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (15).png";
let imgcretail16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (16).png";
let imgcretail17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (17).png";
let imgcretail18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/rockdeals-removebg-preview.png";
let imgcretail19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (19).png";
let imgcretail20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (20).png";
let imgcretail21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (21).png";
let imgcretail22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (22).png";
let imgcretail23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (23).png";
let imgcretail24 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (24).png";
let imgcretail25 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/retail/1 (25).png";

let imgwherehouse1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (1).png";
let imgwherehouse2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (2).png";
let imgwherehouse3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (3).png";
let imgwherehouse4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (4).png";
let imgwherehouse5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (5).png";
let imgwherehouse6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (6).png";
let imgwherehouse7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (7).png";
let imgwherehouse8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (8).png";
let imgwherehouse9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (9).png";
let imgwherehouse10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (10).png";
let imgwherehouse11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (11).png";
let imgwherehouse12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (12).png";
let imgwherehouse13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (13).png";
let imgwherehouse14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (14).png";
let imgwherehouse15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (15).png";
let imgwherehouse16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (16).png";
let imgwherehouse17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (17).png";
let imgwherehouse18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (18).png";
let imgwherehouse19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (19).png";
let imgwherehouse20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (20).png";
let imgwherehouse21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (21).png";
let imgwherehouse22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (22).png";
let imgwherehouse23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (23).png";
let imgwherehouse24 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (24).png";
let imgwherehouse25 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (25).png";
let imgwherehouse26 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (26).png";
let imgwherehouse27 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (27).png";
let imgwherehouse28 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (28).png";
let imgwherehouse29 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/wherehouse/1 (29).png";

let imginvestment1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (1).png";
let imginvestment2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (2).png";
let imginvestment3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (3).png";
let imginvestment4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/emaar.png";
let imginvestment5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (5).png";
let imginvestment6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (6).png";
let imginvestment7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/magnum.jpg";
let imginvestment8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (8).png";
let imginvestment9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (9).png";
let imginvestment10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (10).png";
let imginvestment11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (11).png";
let imginvestment12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (12).png";
let imginvestment13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/adi.png";
let imginvestment14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (14).png";
let imginvestment15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (15).png";
let imginvestment16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (16).png";
let imginvestment17 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (17).png";
let imginvestment18 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (18).png";
let imginvestment19 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (19).png";
let imginvestment20 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (20).png";
let imginvestment21 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (21).png";
let imginvestment22 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (22).png";
let imginvestment23 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/INVESTMENT/1 (23).png";


let imgInterior1 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (1).png";
let imgInterior2 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (2).png";
let imgInterior3 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (3).png";
let imgInterior4 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (4).png";
let imgInterior5 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (5).png";
let imgInterior6 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (6).png";
let imgInterior7 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (7).png";
let imgInterior8 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (8).png";
let imgInterior9 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (9).png";
let imgInterior10 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (10).png";
let imgInterior11 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (11).png";
let imgInterior12 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (12).png";
let imgInterior13 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (13).png";
let imgInterior14 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (14).png";
let imgInterior15 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (15).png";
let imgInterior16 = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clients/Interior/1 (16).png";

let clientBanner = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/clientBanner.jpg";
let titanLogo = "https://d2s80gmgq3vhu4.cloudfront.net/HomeSlideImages/assets/Images/socialIcons/titanLogo.png";



const Clients = () => {
  const style = {
    display: "none",
  };
  const brands = [
    "BOSE",
    "SAMSUNG",
    "Sony Multimedia",
    "HT Media",
    "TCS",
    "Analytix Business Solutions",
    "Byju's",
    "Aakash Education",
    "Unacademy",
    "HDFC Bank",
    "Max Life Insurance",
    "Tata AIA",
    "Birla Sunlife",
    "L&T Finance",
    "Kotak Life Insurance",
    "Wework",
    "91 Springboard",
    "Awfis",
    "Piramal Housing Finance",
    "SAMSUNG",
    "BOSE",
    "Sony Multimedia",
    "HT Media",
    "TCS",
    "Analytix Business Solutions",
    "Byju's",
    "Aakash Education",
    "Unacademy",
    "HDFC Bank",
    "Max Life Insurance ",
    "Tata AIA",
    "Birla Sunlife",
    "L&T Finance",
    "Kotak Life Insurance,",
    "Wework",
    "91 Springboard",
    "Awfis",
    "Piramal Housing Finance",
    "Edelweiss Tokio Life Insurance",
    "Toto",
    "BIBA",
    "Reliance Retail",
    "Reliance JIO BP",
    "Cultfit",
    "Barbeque Nation",
    "ZUDIO",
    "WESTSIDE",
    "PVR Cinemas",
    "Lenskart",
    "LEVIS",
    "PUMA",
    "AND",
    "MAX",
    "LIFESTYLE",
    "TANISHQ",
    "UNITED COLOR OF BENNETON",
    "DOMINOS",
    "PIZZA HUT",
    "Dishoom Cinemas",
    "Miraj Cinemas",
    "Senco",
    "DHL",
    "LG",
    "FLIPKART",
    "YUSEN LOGISTICS",
    "APOLLO TYRES",
    "BLUE DART",
    "TVS",
    "HYUNDAI",
    "UDAAN",
    "GROFERS",
    "DLF",
    "M3M",
    "AIPL",
    "VATIKA",
    "BPTP",
    "TULLIP",
    "ELLAN",
    "MAGNUM",
    "EMAAR",
    "GODREJ",
    "TATA",
    "SHOBHA",
    "SPAZE",
    "AMBIENCE",
    "AIPL",
  ];
  const brandsLineRepeat = 3;
  const clientType = [
    {
      heading: "Corporate Clients",
      details: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
      details1: [
        {
          corporateImg1,
        },
      ],
    },
    {
      heading: "Retail Clients",
      details: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
      details1: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
    },
    {
      heading: "Advisory Clients",
      details: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
      details1: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
    },
    {
      heading: "Warehouse Clients",
      details: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
      details1: `Lorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quamLorem ipsum dolor sit amet, consectet adipiscing elit. Et quam accumsan congue purus consec.`,
    },
  ];
  var settings = {
    dots: false,
    arow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="clp-container page-noice-bg">
      <h2 className="medium-heading1012 ap-head shadow-sm"> Our Clients</h2>
      <div className="cpl-banner-container mt-5">
        <div className="cpl-banner-content mt-2">
          <div className="cpl-banner-left">
      
            <p className=" cpl-banner-b-dis mt-5 ">
              We nurture relationships through our consistent efforts &
              transparent approach.
            </p>
            <a
              className="small-text mobile-readmore mt-5 pt-5 handelClickId"
              onClick={handleClickScroll}
            >
              Our Clients
            </a>
            {/* <p className="small-text cpl-banner-l-bottom-text desktop-text">
              Industrial and <br />
              Warehousing services
            </p> */}
          </div>
        
          <div className="cpl-banner-right">
      
            <img
              src={clientBanner}
              className="cpl-banner-image"
              alt="client banner"
            />
      
          </div>
         
     
        </div>
      </div>

      <div className="clientBg">
        <h3 className="newsroom-title mt-0 pt-0 w-100 text-center">
          Our Association
        </h3>

        <div className="brands-line-contianer">
          {/* {[...Array(brandsLineRepeat)].map((e) => {
          return brands.map((e, i) => {
            // return <p key={i}>{e}</p>;
            return (
              <p key={i}>
                <marquee width="100%" direction="left">
                  <p>{e} </p>
                </marquee>
              </p>
            );
          });
        })} */}

          <Marquee>
            {brands.map((ele) => (
              <p className=" px-3 fs-2">{ele}</p>
            ))}
          </Marquee>
        </div>

        <div className="Reviewstextmobile">
          <h2 className="newsroom-title mt-0 pt-0 w-100 text-center mb-5 mt-5">
            Reviews From Clients
          </h2>

          <div className="cpl-sec-5-contianer">
            <div className="cpl-sec-5-content py-5">
              <Slider {...settings} arrows={false}>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white ">
                      “We are delighted with Realistic Realtors. They were very
                      quick in understanding our requirements and simplifying
                      the complex situations. They pitched a proposal which was
                      spot on and reflected exactly what we wanted.”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Bhupesh Singh, Executive Director
                      <br />
                      Paperpedia Pvt Ltd
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “The team of Realistic Realtors was always ready and
                      available to resolve any issues or concerns. The RR team
                      is professional in its approach and honor their
                      commitments.”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Nand Kishore Goyal, Chairman
                      <br />
                      PRINCE PROPCON (INDIA) PVT. LTD
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “There are no words to offer my immense thanks to the
                      group Realistic Realtors for helping us out in leasing
                      multiple clients in our building BVR EK in a course of one
                      year”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Ritesh Shah, Partner
                      <br />
                      BVR Buildcon
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white ">
                      “For Real Estate requirements of any size, budget,
                      location, RRPL is the one-stop solution. We are proud to
                      be associated with Realistic Realtors and look forward to
                      continued partnership.”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Suthiv V, Associate Vice President
                      <br />
                      Bajaj Allianz Life Insurance Co.Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “We must acknowledge that Realistic Realtors are the
                      consultant in real sense & a single window shop for all
                      Real Estate needs. All throughout the tenure of this
                      transaction, they have been truly professional & proposed
                      us the best options available. We highly recommend their
                      services & appreciate the hard work cum sincerity they
                      have shown.”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Ujjawal Sharma, AM
                      <br />
                      Manpower Group Services India Pvt Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “I would like to acknowledge the hard work and appreciate
                      the services given by Realistic Realtors in getting the
                      warehouse cum office spaces finalized for our company in
                      various parts of India.”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Adarsh Rajpal, Controller
                      <br />
                      Apollo Tyres Ltd
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h3 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “I appreciate the efforts and commitment of Realistic
                      Realtors towards Yes Bank by contributing to its physical
                      infrastructure by successfully completing the transactions
                      at Chakrata Road (Dehradun) & Sirsa (Haryana).”
                    </h3>
                    <p className="cpl-sec-5-name">
                      Sourabh Bhatia, AVP (Real Estate Management)
                      <br />
                      YES Bank
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “Outstanding services were provided by Realistic Realtors
                      for our real estate requirements across Northern India.
                      The promptness in sharing options and the professionalism
                      showed during the entire transaction is applaudable.”
                    </h2>
                    <p className="cpl-sec-5-name">
                      Anil Kr. Pandey, Manager (FCM)
                      <br />
                      L&T Finance
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “I can really recommend Realistic Realtors wholeheartedly,
                      as their services are superior in transparency and
                      thoroughness, and one can take on any project with
                      confidence, knowing that they have RR’s full support at
                      every step of the way. Thank you and well done Realistic!”
                    </h2>
                    <p className="cpl-sec-5-name">
                      Harsh Gupta, AGM (BD)
                      <br /> Resonance Eduventures Pvt Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      “This is to acknowledge the efforts of Realistic Realtors
                      in helping us set up an elaborate branch network in North
                      India. The Team’s proactive and forthright advises at all
                      stages of the branch onboarding and commissioning are
                      highly appreciated ”
                    </h2>
                    <p className="cpl-sec-5-name">
                      Saurabh Kumar. Cluster Lead
                      <br />
                      Bandhan Bank
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      In my experience of dealing with Real Estate Consultants
                      for over 4 years, there are a very few who I found to be
                      worth dealing with for long term. Realistic Realtors is a
                      name that is above all other Consultants. They are
                      professional in their approach and honor their
                      commitments.
                    </h2>
                    <p className="cpl-sec-5-name">
                      JD Chaudhary, Chief Corporate Consultant
                      <br />
                      Akash Educational Services.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      Realistic Realtors consists of experienced and
                      professional people. They understand the needs of clients
                      better than any other real estate firms. We will defiantly
                      like to recommend Realistic Realtors to other corporates
                      and assure that their services will be a great advantage
                      for them.
                    </h2>
                    <p className="cpl-sec-5-name">
                      Ranjeet Arora- Head Procurement
                      <br />
                      Home Credit India finance
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      We are very much satisfied with the transaction in Patna
                      done by RR Team. It was a very smooth and seam less
                      experience. RR Team is very co-operative and committed.
                    </h2>
                    <p className="cpl-sec-5-name">
                      Krishna Murthy R, GM Corporate Services
                      <br />
                      Exide Life Insurance Company Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white1 text-white">
                      We are very happy with Realistic Realtor’s assistance in
                      all phases of the transactions. Starting from showing
                      several properties to negotiating the final one, standing
                      by us during the fit-outs and finally ensuring the smooth
                      transition to the new office.
                    </h2>
                    <p className="cpl-sec-5-name">
                      Vivek Srivastava, Director
                      <br />
                      Health Care at Home India Pvt. Ltd
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white text-white1">
                      Our Organization engaged Realistic Realtors for leasing an
                      office space of around 30000 sqft in Noida. The Team has
                      been very supportive and the entire process was dealt with
                      professionalism. Also the delivery of our new office was
                      smooth & on-track.
                    </h2>
                    <p className="cpl-sec-5-name">
                      Shivam Gupta, General Manager
                      <br />
                      Broctagon IT Solution s Pvt. Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white text-white1">
                      The experience with Realistic Realtors was superior at
                      each phase of the transaction. There were innovative
                      efforts in developing prospects & proactive facilitation
                      during rental negotiations. All the tasks were
                      accomplished with a noticeable degree of competence &
                      integrity.
                    </h2>
                    <p className="cpl-sec-5-name">
                      CEO
                      <br />
                      Chanakya Academy for Education & Training Pvt Ltd.
                    </p>
                  </div>
                </div>
                <div className="pt-5">
                  <div>
                    <h2 className="medium-heading cpl-sec-5-heading desktop-heading text-white text-white1">
                      For Real Estate requirements of any size, budget,
                      location, RRPL is the one-stop solution. We are proud to
                      be associated with Realistic Realtors and look forward to
                      continued partnership.
                    </h2>
                    <p className="cpl-sec-5-name">
                      Narayan Bhatt, Head Property Services
                      <br />
                      Capital First Limited.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="clp-sec-4-cotnianer mt-5" id="section-1">
          {/* {clientType.map((e, i) => {
            return ( */}
          <>
            <details className="clp-sec4-b-container">
              <summary className="text-primary ">
                <div className="row">
                  <div className="col-md-8 col-xl-10">
                    {/* <span className="small-text clp-sec4-b-number">01</span> */}
                    <h2 className="large-heading ">Corporate Clients</h2>
                  </div>
                  <div className="col-md-4  col-xl-2 m-auto clientlogodiv ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon fs-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="desktop-version-clients m">
              <LazyLoad>
              <div className="row  mx-5">
                
                
                <div className="col-md-3 ">
                    <img src={imgcor1} className="img-height2 my-3" />
                    <img src={imgcor2} className="img-height2 my-3" />
                    <img src={imgcor3} className="img-height2 my-3" />
                    <img src={imgcor4} className="img-height2 my-3" />
                    <img src={imgcor5} className="img-height2 my-3" />
                    <img src={imgcor6} className="img-height2 my-3" />
                    <img src={imgcor7} className="img-height2 my-3" />
                    <img src={imgcor8} className="img-height2 my-3" />
                    <img src={imgcor9} className="img-height2 my-3" />
                    <img src={imgcor10} className="img-height2 my-3" />
                    <img src={imgcor11} className="img-height2 my-3" />
                  </div>
                  <div className="col-md-3 ">
                    <img src={imgcor12} className="img-height2 my-3" />
                    <img src={imgcor13} className="img-height2 my-3" />
                    <img src={imgcor14} className="img-height2 my-3" />
                    <img src={imgcor15} className="img-height2 my-3" />
                    <img src={imgcor16} className="img-height2 my-3" />
                    <img src={imgcor17} className="img-height2 my-3" />
                    <img src={imgcor18} className="img-height2 my-3" />
                    <img src={imgcor19} className="img-height2 my-3" />
                    <img src={imgcor20} className="img-height2 my-3" />
                    <img src={imgcor21} className="img-height2 my-3" />
                  </div>
                  <div className="col-md-3 ">
                    <img src={imgcor23} className="img-height2 my-3" />
                    <img src={imgcor25} className="img-height2 my-3" />
                    <img src={imgcor26} className="img-height2 my-3" />
                    <img src={imgcor27} className="img-height2 my-3" />
                    <img src={imgcor28} className="img-height2 my-3" />
                    <img src={imgcor29} className="img-height2 my-3" />
                    <img src={imgcor30} className="img-height2 my-3" />
                    <img src={imgcor31} className="img-height2 my-3" />
                    <img src={imgcor32} className="img-height2 my-3" />
                    <img src={imgcor22} className="img-height2 my-3" />


                  </div>
                  <div className="col-md-3 ">
                    <img src={imgcor33} className="img-height2 my-3" />
                    <img src={imgcor34} className="img-height2 my-3" />
                    <img src={imgcor35} className="img-height2 my-3" />
                    <img src={imgcor36} className="img-height2 my-3" />
                    <img src={imgcor37} className="img-height2 my-3" />
                    <img src={imgcor38} className="img-height2 my-3" />
                    <img src={imgcor39} className="img-height2 my-3" />
                    <img src={imgcor40} className="img-height2 my-3" />
                    <img src={imgcor41} className="img-height2 my-3" />
                    <img src={imgcor42} className="img-height2 my-3" />
                    {/* <img src={imgcor43} className="w-75 my-3" /> */}
                  </div>
                </div>
              </LazyLoad>
           
              </div>
              <div className="mobile-version-clients">
              <LazyLoad>
              <div className="col-12 d-flex   gap-2">
                  <div className="col-4 ">
                    <img src={imgcor1} className=" my-3 img-height " alt="" />
                    <img src={imgcor2} className=" my-3 img-height " alt="" />
                    <img src={imgcor3} className=" my-3 img-height " alt="" />
                    <img src={imgcor4} className=" my-3 img-height " alt="" />
                    <img src={imgcor5} className=" my-3 img-height " alt="" />
                    <img src={imgcor6} className=" my-3 img-height " alt="" />
                    <img src={imgcor7} className=" my-3 img-height " alt="" />
                    <img src={imgcor8} className=" my-3 img-height " alt="" />
                    <img src={imgcor9} className=" my-3 img-height " alt="" />
                    <img src={imgcor10} className=" my-3 img-height " alt="" />
                    <img src={imgcor11} className=" my-3 img-height " alt="" />
                    <img src={imgcor40} className=" my-3 img-height " alt="" />
                    <img src={imgcor39} className=" my-3 img-height " alt="" />



                  </div>
                  <div className="col-4 ">
                    <img src={imgcor12} className=" my-3 img-height" />
                    <img src={imgcor13} className=" my-3 img-height" />
                    <img src={imgcor14} className=" my-3 img-height" />
                    <img src={imgcor15} className=" my-3 img-height" />
                    <img src={imgcor16} className=" my-3 img-height" />
                    <img src={imgcor17} className=" my-3 img-height" />
                    <img src={imgcor18} className=" my-3 img-height" />
                    <img src={imgcor19} className=" my-3 img-height" />
                    <img src={imgcor20} className=" my-3 img-height" />
                    <img src={imgcor21} className=" my-3 img-height" />
                    <img src={imgcor22} className=" my-3 img-height" />
                    <img src={imgcor37} className=" my-3 img-height" />
                    <img src={imgcor38} className=" my-3 img-height" />

                  </div>
                  <div className="col-4 ">
                    <img src={imgcor23} className=" my-3 img-height " />
                    {/* <img src={imgcor24} className="w-75 my-3" /> */}

                    <img src={imgcor28} className=" my-3 img-height" />
                    <img src={imgcor29} className=" my-3 img-height" />
                    <img src={imgcor30} className=" my-3 img-height" />
                    <img src={imgcor31} className=" my-3 img-height" />
                    <img src={imgcor32} className=" my-3 img-height" />
                    <img src={imgcor33} className=" my-3 img-height" />
                    <img src={imgcor34} className=" my-3 img-height" />
                    <img src={imgcor35} className=" my-3 img-height" />
                    <img src={imgcor36} className=" my-3 img-height" />
                    <img src={imgcor41} className=" my-3 img-height" />
                    <img src={imgcor42} className=" my-3 img-height" />
                  </div>

                </div>
              </LazyLoad>
              
              </div>
            </details>
            <details className="clp-sec4-b-container">
              <summary className="text-primary ">
                <div className="row">
                  <div className="col-md-8 col-xl-10">
                    {/* <span className="small-text clp-sec4-b-number">02</span> */}
                    <h2 className="large-heading ">Retail Clients</h2>
                  </div>
                  <div className="col-md-4 col-xl-2 m-auto clientlogodiv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon fs-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div>

                <div className="desktop-version-clients">
                <LazyLoad>
                <div className="row">
                    <div className="col-md-3 px-5">
                      <img src={imgcretail1} className="img-height2 my-3  " />
                      <img src={imgcretail2} className="img-height2 my-3" />
                      <img src={imgcretail3} className="img-height2 my-3" />
                      <img src={imgcretail4} className="img-height2 my-3 " />
                      <img src={imgcretail5} className="img-height2 my-3" />
                      <img src={imgcretail25} className="img-height2 my-3" />
                    </div>
                    <div className="col-md-3 px-5">
                      {/* <img src={imgcretail7} className="img-height2 my-3" /> */}
                      <img src={imgcretail9} className="img-height2 my-3" />
                      <img src={imgcretail6} className="img-height2 my-3" />
                      <img src={imgcretail10} className="img-height2 my-3 " />
                      <img src={imgcretail11} className="img-height2 my-3" />
                      <img src={imgcretail12} className="img-height2 my-3" />
                      <img src={imgcretail18} className="img-height2 my-3" />

                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgcretail13} className="img-height2 my-3" />
                      <img src={imgcretail14} className="img-height2 my-3" />
                      <img src={imgcretail15} className="img-height2 my-3" />
                      <img src={imgcretail16} className="img-height2 my-3" />
                      <img src={imgcretail17} className="img-height2 my-3" />
                      <img src={imgcretail24} className="img-height2 my-3" />

                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgcretail19} className="img-height2 my-3" />
                      <img src={imgcretail20} className="img-height2 my-3" />
                      <img src={imgcretail21} className="img-height2 my-3" />
                      <img src={imgcretail22} className="img-height2 my-3" />
                      <img src={imgcretail23} className="img-height2 my-3" />
                    </div>
                  </div>
                </LazyLoad>
              
                </div>
                <div className="mobile-version-clients">
                <LazyLoad>
                <div className="col-12 d-flex gap-2">
                    <div className="col-4">
                      <img src={imgcretail1} className=" my-3 img-height " />
                      <img src={imgcretail2} className=" my-3 img-height" />
                      <img src={imgcretail3} className=" my-3 img-height" />
                      <img src={imgcretail4} className=" my-3 img-height " />
                      <img src={imgcretail5} className=" my-3 img-height" />
                      <img src={imgcretail25} className=" my-3 img-height" />
                      <img src={imgcretail22} className=" my-3 img-height" />
                      <img src={imgcretail21} className=" my-3 img-height" />



                    </div>
                    <div className="col-4">
                      {/* <img src={imgcretail7} className=" my-3 img-height" /> */}

                      <img src={imgcretail9} className=" my-3 img-height" />
                      <img src={imgcretail6} className=" my-3 img-height" />
                      <img src={imgcretail10} className="my-3 img-height " />
                      <img src={imgcretail11} className=" my-3 img-height" />
                      <img src={imgcretail12} className="my-3 img-height" />
                      <img src={imgcretail19} className=" my-3 img-height" />
                      <img src={imgcretail24} className=" my-3 img-height" />
                      <img src={imgcretail20} className=" my-3 img-height" />



                    </div>
                    <div className="col-4">
                      <img src={imgcretail13} className=" my-3 img-height" />
                      <img src={imgcretail14} className="my-3 img-height" />
                      <img src={imgcretail15} className="my-3 img-height" />
                      <img src={imgcretail16} className="my-3 img-height" />
                      <img src={imgcretail17} className="my-3 img-height" />
                      <img src={imgcretail18} className="my-3 img-height" />
                      <img src={imgcretail23} className="my-3 img-height" />

                    </div>

                  </div>
                </LazyLoad>

              
                </div>
              </div>
            </details>
            <details className="clp-sec4-b-container">
              <summary className="text-primary ">
                <div className="row">
                  <div className="col-md-8 col-xl-10">
                    <h2 className="large-heading ">Warehouse Clients</h2>
                  </div>
                  <div className="col-md-4 col-xl-2 m-auto clientlogodiv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon fs-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div>
                <div className="desktop-version-clients">
                <LazyLoad>
                <div className="row">
                    <div className="col-md-3 px-5">
                      <img src={imgwherehouse1} className="img-height2 my-3" />
                      <img src={imgwherehouse2} className="img-height2 my-3" />
                      <img src={imgwherehouse3} className="img-height2 my-3" />
                      <img src={imgwherehouse4} className="img-height2 my-3" />
                      <img src={imgwherehouse5} className="img-height2 my-3" />
                      <img src={imgwherehouse6} className="img-height2 my-3" />
                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgwherehouse8} className="img-height2 my-3 " />
                      <img src={imgwherehouse9} className="img-height2 my-3 " />
                      <img src={imgwherehouse10} className="img-height2 my-3 " />
                      <img src={imgwherehouse11} className="img-height2 my-3 " />
                      <img src={imgwherehouse12} className="img-height2 my-3 " />

                      <img src={imgwherehouse7} className="img-height2 my-3" />
                    </div>

                    <div className="col-md-3 px-5">
                      <img src={imgwherehouse15} className="img-height2 my-3" />
                      <img src={imgwherehouse16} className="img-height2 my-3" />
                      <img src={imgwherehouse17} className="img-height2 my-3" />

                      <img src={imgwherehouse19} className="img-height2 my-3" />
                      <img src={imgwherehouse20} className="img-height2 my-3" />

                      <img src={imgwherehouse28} className="img-height2 my-3" />
                    </div>
                    <div className="col-md-3 px-5">

                      <img src={imgwherehouse24} className="img-height2 my-3" />
                      <img src={imgwherehouse25} className="img-height2 my-3" />
                      <img src={imgwherehouse29} className="img-height2 my-3" />
                      <img src={imgwherehouse26} className="img-height2 my-3" />
                      <img src={imgwherehouse27} className="img-height2 my-3" />
                    </div>
                  </div>
                </LazyLoad>
                 
                </div>
                <div className="mobile-version-clients">
                <LazyLoad>
                <div className="col-12 d-flex gap-2">
                    <div className="col-4 ">
                      <img src={imgwherehouse1} className="img-height my-3" />
                      <img src={imgwherehouse2} className="img-height my-3" />
                      <img src={imgwherehouse3} className="img-height my-3" />
                      <img src={imgwherehouse4} className="img-height my-3" />
                      <img src={imgwherehouse5} className="img-height my-3" />
                      <img src={imgwherehouse27} className="img-height my-3" />
                      <img src={imgwherehouse6} className="img-height my-3" />
                      <img src={imgwherehouse7} className="img-height my-3" />

                    </div>
                    <div className="col-4">
                      <img src={imgwherehouse8} className="img-height my-3 " />
                      <img src={imgwherehouse9} className="img-height my-3 " />
                      <img src={imgwherehouse10} className="img-height my-3 " />
                      <img src={imgwherehouse11} className="img-height my-3 " />
                      <img src={imgwherehouse12} className="img-height my-3 " />
                      <img src={imgwherehouse29} className="img-height my-3" />
                      <img src={imgwherehouse26} className="img-height my-3" />
                      <img src={imgwherehouse28} className="img-height my-3" />

                    </div>

                    <div className="col-4 ">
                      <img src={imgwherehouse15} className="img-height my-3" />
                      <img src={imgwherehouse16} className="img-height my-3" />
                      <img src={imgwherehouse17} className="img-height my-3" />

                      <img src={imgwherehouse19} className="img-height my-3" />
                      <img src={imgwherehouse20} className="img-height my-3" />

                      <img src={imgwherehouse24} className="img-height my-3" />
                      <img src={imgwherehouse25} className="img-height my-3" />
                    </div>

                  </div>
                </LazyLoad>
                 
                </div>


              </div>
            </details>
            <details className="clp-sec4-b-container">
              <summary className="text-primary ">
                <div className="row">
                  <div className="col-md-8 col-xl-10">
                    <h2 className="large-heading ">Investment Clients</h2>
                  </div>
                  <div className="col-md-4  col-xl-2 m-auto clientlogodiv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon fs-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div className="desktop-version-clients">
              <LazyLoad>
              <div className="row">
                  <div className="col-md-3 px-5">
                    <img src={imginvestment3} className=" my-3 img-height2" />
                    <img src={imginvestment16} className=" my-3 img-height2" />
                    <img src={imginvestment22} className=" my-3 img-height2" />
                    {/* <img src={imginvestment1} className=" my-3 img-height2 " /> */}
                    <img src={imginvestment2} className=" my-3 img-height2" />
                    <img src={imginvestment17} className="   my-3 img-height2" />

                  </div>
                  <div className="col-md-3 px-5">
                    <img src={imginvestment11} className=" my-3 img-height2" />
                    <img src={imginvestment5} className=" my-3 img-height2" />
                    <img src={imginvestment8} className=" my-3 img-height2" />
                    <img src={imginvestment9} className=" my-3 img-height2" />
                    <img src={imginvestment10} className=" my-3 img-height2" />
                  </div>
                  <div className="col-md-3 px-5">
                    <img src={imginvestment6} className=" my-3 img-height2" />
                    <img src={imginvestment13} className=" my-3 img-height2" />
                    <img src={imginvestment14} className=" my-3 img-height2" />
                    <img src={imginvestment15} className=" my-3 img-height2" />
                    <img src={imginvestment12} className=" my-3 img-height2" />

                    {/* <img src={imginvestment18} className="w-75 my-3" />  */}
                  </div>
                  <div className="col-md-3 px-5">
                    <img src={imginvestment4} className="my-3 img-height2  " />
                    <img src={imginvestment19} className="my-3 img-height2" />
                    <img src={imginvestment20} className="my-3 img-height2" />
                    <img src={imginvestment21} className="my-3 img-height2" />
                    <img src={imginvestment23} className="my-3 img-height2" />
                  </div>
                </div>
              </LazyLoad>
                
                <div>

                </div>

              </div>
              <div className="mobile-version-clients">
              <LazyLoad>
              <div className="col-12 d-flex gap-2">
                  <div className="col-4 ">
                    <img src={imginvestment3} className="img-height my-3" />
                    <img src={imginvestment4} className="img-height  my-3" />
                    {/* <img src={imginvestment1} className="img-height my-3 " /> */}
                    <img src={imginvestment2} className="img-height my-3" />
                    <img src={imginvestment19} className="img-height my-3" />
                    <img src={imginvestment21} className="img-height my-3" />
                    <img src={imginvestment20} className="img-height my-3" />
                    <img src={imginvestment22} className="img-height my-3" />





                  </div>
                  <div className="col-4">
                    <img src={imginvestment11} className="img-height my-3" />
                    <img src={imginvestment16} className="img-height my-3" />

                    {/* <img src={imginvestment7} className="img-height my-3  " /> */}
                    <img src={imginvestment8} className="img-height my-3" />
                    <img src={imginvestment9} className="img-height my-3" />
                    <img src={imginvestment10} className="img-height my-3" />
                    <img src={imginvestment12} className="img-height my-3" />

                  </div>
                  <div className="col-4">
                    <img src={imginvestment6} className="img-height my-3" />
                    {/* <img src={imginvestment5} className="img-height my-3" /> */}

                    <img src={imginvestment13} className="img-height my-3" />
                    <img src={imginvestment14} className="img-height my-3" />
                    <img src={imginvestment15} className="img-height my-3" />
                    <img src={imginvestment17} className="img-height my-3" />
                    <img src={imginvestment23} className="img-height my-3" />


                  </div>

                </div>
              </LazyLoad>

              
                <div>

                </div>

              </div>
            </details>
            <details className="clp-sec4-b-container">
              <summary className="text-primary ">
                <div className="row">
                  <div className="col-md-8 col-xl-10">
                    <h1 className="large-heading ">Interior Clients</h1>
                  </div>
                  <div className="col-md-4 col-xl-2  m-auto clientlogodiv">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon fs-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </summary>
              <div>
                <div className="desktop-version-clients">
                <LazyLoad>
                <div className="row">
                    <div className="col-md-3 px-5">
                      <img src={imgInterior1} className="img-height2 my-3 " />
                      <img src={imgInterior2} className="img-height2 my-3 " />
                      <img src={imgInterior3} className="img-height2 my-3 " />
                      <img src={imgInterior4} className="img-height2 my-3 " />
                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgInterior5} className="img-height2 my-3 " />
                      <img src={imgInterior6} className="img-height2 my-3 " />
                      <img src={imgInterior7} className="img-height2 my-3 " />
                      <img src={imgInterior8} className="img-height2 my-3 " />
                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgInterior9} className="img-height2 my-3 " />
                      <img src={imgInterior10} className="img-height2 my-3 " />
                      <img src={imgInterior11} className="img-height2 my-3 " />
                      <img src={imgInterior12} className="img-height2 my-3 " />
                    </div>
                    <div className="col-md-3 px-5">
                      <img src={imgInterior13} className="img-height2 my-3 " />
                      <img src={imgInterior14} className="img-height2 my-3 " />
                      <img src={imgInterior15} className="img-height2 my-3 " />
                      <img src={imgInterior16} className="img-height2 my-3 " />
                    </div>
                  </div>
                </LazyLoad>
               
                </div>
                <div className="mobile-version-clients">
                <LazyLoad>
                <div className="col-12 d-flex gap-2">
                    <div className="col-4 ">
                      <img src={imgInterior1} className="img-height my-3 " />
                      <img src={imgInterior2} className="img-height my-3 " />
                      <img src={imgInterior3} className="img-height my-3 " />
                      <img src={imgInterior4} className="img-height my-3 " />
                      <img src={imgInterior5} className="img-height my-3 " />
                      <img src={imgInterior6} className="img-height my-3 " />
                    </div>
                    <div className="col-4">

                      <img src={imgInterior7} className="img-height my-3 " />
                      <img src={imgInterior8} className="img-height my-3 " />
                      <img src={imgInterior11} className="img-height my-3 " />
                      <img src={imgInterior12} className="img-height my-3 " />
                      <img src={imgInterior10} className="img-height my-3 " />

                    </div>
                    <div className="col-4">
                      <img src={imgInterior9} className="img-height my-3 " />
                      <img src={imgInterior13} className="img-height my-3 " />
                      <img src={imgInterior14} className="img-height my-3 " />
                      <img src={imgInterior15} className="img-height my-3 " />
                      <img src={imgInterior16} className="img-height my-3 " />

                    </div>

                  </div>
                </LazyLoad>
            
                </div>

              </div>
            </details>
          </>

        </div>
      </div>

      <div className="cpl-sec-6-container case-studies pb -3">
        <ThreeCardsContainer heading={"Case Studies"} />
      </div>
    </div>
  );
};

export default Clients;
