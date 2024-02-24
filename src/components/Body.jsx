import { useSelector } from "react-redux";
import useWeatherData from "../hooks/useWeatherData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Body = () => {
  const weather = useSelector((state) => state.weather);
  const city = weather.location?.city;
  const country = weather.location?.country;
  useWeatherData(city, country);

  const aqi = weather?.aqi;

  return (
    <div>
      {aqi !== null && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Body;
