import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#01a7c2]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#eaebed]">
          Sara Margulies
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#a3bac3]">
          I'm a Full Stack Developer,
        </h2>
        {/* Update the description in <p> tag to something personal */}
        <p className="text-[#a3bac3] py-4 max-w-700px">
          I'm a full-stack developer specializing in building and
          designing exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#eaebed] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#01a7c2] hover:border-[#01a7c2]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
