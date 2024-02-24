import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setDark } from "../utils/store/darkSlice";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dark.dark);

  const handleDarkMode = () => {
    dispatch(setDark());
  };

  return (
    <div className="bg-[#F06449] text-center p-4">
      <div>
        <h1 className="p-2 text-[18px] sm:text-[20px] md:text-[24px] font-medium">
          WeatherToday
        </h1>
        <Link
          to="/"
          className={`m-4 text-[14px] sm:text-[16px] ${
            path === "/" ? "opacity-100" : "opacity-30"
          } hover:opacity-50 text-white`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`m-4 text-[14px] sm:text-[16px] ${
            path === "/about" ? "opacity-100" : "opacity-30"
          } hover:opacity-50 text-white`}
        >
          About
        </Link>
      </div>
      <DarkModeSwitch
        className={`absolute right-0 top-8 mr-10
        ${darkMode ? "text-black" : "text-white"}`}
        style={{ marginBottom: "2rem" }}
        checked={darkMode}
        onChange={handleDarkMode}
        size={40}
      />
    </div>
  );
};

export default Header;
