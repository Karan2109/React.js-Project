import React from "react";
import star from "../assets/Star.png";
import heroImage from "../assets/pic.png";
import Bitmap from "../assets/Bitmap.png";

const HeroSection = () => {
  return (
    <section className="bg-[#28293E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={star}
              alt="Decorative star"
              className="hidden md:block absolute top-0 right-0 w-20 md:w-32 opacity-80"
              style={{ transform: "translate(-30%, -30%)" }}
            />

            <div className="relative z-10 pl-2 sm:pl-4 md:pl-8">
              <p className="text-sm sm:text-3xl md:text-lg uppercase text-[#EF6D58] tracking-[2px] mb-4 sm:mb-6">
                MODERN STUDIO
              </p>
              <h1 className="text-3xl sm:text-8xl md:text-[56px] w-full text-white font-extrabold leading-snug sm:leading-tight md:leading-[64px] mb-4 sm:mb-6">
                We're Here
                <br />
                To Build Your
                <br />
                Dream Project
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-10 max-w-md leading-5 sm:leading-6">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="w-1/2 sm:w-1/2 md:w-auto lg:w-auto bg-[#EF6D58] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-sm sm:text-base hover:bg-[#e05a46] transition">
                  HOW WE WORK
                </button>
                <button className="w-1/2 sm:w-1/2 md:w-auto lg:w-auto text-white border border-white px-4 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-sm sm:text-base hover:bg-white hover:text-[#28293E] transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2">
            <img
              src={heroImage}
              alt="Team collaborating on project"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-4 px-2 sm:px-6">
          <img src={Bitmap} alt="Bitmap" className="w-10 sm:w-12" />
          <p className="text-sm sm:text-lg text-gray-400 text-center sm:text-left">
            "Put themselves in the merchant's shoes" <br />
            <span className="text-white ml-1 font-semibold">Meta Inc.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
