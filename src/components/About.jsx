import { useSelector } from "react-redux";

const About = () => {
  const darkMode = useSelector((state) => state.dark.dark);
  return (
    <div className={`${darkMode ? "bg-[#312F2F]" : "bg-[#EDE6E3]"} h-screen`}>
      About
    </div>
  );
};

export default About;
