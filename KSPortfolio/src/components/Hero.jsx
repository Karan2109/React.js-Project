import React from "react";
import profilPic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Karan Singh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate Frontend Web Developer with a strong foundation
              in crafting visually appealing, responsive, and user-centric web
              applications. With 1.5 year of hands-on experience in frontend
              development and 3 years overall in tech, I specialize in building
              modern interfaces using HTML5, CSS3, JavaScript, React.js, and
              Tailwind CSS. I have also worked with tools like Git, GitHub,
              Webpack, Vite, and RESTful APIs to develop seamless and scalable
              web experiences. My goal is to leverage my skills to create
              innovative UI solutions that enhance user engagement and
              contribute to business success.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              src={profilPic}
              alt="Karan Singh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
