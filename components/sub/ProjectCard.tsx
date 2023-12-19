import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] z-20 ">
      <Image
        src={src}
        alt="title"
        width={300}
        height={300}
        className="w-full object-contain max-w-lg  bg-black"
      />
      <div className="relative p-4 max-w-lg  min-h-[160px] ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
