import React from "react";
import {
  OPEN_WEATHER_ICON_CDN,
  OPEN_WEATHER_ICON_EXT,
} from "../utils/constants";

const ForecastCards = (props) => {
  const { date, temp, humidity, weather } = props;

  return (
    <div className="border-2 border-black bg-[#EDE6E3] p-2 w-[200px] h-[256px] m-4 rounded-lg text-center">
      <div className="flex">
        <img
          src={OPEN_WEATHER_ICON_CDN + weather[0].icon + OPEN_WEATHER_ICON_EXT}
          alt="weather-icon"
        />
        <div className="flex flex-col justify-center">
          <div className="flex justify-between"></div>
          <h2 className="text-lg">{weather[0].main}</h2>
          <h3 className="text-[12px] text-[#5F5F5F]">
            {weather[0].description}
          </h3>
        </div>
      </div>
      <div>
        <h3 className="mt-2 flex justify-between mx-2">
          Temperature <div>{Math.round(temp - 273.15)}℃</div>
        </h3>
        <h3 className="mt-2 flex justify-between mx-2">
          Humidity <div>{humidity}%</div>
        </h3>
      </div>
      <div>
        <h3 className="mt-8 font-semibold">{date.split(" ")[0]}</h3>
      </div>
    </div>
  );
};

export default ForecastCards;
