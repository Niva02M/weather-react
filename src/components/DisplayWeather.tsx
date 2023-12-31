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
  const api_key = process.env.REACT_APP_API_KEY;

  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = React.useState<weatherDataProps | null>(
    null
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [searchCity, setSearchCity] = React.useState("");

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric}`;
      const searchResponse = await axios.get(url);

      const currentWeatherData: weatherDataProps = searchResponse.data;
      setWeatherData(currentWeatherData);
      setIsLoading(true);
    } catch (error) {
      console.error("No data found");
      throw error;
    }
  };

  const handleSearch = async () => {
    if (searchCity.trim() === "") {
      return;
    }

    try {
      await fetchWeatherData(searchCity);
    } catch (error) {
      console.error("No Results Found");
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
        iconColor = "#5f9ea0";
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
    fetchWeatherData("Kathmandu");
  }, []);
  console.log(weatherData, isLoading);
  return (
    <MainWrapper>
      <div className="container">
        <div className="searchArea">
          <input
            type="text"
            placeholder="enter a city to search"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <div className="searchCircle">
            <FaSearchLocation className="searchIcon" onClick={handleSearch} />
          </div>
        </div>

        {weatherData && isLoading ? (
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
        ) : (
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading</p>
          </div>
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
