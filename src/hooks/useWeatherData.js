import { useEffect } from "react";
import { OPEN_WEATHER_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setCoords } from "../utils/store/weatherSlice";
import { setAqi, setWeather } from "../utils/store/weatherSlice";
import { setForecast } from "../utils/store/forecastSlice";

const useWeatherData = (city, country) => {
  const dispatch = useDispatch();
  let lat = null;
  let lon = null;
  const fetchWeatherData = async (query) => {
    // Lat & Lon
    const data = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${OPEN_WEATHER_API}`
    );
    const response = await data.json();
    if (response.length > 0) {
      lat = response[0].lat;
      lon = response[0].lon;
      dispatch(setCoords({ lat, lon }));
    }

    // Weather
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API}`
    );
    const weatherResponse = await weatherData.json();
    if (weatherResponse) {
      dispatch(
        setWeather({
          weather: weatherResponse.weather[0],
          main: weatherResponse.main,
          sys: weatherResponse.sys,
        })
      );
    }

    // AQI
    const aqiData = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API}`
    );
    const aqiResponse = await aqiData.json();
    if (aqiResponse) {
      dispatch(setAqi(aqiResponse.list[0].main.aqi));
    }

    // Forecast
    const forecastData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API}`
    );
    const forecastResponse = await forecastData.json();
    if (forecastResponse) {
      const list = forecastResponse.list;
      const myUnixTime = list[0].dt;
      const myDate = new Date(myUnixTime * 1000);
      let date = myDate.getDate();

      const newList = list.filter((item) => {
        const itemDate = new Date(item.dt * 1000).getDate();
        if (itemDate === date) {
          date += 1;
          return true;
        }
        return false;
      });
      dispatch(setForecast(newList));
    }
  };

  useEffect(() => {
    let query = "";
    if (city !== undefined && city != null && city !== "") {
      if (country === null || country === "") {
        query = city;
        fetchWeatherData(query);
      } else {
        query = `${city},,${country}`;
        fetchWeatherData(query);
      }
    }
  }, [city]);
};

export default useWeatherData;
