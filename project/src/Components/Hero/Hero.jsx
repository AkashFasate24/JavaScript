import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow_icon.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for EveryOne</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/476/780/small_2x/asian-woman-with-her-shopping-bags-file-png.png"
          alt=""
          height="500px"
        />
      </div>
    </div>
  );
};

export default Hero;
