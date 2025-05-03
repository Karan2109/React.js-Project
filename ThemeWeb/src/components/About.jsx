import React from "react";
import logo1 from "../assets/logo1.png";
import aboutImage from "../assets/pic (1).png";
import StatsCard from "./StatsCard";
import Bitmap2 from "../assets/Bitmap (2).png";
import play from "../assets/play.png";
import logos from "../assets/logos.png";

const About = () => {
  return (
    <section className="bg-[#FDF0E9]">
      {/* Responsive Logo1 (md and above) */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-b border-[#F3D1BF] hidden md:block">
        <img src={logo1} alt="Logo1" className="mx-auto" />
      </div>

      {/* Responsive Logos (only on small screens) */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-b border-[#F3D1BF] block md:hidden">
        <img src={logos} alt="Logos" className="mx-auto" />
      </div>

      {/* Responsive About Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 py-12 gap-28 mt-12">
        {/* Image full-width on small screens */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={aboutImage}
            alt="About"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-lg text-[#EF6D58] uppercase font-normal mb-6 tracking-[2px]">
            About
          </h2>
          <h1 className="text-4xl md:text-6xl text-[#391400] font-extrabold mb-8">
            An Experience
            <br /> Design Agency
          </h1>
          <h3 className="text-lg text-[#391400] font-semibold mb-8">
            Provides a full service Range
          </h3>
          <p className="text-base text-[#9b694e] mb-5">
            Ability to put themselves in the merchant's shoes.
            <br /> It is meant to partner on the long run, and work as an
            extension of the merchant's team.
          </p>
          <button className="bg-white text-[#391400] font-extrabold uppercase px-4 py-3 w-fit shadow-md rounded mb-12">
            About us
          </button>
        </div>
      </div>

      {/* Stats Card component*/}
      <StatsCard className="mb-25 mt-25" />

      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-[#F3D1BF] flex flex-col md:flex-row gap-12">
        {/* Left Column - Text Content */}
        <div className="md:w-1/2 flex flex-col ">
          <h2 className="text-lg text-[#EF6D58] uppercase font-medium mb-4 tracking-[2px]">
            HOW WE WORK
          </h2>
          <h1 className="text-4xl md:text-5xl text-[#391400] font-bold mb-6 leading-tight">
            Making Your Projects
            <br />
            Look Awesome
          </h1>
          <p className="text-lg text-[#9b694e] mb-8 leading-relaxed">
            Technical skills, design, business understanding,
            <br />
            ability to put themselves in the merchant's shoes.
          </p>
          <button className="bg-white text-[#391400] font-bold uppercase px-8 py-4 w-fit shadow-md rounded ">
            Read More
          </button>
        </div>

        {/* Right Column - Numbered List */}
        <div className="md:w-1/2 flex flex-col">
          {/* List Item 1 */}
          <div className="flex items-start mb-10">
            <div className="text-[#391400] text-7xl font-bold mr-6 leading-none">
              1
            </div>
            <div className="text-2xl text-[#391400] font-bold pt-5">
              Full service range including
            </div>
          </div>

          {/* List Item 2 */}
          <div className="flex items-start mb-10">
            <div className="text-[#391400] text-7xl font-bold mr-6 leading-none">
              2
            </div>
            <div className="text-2xl text-[#391400] font-bold pt-5">
              Technical skills, design, business
            </div>
          </div>

          {/* List Item 3 */}
          <div className="flex items-start">
            <div className="text-[#391400] text-7xl font-bold mr-6 leading-none">
              3
            </div>
            <div className="text-2xl text-[#391400] font-bold pt-5">
              Themselves in the merchant's
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-[100px] mt-12  ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center mb-12">
          <img
            src={Bitmap2}
            alt="Bitmap 2"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Play Icon Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={play} alt="play" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Video Time Label */}
          <p className="absolute bottom-5 left-5 rounded-lg px-2 py-1 bg-[#781f13] text-white text-sm">
            1:45
          </p>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-16">
          <h2 className="text-lg text-[#EF6D58] uppercase font-medium mb-4 tracking-[2px]">
            Video Reel
          </h2>
          <h1 className="text-4xl md:text-5xl text-[#391400] font-bold mb-6 leading-tight">
            Unlock The Greatest
            <br />
            Value Possible
          </h1>
          <p className="text-base text-[#9b694e] mb-5">
            Design, business understanding, ability to put themselves in the
            merchant's shoes meant to partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
