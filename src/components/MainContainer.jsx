import { useSelector } from "react-redux";
import {
  OPEN_WEATHER_ICON_CDN,
  OPEN_WEATHER_ICON_EXT,
} from "../utils/constants";

import SUNRISE from "../utils/sunrise.png";
import SUNSET from "../utils/sunset.png";

import useTime from "../hooks/useTime";

const MainContainer = () => {
  const weather = useSelector((state) => state.weather);
  const darkMode = useSelector((state) => state.dark.dark);

  const sunrise = useTime(weather?.sys?.sunrise);
  const sunset = useTime(weather?.sys?.sunset);

  return (
    <div className="mt-9 flex flex-col items-center">
      <h1
        className={`text-6xl font-semibold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {weather.location?.city}
      </h1>
      <div
        className={`mt-4 flex flex-col border-2 ${
          darkMode ? "border-white" : "border-black"
        } w-[350px] p-4 rounded-lg bg-[#EDE6E3]`}
      >
        <div className="flex">
          <img
            src={
              OPEN_WEATHER_ICON_CDN +
              weather.weather?.icon +
              OPEN_WEATHER_ICON_EXT
            }
            alt="weather-icon"
          />
          <div className="flex flex-col justify-center">
            <div className="flex justify-between"></div>
            <h2 className="text-xl">{weather.weather?.main}</h2>
            <h3 className="text-sm text-[#5F5F5F]">
              {weather.weather?.description}
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between mt-2">
            <h3>
              Temperature{" "}
              {Math.round((weather.main?.temp - 273.15) * 100) / 100}℃
            </h3>
            <h3>Humidity {weather.main?.humidity}</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3>
              Feels Like{" "}
              {Math.round((weather.main?.feels_like - 273.15) * 100) / 100}℃
            </h3>
            <h3>AQI {weather.aqi}</h3>
          </div>
          <div className="flex justify-between mt-4">
            <h3>
              Max Temp.{" "}
              {Math.round((weather.main?.temp_max - 273.15) * 100) / 100}℃
            </h3>
            <div className="flex items-center">
              <img src={SUNRISE} alt="sunrise" className="mr-2" /> {sunrise}
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <h3>
              Min Temp.{" "}
              {Math.round((weather.main?.temp_min - 273.15) * 100) / 100}℃
            </h3>
            <div className="flex items-center">
              <img src={SUNSET} alt="sunrise" className="mr-2" /> {sunset}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
