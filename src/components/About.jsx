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
              I am a dedicated Full Stack Software Engineer with a passion for
              the intricacies of the development process. Drawing from my
              background as a business owner and leader in the animal behavior
              industry, I bring a unique perspective to problem-solving in the
              tech world. My proficiency spans various technologies, including
              Python with expertise in Django, FastAPI, and Pytest.
              Additionally, I am well-versed in JavaScript, excelling in React,
              Redux, Node.js, Express.js, and Prisma. My adeptness extends to
              diverse databases such as PostgreSQL, MySQL, and MongoDB. In the
              realm of DevOps, I am experienced with Github Actions, CI/CD
              processes, Vercel, and Azure. Fueled by patience and a genuine
              love for the craft, I approach each day with a commitment to open
              and empathetic communication. My experience has instilled in me
              the resilience needed to navigate challenging scenarios, coupled
              with a steadfast dedication to continual learning and professional
              growth. These qualities form the cornerstone of my everyday
              self-development, both as a professional and as an individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
