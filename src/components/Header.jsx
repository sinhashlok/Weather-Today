import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setDark } from "../utils/store/darkSlice";

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
        <h1 className="p-2 text-[24px] font-medium">WeatherToday</h1>
        <Link
          to="/"
          className={`m-4 text-[16px] ${
            path === "/" ? "opacity-80" : "opacity-30"
          } hover:opacity-50 text-white`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`m-4 text-[16px] ${
            path === "/about" ? "opacity-80" : "opacity-30"
          } hover:opacity-50 text-white`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`m-4 text-[16px] ${
            path === "/contact" ? "opacity-80" : "opacity-30"
          } hover:opacity-50 text-white`}
        >
          Contact
        </Link>
      </div>
      <button
        className={`absolute right-0 top-8 mr-10 border-2 p-2 ${
          darkMode
            ? "border-black bg-white text-black"
            : "border-white bg-black text-white"
        } font-semibold rounded-lg`}
        onClick={handleDarkMode}
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Header;
