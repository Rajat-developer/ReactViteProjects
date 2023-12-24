import React from "react";
import "./weatherapp.css";
import searchicon from "../assets/searchicon.png";
import cloudicon from "../assets/cloudimage.svg";
import humidityicon from "../assets/humidityicon.png";
import windicon from "../assets/windicon.png";
const Weatherapp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon">
          <img src={searchicon} alt="image" width="20px" />
        </div>
      </div>
      <div className="cloud-icon">
        <img src={cloudicon} alt="image" width="25%" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-loction">Jaipur</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} width="50px" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windicon} width="50px" />
          <div className="data1">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Windspeed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weatherapp;
