"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/20/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042F88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bFf] mr-[10px] h-5 w-5" />

        <h1 className="Welcome-text text-[13px]">
		Software Engineering
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        WebApps development with multiples technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Gonzalo is a NO-Hand PUBG player
      </motion.div>
    </div>
  );
};

export default SkillText;
