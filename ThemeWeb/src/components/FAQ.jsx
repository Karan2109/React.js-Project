import React from "react";
import up from "../assets/up.png";
import down from "../assets/down.png";

const FAQ = () => {
  return (
    // <div className="py-16 px-4">
    //   <div className="max-w-6xl mx-auto flex flex-row items-start gap-16 ml-4">
    //     {/* Left Side */}
    //     <div className="w-1/2 flex flex-col items-start">
    //       <h2 className="text-lg text-[#ef6d58] uppercase font-medium mb-4 tracking-[2px]">
    //         FAQ
    //       </h2>
    //       <h1 className="text-5xl text-[#391400] font-bold mb-8">
    //         Frequently Asked <br /> Questions
    //       </h1>
    //       <p className="text-[#6f5445] text-lg mb-6">
    //         A digital agency is a business you hire to outsorce your digital
    //         marketing efforts, instead of handling in-house.
    //       </p>
    //       <h1 className="text-lg text-[#391400]">Contact Us</h1>
    //     </div>
    //     {/* Right Side */}
    //     <div className="w-1/2 flex flex-col bg-transparent border border-[#F3D1BF] border-b rounded-lg ml-12">
    //       <div className="bg-white rounded-lg p-8 w-full relative">
    //         <h1 className="text-2xl text-[#391400] bg-white font-bold mb-10">
    //           A digital agency is a business
    //         </h1>
    //         <img src={up} alt="Up" className="absolute top-8 right-8" />
    //         <p className="text-[#6f5445] leading-8">
    //           Digital marketing efforts, instead of handling in-house. They can
    //           provide your business with a variety of digital solutions to
    //           promote your product or service online and help you hit your
    //           marketing goals and grow your business.
    //         </p>
    //       </div>
    //       <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
    //         <h1 className="text-2xl text-[#391400] font-bold ">
    //           Hire to outsource your digital
    //         </h1>
    //         <img src={down} alt="down" className="absolute top-8 right-8" />
    //       </div>
    //       <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
    //         <h1 className="text-2xl text-[#391400] font-bold ">
    //           Marketing efforts
    //         </h1>
    //         <img src={down} alt="down" className="absolute top-8 right-8" />
    //       </div>
    //       <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
    //         <h1 className="text-2xl text-[#391400] font-bold ">
    //           Can provide your business
    //         </h1>
    //         <img src={down} alt="down" className="absolute top-8 right-8" />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16 ml-4">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
          <h2 className="text-lg text-[#ef6d58] uppercase font-medium mb-4 tracking-[2px]">
            FAQ
          </h2>
          <h1 className="text-5xl text-[#391400] font-bold mb-8">
            Frequently Asked <br /> Questions
          </h1>
          <p className="text-[#6f5445] text-lg mb-6">
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <h1 className="text-lg text-[#391400]">Contact Us</h1>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col bg-transparent border border-[#F3D1BF] border-b rounded-lg md:ml-12">
          <div className="bg-white rounded-lg p-8 w-full relative">
            <h1 className="text-2xl text-[#391400] bg-white font-bold mb-10">
              A digital agency is a business
            </h1>
            <img src={up} alt="Up" className="absolute top-8 right-8" />
            <p className="text-[#6f5445] leading-8">
              Digital marketing efforts, instead of handling in-house. They can
              provide your business with a variety of digital solutions to
              promote your product or service online and help you hit your
              marketing goals and grow your business.
            </p>
          </div>
          <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
            <h1 className="text-2xl text-[#391400] font-bold ">
              Hire to outsource your digital
            </h1>
            <img src={down} alt="down" className="absolute top-8 right-8" />
          </div>
          <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
            <h1 className="text-2xl text-[#391400] font-bold ">
              Marketing efforts
            </h1>
            <img src={down} alt="down" className="absolute top-8 right-8" />
          </div>
          <div className="bg-transparent p-8 w-full relative border-t border-[#F3D1BF]">
            <h1 className="text-2xl text-[#391400] font-bold ">
              Can provide your business
            </h1>
            <img src={down} alt="down" className="absolute top-8 right-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
