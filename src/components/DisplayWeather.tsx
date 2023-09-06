import React from "react";
import { MainWrapper } from "./weather.module";
import { FaSearchLocation } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudDrizzleFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";

const DisplayWeather = () => {
  const api_key = "7f71772904c45011d7641e41e385c919";
  const api_Endpoint = "https://api.openweatherapp.prg/data/2.5/";

  const fetchWeather = () => {
    const url = `${api_Endpoint}`;
  };

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="enter a city to search" />
          <div className="searchCircle">
            <FaSearchLocation className="searchIcon" />
          </div>
        </div>

        <div className="weatherArea">
          <h1>Kathmandu</h1>
          <span>Nepal</span>
          <div className="icons">icon</div>
          <h1>18C</h1>
          <h2>Cloudy</h2>
        </div>

        <div className="infoArea">
          <div className="humidity">
            <WiHumidity className="windIcon" />
            <div className="humidInfo">
              <h1>60%</h1>
              <p>humidity</p>
            </div>
          </div>

          <div className="wind">
            <LuWind className="windIcon" />
            <div className="humidInfo">
              <h1>2.56 km/hr</h1>
              <p>wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
