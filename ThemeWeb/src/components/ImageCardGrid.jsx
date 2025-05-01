import React from "react";
import sofaImg from "../assets/Bitmap (3).png";
import keyboardImg from "../assets/Bitmap (4).png";
import workMediaImg from "../assets/Bitmap (5).png";
import dddoneImg from "../assets/Bitmap (6).png";

const ImageCardGrid = () => {
  return (
    <section className="bg-[#28293E] px-4 py-10 min-h-screen">
      <div className="flex flex-row items-center justify-center gap-6 mb-6">
        <div className="relative">
          <img src={sofaImg} alt="Image 1" className="w-[470] h-[416]" />
          <p className="text-[##391400] bg-white px-0 py-1 text-center w-1/5 text-lg rounded-4xl left-10 bottom-26 absolute">
            Design
          </p>
          <h1 className="text-white text-4xl font-bold absolute bottom-12 left-12">
            SOFA
          </h1>
        </div>

        <div className="relative">
          <img src={keyboardImg} alt="Image 2" className="w-[670] h-[416]" />
          <p className="bg-white px-0 py-1 text-center w-1/5 text-lg rounded-4xl left-10 bottom-26 absolute">
            Branding
          </p>
          <h1 className="text-white text-4xl font-bold absolute bottom-12 left-12">
            KeyBoard
          </h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-6">
        <div className="relative">
          <img src={workMediaImg} alt="Image 2" className="w-[670] h-[416]" />
          <p className="bg-white px-0 py-1 text-center w-1/5 text-lg rounded-4xl left-10 bottom-26 absolute">
            Illustration
          </p>
          <h1 className="text-white text-4xl font-bold absolute bottom-12 left-12">
            Work Media
          </h1>
        </div>

        <div className="relative">
          <img src={dddoneImg} alt="Image 1" className="w-[470] h-[416]" />
          <p className="text-[##391400] bg-white px-0 py-1 text-center w-1/5 text-lg rounded-4xl left-10 bottom-26 absolute">
            Motion
          </p>
          <h1 className="text-white text-4xl font-bold absolute bottom-12 left-12">
            DDDone
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ImageCardGrid;
