import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const PricingCards = () => {
  return (
    // <div className="py-16 px-4">
    //   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
    //     {/* Consultation Card */}
    //     <div className="bg-transparent rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start">
    //       <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
    //         CONSULTATION
    //       </h3>
    //       <p className="text-4xl font-bold text-[#532C1F] mb-4">Free</p>
    //       <p className="text-[#391400] text-sm mb-6 ">
    //         Your digital marketing efforts,
    //         <br /> instead of handling in-house.
    //       </p>
    //       <div className="border-t border-gray-200 my-4"></div>
    //       <ul className="space-y-3 mb-8">
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Brand Design
    //         </li>
    //         <li className="flex items-center text-[#69615d] text-lg">
    //           <span className="text-gray-400 mr-2 text-xl">
    //             <CiCircleMinus />
    //           </span>
    //           Market Analysis
    //         </li>
    //         <li className="flex items-center text-[#69615d] text-lg">
    //           <span className="text-gray-400 mr-2 text-xl">
    //             <CiCircleMinus />
    //           </span>
    //           Production
    //         </li>
    //       </ul>
    //       <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-white text-[#532C1F] shadow-md">
    //         CONTACT US
    //       </button>
    //     </div>

    //     {/* Design Card (Popular) */}
    //     <div className="bg-white rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start -mt-14 z-10">
    //       <button className="py-1 px-5 mb-6 mr-2 rounded-4xl font-light text-lg bg-[#ef6d58] text-white ">
    //         Popular
    //       </button>
    //       <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
    //         DESIGN
    //       </h3>
    //       <p className="text-4xl font-bold text-[#532C1F] mb-4">$1500</p>
    //       <p className="text-[#391400] text-sm mb-6 ">
    //         Provide your business with a variety
    //         <br /> of digital solutions to promote.
    //       </p>
    //       <div className="border-t border-gray-200 my-4"></div>
    //       <ul className="space-y-3 mb-8">
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Brand Design
    //         </li>
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Market Analysis
    //         </li>
    //         <li className="flex items-center text-[#69615d] text-lg">
    //           <span className="text-gray-400 mr-2 text-xl">
    //             <CiCircleMinus />
    //           </span>
    //           Production
    //         </li>
    //       </ul>
    //       <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-[#ef6d58] text-white shadow-md">
    //         CONTACT US
    //       </button>
    //     </div>

    //     {/* Design • Code Card */}
    //     <div className="bg-transparent rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start">
    //       <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
    //         DESIGN + CODE
    //       </h3>
    //       <p className="text-4xl font-bold text-[#532C1F] mb-4">$2900</p>
    //       <p className="text-[#391400] text-sm mb-6 ">
    //         Help you hit your marketing goals and
    //         <br /> grow your business.
    //       </p>
    //       <div className="border-t border-gray-200 my-4"></div>
    //       <ul className="space-y-3 mb-8">
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Brand Design
    //         </li>
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Market Analysis
    //         </li>
    //         <li className="flex items-center text-[#391400] text-lg">
    //           <span className="text-[#ef6d58] mr-2 text-xl">
    //             <CiCirclePlus />
    //           </span>
    //           Production
    //         </li>
    //       </ul>
    //       <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-white text-[#532C1F] shadow-md">
    //         CONTACT US
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-6">
        {/* Consultation Card */}
        <div className="bg-transparent rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start">
          <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
            CONSULTATION
          </h3>
          <p className="text-4xl font-bold text-[#532C1F] mb-4">Free</p>
          <p className="text-[#391400] text-sm mb-6">
            Your digital marketing efforts,
            <br /> instead of handling in-house.
          </p>
          <div className="border-t border-gray-200 my-4"></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Brand Design
            </li>
            <li className="flex items-center text-[#69615d] text-lg">
              <span className="text-gray-400 mr-2 text-xl">
                <CiCircleMinus />
              </span>
              Market Analysis
            </li>
            <li className="flex items-center text-[#69615d] text-lg">
              <span className="text-gray-400 mr-2 text-xl">
                <CiCircleMinus />
              </span>
              Production
            </li>
          </ul>
          <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-white text-[#532C1F] shadow-md">
            CONTACT US
          </button>
        </div>

        {/* Design Card (Popular) */}
        <div className="bg-white rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start z-10 md:-mt-14">
          <button className="py-1 px-5 mb-6 mr-2 rounded-4xl font-light text-lg bg-[#ef6d58] text-white">
            Popular
          </button>
          <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
            DESIGN
          </h3>
          <p className="text-4xl font-bold text-[#532C1F] mb-4">$1500</p>
          <p className="text-[#391400] text-sm mb-6">
            Provide your business with a variety
            <br /> of digital solutions to promote.
          </p>
          <div className="border-t border-gray-200 my-4"></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Brand Design
            </li>
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Market Analysis
            </li>
            <li className="flex items-center text-[#69615d] text-lg">
              <span className="text-gray-400 mr-2 text-xl">
                <CiCircleMinus />
              </span>
              Production
            </li>
          </ul>
          <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-[#ef6d58] text-white shadow-md">
            CONTACT US
          </button>
        </div>

        {/* Design + Code Card */}
        <div className="bg-transparent rounded-lg p-8 border border-[#F3D1BF] flex flex-col items-start">
          <h3 className="text-lg font-bold text-[#ef6d58] uppercase tracking-[2px] mb-2">
            DESIGN + CODE
          </h3>
          <p className="text-4xl font-bold text-[#532C1F] mb-4">$2900</p>
          <p className="text-[#391400] text-sm mb-6">
            Help you hit your marketing goals and
            <br /> grow your business.
          </p>
          <div className="border-t border-gray-200 my-4"></div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Brand Design
            </li>
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Market Analysis
            </li>
            <li className="flex items-center text-[#391400] text-lg">
              <span className="text-[#ef6d58] mr-2 text-xl">
                <CiCirclePlus />
              </span>
              Production
            </li>
          </ul>
          <button className="w-1/2 py-3 px-5 rounded-md font-bold text-sm bg-white text-[#532C1F] shadow-md">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
