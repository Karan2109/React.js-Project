import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Tech Stack</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-orange-400" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-blue-600" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-600" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <SiJquery className="text-7xl text-blue-600" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <TbBrandRedux className="text-7xl text-purple-600" />
        </div>
        <div className="roubded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-400" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
