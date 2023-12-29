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
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
    
		<span>
		WebApps 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              development{" "}
            </span>
            using multiples technologies
          </span>
		  
      </motion.div>


    </div>
	
  );
};

export default SkillText;
