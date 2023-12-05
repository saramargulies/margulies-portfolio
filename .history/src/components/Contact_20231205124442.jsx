import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/15822fa6-c7ff-455a-a9fe-c3d2c82dc92a"
        className="flex flex-col max-w-[600px] w-full p-4"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#01a7c2] text-[#eaebed]">
            Contact
          </p>
          <p className="text-[#eaebed] py-4">
            Submit the form below or reach out to bradcochi@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button className="text-[#eaebed] border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#01a7c2] hover:border-[#01a7c2]">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
