import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButtons/NavigateButtons";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <NavigateButtons></NavigateButtons>
    </div>
  );
};

export default Main;
