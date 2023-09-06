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

interface weatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const DisplayWeather = () => {
  const api_key = "7f71772904c45011d7641e41e385c919";
  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = React.useState<weatherDataProps | null>(
    null
  );

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;

    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudDrizzleFill />;
        iconColor = "#272829";
        break;

      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#ff6436";
        break;

      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#102C57";
        break;

      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#279EFF";
        break;

      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }

    return (
      <span className="icons" style={{ color: iconColor }}>
        {iconElement}
      </span>
    );
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
        }
      );
    });
  });

  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input type="text" placeholder="enter a city to search" />
          <div className="searchCircle">
            <FaSearchLocation className="searchIcon" />
          </div>
        </div>

        {weatherData && (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icons">
                {iconChanger(weatherData.weather[0].main)}
              </div>
              <h1>{weatherData.main.temp}</h1>
              <h2>{weatherData.weather[0].main}</h2>
            </div>

            <div className="infoArea">
              <div className="humidity">
                <WiHumidity className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Humidity</p>
                </div>
              </div>

              <div className="wind">
                <LuWind className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.wind.speed}km/hr</h1>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;