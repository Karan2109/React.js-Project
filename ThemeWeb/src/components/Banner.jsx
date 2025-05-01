import React from "react";
import starImg from "../assets/icon.png";
import cardImg from "../assets/block.png";
import womanImg from "../assets/Bitmap (7).png";
import cloudImg from "../assets/Path.png";

const Banner = () => {
  return (
    <div className="bg-[#28293E] py-10 px-4 mt-4">
      <section className="relative max-w-6xl mx-auto h-[320px] bg-[#FDF0E9] rounded-lg overflow-visible flex items-center px-10 ">
        {/* Star icon overlapping top */}
        <img
          src={starImg}
          alt="Star Icon"
          className="absolute -top-16 left-15 z-20"
        />

        {/* Left Section - Text */}
        <div className="w-1/3 z-10 ml-16 mt-16">
          <p className="text-sm text-[#EF6D58] uppercase font-semibold tracking-wider mb-2">
            Get Started
          </p>
          <h1 className="text-3xl font-bold text-[#391400] leading-snug mb-4">
            We Help Companies <br /> Move Faster
          </h1>
          <button className="bg-[#EF6D58] text-white text-sm font-semibold px-6 py-2 rounded-md">
            Contact Us
          </button>
        </div>

        {/* Middle Section - Card Image */}
        <div className="w-1/3 flex justify-center z-10 mr-5 mt-16">
          <img src={cardImg} alt="Card" className="w-full object-cover" />
        </div>

        {/* Right Section - Woman and Cloud */}
        <div className="w-1/3 relative flex justify-end items-end">
          {/* Cloud behind */}
          <img
            src={cloudImg}
            alt="Cloud"
            className="absolute right-0 -bottom-36 mr-5 w-[360px] z-0 "
          />
          {/* Woman in front, slightly overflowing bottom */}
          <img
            src={womanImg}
            alt="Woman"
            // className="relative z-10 w-[180px] md:w-[200px] -mb-6 top-0"
            className="absolute z-10  w-[240px] h-auto] -bottom-40 right-8"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
