/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { Custom3dCard } from "../Custom3dCard";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

const HeroSection = () => {
    const words = [
        {
          text: "Mastering",
        },
        {
          text: "Full",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: "Stack",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: "Alchemy",
        },
      ];
  return (
    <section className="bg-black relative h-[100vh] w-[100vw] dark:bg-gray-900">
        
        <video
          loop
          autoPlay
          muted
          className="absolute overflow-none z-10 -top-36 left-0 object-cover h-[100%] w-[100%]"
        >
          <source src="/herobg.mp4" type="video/mp4" />
        </video>
        <div className="absolute bg-gradient-to-b from-black/40 to-black z-10 h-[100vh] w-[100vw] -top-36 left-0"></div>
      <div className="px-10 z-10 md:px-24 min-h-[100vh] min-w-[100vw] absolute top-32 md:-top-10 left-0 flex mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <motion.div initial={{
            y: 100,
          opacity: 0,
        }}
        animate={{
            y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }} className="mr-auto flex justify-center flex-col">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-3xl line-clamp-2 leading-snug xl:text-4xl text-white">
          Engineering Exponential Growth: <br/> <TypewriterEffectSmooth words={words} />
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
         { "Prepare to transcend the ordinary and embrace the extraordinary in the digital realm. As a seasoned full stack developer, I don't just write code – I engineer digital ecosystems with precision and finesse."}
          </p>
          <div className="flex justify-start items-start">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore Project
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg  focus:ring-4 focus:ring-gray-100 text-white"
          >
            About Me
          </a>
            </div>
          <div className="md:hidden flex items-center justify-center">
            <div className="relative">
            <img src="3dhuman.png" style={{ height:"200px", width:"100px"}} className="-mt-12 absolute top-0 right-0 z-20 object-contain" />
            <Custom3dCard />

            </div>
        </div>
        </motion.div>
        <motion.div initial={{
            y: -100,
          opacity: 0,
        }}
        animate={{
            y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 2,
        }} className="hidden lg:mt-0 lg:col-span-5 lg:flex items-center justify-center z-10">
            <div className="relative">
            <Custom3dCard />

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
