import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import emp1 from "../assets/Bitmap (8).png";
import emp2 from "../assets/Bitmap (9).png";
import emp3 from "../assets/Bitmap (10).png";
import emp4 from "../assets/Bitmap (11).png";

const OurTeam = () => {
  return (
    <div className="bg-[#28293E] px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-lg text-[#EF6D58] uppercase font-light mb-4 mt-12 tracking-[2px]">
            Our Team
          </h1>
          <h1 className="text-6xl text-white font-bold tracking-normal mb-2">
            Team of Designers <br /> and Developers
          </h1>
        </div>

        {/* Left Right button */}
        <div className="mr-10">
          <div className="flex flex-row items-center gap-4">
            <button className="relative">
              <FiArrowLeftCircle className="text-purple-200 text-5xl absolute top-18 right-0 " />
            </button>
            <button className="relative">
              <FiArrowRightCircle className="text-purple-200 text-5xl absolute top-18 left-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Team grid */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[emp1, emp2, emp3, emp4].map((emp, index) => {
            const names = [
              "Azah Anyeni",
              "Roelof Bekkenenks",
              "Leonardo Oliveira",
              "Izabella Tabakova",
            ];
            const roles = [
              "Designer",
              "React Developer",
              "Illustrator",
              "Product Designer",
            ];

            return (
              <div
                key={index}
                className="flex flex-col items-start w-full max-w-[250px] mx-auto"
              >
                {/* Wrapper with border */}
                <div className="border border-gray-600 rounded-md w-full h-[260px] box-border">
                  {/* Internal gap on top, left, right */}
                  <div className="pt-[2px] pr-[2px] pl-[2px] h-full">
                    <img
                      src={emp}
                      alt={names[index]}
                      className="pt-5 pr-5 pl-5 w-full h-full object-cover block"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <h1 className="text-white text-lg font-bold mt-4">
                  {names[index]}
                </h1>
                <p className="text-gray-400 text-sm mt-1">{roles[index]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
