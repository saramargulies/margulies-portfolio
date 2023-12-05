import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#eaebed]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#01a7c2]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Sara. It's nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a driven Full Stack Software Engineer that brings the
              patience and love for the process into every day of my work.
              
              My experience as a business owner and leader in the animal behavior
              industry gives me a strong foundation to stand on when approaching
              unique and challenging problems. Open and empathetic
              communication, persistence through difficult and uncomfortable
              moments, and a commitment to learning and growing as a
              professional and a person are all at the forefront of my everyday
              self-development. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
