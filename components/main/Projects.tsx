import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My latest work{" "}
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10  items-center justify-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/lichu.png"
            title="Kiosco Lichu"
            description="
		  Stock control system with reports, issuance of sales receipt and access levels, developed with PHP, Codeiniter, and MySQL."
          />
        </a>

        <a
          href="https://devityproject.com/siguimangap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/Siquiman_gap.png"
            title="SiquimanGAP"
            description="
		  SiquimanGAP is a custom software in charge of managing the correct flow of people in the activities of the SIQUIMAN park. Developed with PHP on Codeigniter 
		  using MySQL as a database. In addition, JavaScript, CSS and Boostrap were used to improve the UI.
		  It has extensive documentation and includes a User Manual."
          />
        </a>

        <a
          href="https://www.trejocanale.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            src="/tyc.png"
            title="Trejo & Canale Attorney"
            description=" Trejo & Canale attorney group website developed with bootstrap and PHP."
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
