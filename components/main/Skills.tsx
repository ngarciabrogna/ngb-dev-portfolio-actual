import React from "react";
import {
  Backend_skill_1,
  Backend_skill_2,
  Other_skill_1,
  Other_skill_2,
  Other_skill_3,
  Skill_data_1,
  Skill_data_2,
} from "../constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
	  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data_1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
	  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data_2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>


      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill_1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
	  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill_2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>


      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill_1.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
		  
        ))}
      </div>
	  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill_2.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
		  
        ))}
      </div>

	  <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill_3.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
		  
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
