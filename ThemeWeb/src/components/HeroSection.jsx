import React from "react";
import star from "../assets/Star.png";
import heroImage from "../assets/pic.png";
import Bitmap from "../assets/Bitmap.png";

const HeroSection = () => {
  return (
    <section className="bg-[#28293E]">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-12">
        {/* Hero Content */}
        <div className="flex flex-col-reverse md:flex-row items-start justify-start gap-8 text-left">
          {/* Text Content */}
          <div className="w-full md:w-1/2 relative flex flex-col items-start">
            {/* Star Image - hidden on small screens */}
            <img
              src={star}
              alt="Decorative star"
              className="hidden md:block absolute top-4 right-4 w-28 opacity-80 z-0"
            />

            <div className="relative z-10 w-full">
              <p className="text-sm md:text-base sm:text-4xl uppercase text-[#EF6D58] tracking-[2px] mb-4">
                MODERN STUDIO
              </p>
              <h1 className="text-white text-4xl sm:text-7xl md:text-[72px] font-extrabold leading-tight md:leading-[80px] mb-6">
                We're Here
                <br />
                To Build Your
                <br />
                Dream Project
              </h1>
              <p className="text-gray-400 text-sm sm:text-xl md:text-base mb-8 leading-relaxed max-w-full md:max-w-md">
                Agency provides a full service range including technical skills,
                design, and business understanding.
              </p>
              <div className="flex flex-wrap justify-start gap-4">
                <button className="bg-[#EF6D58] sm:w-1/3 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#e05a46] transition">
                  HOW WE WORK
                </button>
                <button className="text-white border border-white sm:w-1/3 px-6 py-3 rounded-md text-sm font-medium hover:bg-white hover:text-[#28293E] transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Team collaborating on project"
              className="w-full max-w-[570px] h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-6 flex justify-start items-center">
          <img src={Bitmap} alt="Bitmap" />
          <p className="text-gray-400 text-lg ml-2 sm:text-lg">
            "Put themselves in the merchant's shoes" <br />
            <span className="text-white ml-2 font-semibold">Meta Inc.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
