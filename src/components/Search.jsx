import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../utils/store/weatherSlice";

const Search = () => {
  const cityName = useRef(null);
  const countryCode = useRef(null);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dark.dark);
  const handleCitySearch = (e) => {
    e.preventDefault();
    dispatch(
      setLocation({
        city: cityName.current.value,
        country: countryCode.current.value,
      })
    );
  };

  return (
    <div className="flex flex-col align-middle items-center justify-center pt-8 sm:pt-14">
      <div className="flex flex-col md:flex-row justify-center">
        <input
          ref={cityName}
          type="text"
          placeholder="Enter City Name"
          className="border-2 sm:mr-2 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F06449] focus:border-transparent"
        />
        <input
          ref={countryCode}
          type="text"
          placeholder="Enter Country Code"
          className="border-2 mt-2 sm:mt-0 border-black rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#F06449] focus:border-transparent"
        />
      </div>
      <button
        onClick={handleCitySearch}
        className={`mt-4 p-2 px-4 border-2 font-semibold rounded-md bg-[#F06449]
        ${darkMode ? "border-white text-black" : "border-black text-white"}`}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
