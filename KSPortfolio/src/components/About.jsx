import React from "react";
import aboutImg from "../assets/about.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt=" about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg-w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 lg:ml-40 ">
              I am a dedicated and detail-oriented Frontend Web Developer with a
              passion for building clean, responsive, and user-friendly web
              applications. With 1.5 year of hands-on frontend experience and 3
              years overall in the tech industry, I’ve worked with technologies
              like HTML5, CSS3, JavaScript, React.js, Tailwind CSS, and
              TypeScript. My journey into web development began with a curiosity
              for how digital experiences are crafted, evolving into a focused
              career where I thrive on solving UI challenges and delivering
              seamless user interfaces. I enjoy collaborating with
              cross-functional teams, continuously learning new tools, and
              pushing the boundaries of modern web design. Outside of coding, I
              stay active as a state-level boxer, explore new frontend trends,
              and enjoy working on personal projects that sharpen my skills.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
