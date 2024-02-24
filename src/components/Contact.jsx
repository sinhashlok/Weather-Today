import { useSelector } from "react-redux";

const Contact = () => {
  const darkMode = useSelector((state) => state.dark.dark);

  return (
    <div className={`${darkMode ? "bg-[#312F2F]" : "bg-[#EDE6E3]"} h-screen`}>
      Contact
    </div>
  );
};

export default Contact;
