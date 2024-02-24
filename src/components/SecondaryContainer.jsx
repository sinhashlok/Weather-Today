import { useSelector } from "react-redux";
import ForecastCards from "./ForecastCards";

const SecondaryContainer = () => {
  const forecast = useSelector((state) => state.forecast);
  const darkMode = useSelector((state) => state.dark.dark);

  const forecastList = forecast.forecast;
  return (
    <div className={`mt-14 w-[60%] mx-auto border-4 p-2 ${darkMode ? "border-white" : "border-black"} bg-[#F06449] rounded-xl`}>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {forecastList?.map((data, index) => {
            return (
              <ForecastCards
                key={index}
                date={data?.dt_txt}
                temp={data?.main?.temp}
                humidity={data?.main?.humidity}
                weather={data?.weather}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
