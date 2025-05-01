import React from "react";
import map from "../assets/map.png";
import pin from "../assets/pin.png";

const ContactForm = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-start px-6 relative"
      style={{ backgroundImage: `url(${map})` }}
    >
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md ml-24">
        <h1 className="text-2xl font-bold text-[#391400] mb-6">Get In Touch</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-[#f3d1bf] px-4 py-2 rounded outline-none"
          />
          <select className="w-full border border-[#f3d1bf] px-4 py-2 rounded text-gray-500 outline-none">
            <option>Subject</option>
            <option>Support</option>
            <option>Sales</option>
            <option>General</option>
          </select>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-[#f3d1bf] px-4 py-2 rounded resize-none outline-none mb-8"
          />
          <button
            type="submit"
            className="w-1/2 ml-auto bg-[#ef6d58] text-white font-bold py-3 px-2 rounded"
          >
            SUBMIT NOW
          </button>
        </form>
        <img src={pin} alt="" className="absolute bottom-70 right-100" />
      </div>
    </div>
  );
};

export default ContactForm;
