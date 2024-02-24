import { useSelector } from "react-redux";
import Body from "./Body";
import Search from "./Search";

const HomePage = () => {
  const weather = useSelector((state) => state.weather);
  const darkMode = useSelector((state) => state.dark.dark);
  const city = weather.location?.city;
  return (
    <div className={`${darkMode ? "bg-[#312F2F]" : "bg-[#EDE6E3]"} h-screen`}>
      <Search />
      {city !== null && <Body />}
    </div>
  );
};

export default HomePage;
