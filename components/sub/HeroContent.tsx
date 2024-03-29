"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042F88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bFf] mr-[10px] h-5 w-5" />

          <h1 className=" text-[13px] text-white pr-2">
            Nicolas Garcia Brogna
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the bests{" "}
            </span>
            Solutions
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Full stack software developer. Focused in
          precise requirements gathering, detailed analysis, efficient design,
          development and deployment to ensure effective software solutions.
        </motion.p>
        <motion.a
          href="mailto:nicolasgarciabrogna@gmail.com"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div variants={slideInFromLeft(1)}>
            <span className="text-[18px]">CONTACT</span>
          </motion.div>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="NGBDEV Skills"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
