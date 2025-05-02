import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="bg-[#fdf0e9] text-[#391400] px-8 md:px-16 py-12">
    //   <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-[#f3d1bf] pb-10">
    //     {/* Left - Brand */}
    //     <div>
    //       <h1 className="text-2xl font-bold mr-6">Agency</h1>
    //     </div>

    //     {/* Middle - Menus */}
    //     <div className="flex gap-24">
    //       <div className="mr-16">
    //         <h2 className="uppercase text-sm text-[#ef6d58] font-medium mb-6 tracking-[2px]">
    //           Menu
    //         </h2>
    //         <ul className="space-y-2">
    //           <li>About</li>
    //           <li>Services</li>
    //           <li>Blog</li>
    //           <li>Contact</li>
    //         </ul>
    //       </div>

    //       <div className="ml-16">
    //         <h2 className="uppercase text-sm text-[#ef6d58] font-medium mb-6 tracking-[2px]">
    //           Service
    //         </h2>
    //         <ul className="space-y-2">
    //           <li>Design</li>
    //           <li>Development</li>
    //           <li>Marketing</li>
    //           <li>See More</li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Right - Social Icons */}
    //     <div className="flex space-x-4">
    //       <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
    //         <FaFacebookF />
    //       </div>
    //       <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
    //         <FaTwitter />
    //       </div>
    //       <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
    //         <FaInstagram />
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom Line */}
    //   <div className="max-w-6xl mx-auto  flex flex-col md:flex-row justify-between text-sm text-[#391400] pt-6">
    //     <p>Copyright © 2025 Karan Singh. All Rights Reserved.</p>
    //     <div className="flex gap-6 mt-2 md:mt-0 text-lg font-normal">
    //       <a href="/">Terms of Use</a>
    //       <a href="/">Privacy Policy</a>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#fdf0e9] text-[#391400] px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between gap-10 sm:gap-8 border-b border-[#f3d1bf] pb-10">
        {/* Left - Brand */}
        <div className="mb-6 sm:mb-0">
          <h1 className="text-2xl font-bold">Agency</h1>
        </div>

        {/* Middle - Menus */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
          <div className="sm:mr-16">
            <h2 className="uppercase text-sm text-[#ef6d58] font-medium mb-4 sm:mb-6 tracking-[2px]">
              Menu
            </h2>
            <ul className="space-y-2">
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="sm:ml-16 mt-6 sm:mt-0">
            <h2 className="uppercase text-sm text-[#ef6d58] font-medium mb-4 sm:mb-6 tracking-[2px]">
              Service
            </h2>
            <ul className="space-y-2">
              <li>Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>See More</li>
            </ul>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4 mt-6 sm:mt-0">
          <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
            <FaTwitter />
          </div>
          <div className="w-10 h-10 bg-[#ef6d58] rounded-full flex items-center justify-center text-white">
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between text-sm text-[#391400] pt-6 gap-4">
        <p>Copyright © 2025 Karan Singh. All Rights Reserved.</p>
        <div className="flex gap-6 text-lg font-normal">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
