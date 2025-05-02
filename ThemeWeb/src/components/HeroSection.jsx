import React from "react";
import star from "../assets/Star.png";
import heroImage from "../assets/pic.png";
import Bitmap from "../assets/Bitmap.png";

const HeroSection = () => {
  return (
    <section className="bg-[#28293E]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 relative">
            {/* Star decoration - now visible behind text */}
            <img
              src={star}
              alt="Decorative star"
              className="absolute top-0 right-0 w-32 opacity-80"
              style={{ transform: "translate(-30%, -30%)" }}
            />

            <div className="relative z-10 pl-8">
              {" "}
              {/* Added z-10 to bring text forward */}
              <p className="text-lg uppercase text-[#EF6D58] tracking-[2px] mb-6">
                MODERN STUDIO
              </p>
              <h1 className="text-[56px] text-white font-extrabold leading-[64px] mb-8">
                We're Here
                <br />
                To Build Your
                <br />
                Dream Project
              </h1>
              <p className="text-gray-400 text-base mb-10 max-w-md leading-6">
                Agency provides a full service range including technical skills,
                design, business understanding.
              </p>
              <div className="flex gap-4">
                <button
                  className="bg-[#EF6D58] text-white px-8 py-4 rounded-md font-medium text-sm hover:bg-[#e05a46] transition-colors duration-200"
                  aria-label="How we work"
                >
                  HOW WE WORK
                </button>
                <button
                  className="text-white border border-white px-8 py-4 rounded-md font-medium text-sm hover:bg-white hover:text-[#28293E] transition-colors duration-200"
                  aria-label="Contact us"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2">
            <img
              src={heroImage}
              alt="Team collaborating on project"
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
        <div className=" flex jsutify-center items-center">
          <img src={Bitmap} alt="Bitmap" />
          <p className="text-gray-400 text-lg ml-2">
            "Put themselves in the merchant's shoes" <br />
            <span className="text-white ml-2 font-semibold">Meta Inc.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
