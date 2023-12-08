import React from "react";
import NPDBImg from "../assets/projects/NPDBImg.png";
import LinkyImg from "../assets/projects/linky.png"

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:min-h-screen flex items-center text-[#eaebed] bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold online border-b-4 text-[#eaebed] border-[#01a7c2]">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${NPDBImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#eaebed] track-wider">
                National Parks Database
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://saramargs.gitlab.io/npdt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#eaebed] text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://gitlab.com/saramargs/npdt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#eaebed] text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${LinkyImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-[#eaebed] track-wider">
                Linktree Clone - Linky
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://linky-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#eaebed] text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/saramargulies/linktree-app-deploy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#eaebed] text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
