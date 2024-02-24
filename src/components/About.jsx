import { useSelector } from "react-redux";

const About = () => {
  const darkMode = useSelector((state) => state.dark.dark);
  return (
    <div
      className={`${
        darkMode ? "bg-[#312F2F] text-white" : "bg-[#EDE6E3] text-black"
      } h-screen`}
    >
      <div className="flex flex-col mx-auto w-[75%] md:w-[80%] lg:w-[50%] pt-20 sm:pt-28 md:pt-36">
        <div className="flex text-4xl sm:text-6xl md:text-8xl font-semibold">
          Hi <span className="ml-2">👋</span>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{`<me>`}</h1>
          <p className="mx-auto w-[80%] md:w-[90%] lg:w-[80%] my-2 sm:text-xl md:text-2xl font-medium leading-relaxed">
            “ I am a <span className="text-red-500">final year</span> BE
            Mechanical Engineering student at BITS Goa.
            <br /> <br /> I have{" "}
            <span className="text-green-700">interest</span> in Web Development,
            design, dance, anime & football. I also enjoy reading non-fiction &
            manga. I started my coding / development journey in first year and
            then I explored UI/UX design.
            <br /> Currently, I am learning React and also exploring DevOps and
            learning about Docker and Kubernetes.”
          </p>
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">{`</me>`}</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
