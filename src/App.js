import React, { useState, useEffect } from "react";
import loader from "../src/assets/loader.gif"
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ScreenRouter from "./Router/ScreenRouter";
import "react-toastify/dist/ReactToastify.css";
import Megaheader from "./Components/Header/Megaheader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [onLoadComplete, setOnLoadComplete] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setOnLoadComplete(true);
    };

    window.addEventListener("load", handleLoad);

    const timeoutId = setTimeout(() => {
      if (!onLoadComplete) {
        setLoading(false);
      }
    }, 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="" style={
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }
        }>
          <img src={loader} alt="load_image" style={{
            height: "300px"
          }} autoplay />
        </div>
      )}
      {!loading && (
        <>
          <Megaheader />
          <div className="">
            <ScreenRouter />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
