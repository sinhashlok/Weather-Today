import { useSelector } from "react-redux";

const About = () => {
  const darkMode = useSelector((state) => state.dark.dark);
  return (
    <div
      className={`${
        darkMode ? "bg-[#312F2F] text-white" : "bg-[#EDE6E3] text-black"
      } h-screen`}
    >
      <div className="flex flex-col mx-auto w-[50%] pt-36">
        <div className="flex text-8xl font-semibold">
          Hi <span className="ml-2">👋</span>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-3xl">{`<me>`}</h1>
          <p className="mx-auto w-[80%] my-2 text-2xl font-medium leading-relaxed">
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
          <h1 className="font-bold text-3xl">{`</me>`}</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
