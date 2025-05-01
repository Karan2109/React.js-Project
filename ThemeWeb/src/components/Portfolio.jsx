import React from "react";
import ImageCardGrid from "./ImageCardGrid";
import Banner from "./Banner";
import OurTeam from "./OurTeam";

const Portfolio = () => {
  return (
    <section className="bg-[#28293E]">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h1 className="text-lg text-[#EF6D58] uppercase font-medium mb-4 mt-12 tracking-[2px]">
          Portfolio
        </h1>
        <h1 className="text-6xl text-white font-bold tracking-normal mb-2">
          Latest Work
        </h1>
      </div>
      <div className="w-full md:w-1/2 mx-auto flex flex-row items-center justify-center gap-16">
        <div className="relative flex flex-row items-center">
          <h1 className="text-white">Show All</h1>
          <p className="absolute text-gray-400 text-sm -top-2 left-15">14</p>
        </div>
        <div className="relative flex flex-row items-center">
          <h1 className="text-gray-400">Design</h1>
          <p className="absolute text-gray-400 text-sm -top-2 left-12">6</p>
        </div>
        <div className="relative flex flex-row items-center">
          <h1 className="text-gray-400">Branding</h1>
          <p className="absolute text-gray-400 text-sm -top-2 left-16">4</p>
        </div>
        <div className="relative flex flex-row items-center">
          <h1 className="text-gray-400">Illustration</h1>
          <p className="absolute text-gray-400 text-sm -top-2 left-19">3</p>
        </div>
        <div className="relative flex flex-row items-center">
          <h1 className="text-gray-400">Motion</h1>
          <p className="absolute text-gray-400 text-sm -top-2 left-13">1</p>
        </div>
      </div>
      {/* ImageCardGrid */}
      <ImageCardGrid />

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <button className=" text-white bg-transparent font-bold uppercase px-4 py-3 w-1/7 border border-purple-300 mb-16">
          Explore More
        </button>
      </div>

      {/* Hero Section Banner */}
      <Banner />

      {/* Our Team */}
      <OurTeam />

      <div className="flex flex-row items-center justify-center gap-4 py-18">
        <div className="w-3 h-3 bg-[#ef6d58] rounded-full "></div>
        <div className="w-3 h-3 border border-purple-300 rounded-full"></div>
        <div className="w-3 h-3 border border-purple-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default Portfolio;
