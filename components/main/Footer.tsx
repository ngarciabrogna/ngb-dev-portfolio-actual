import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxGithubLogo />
              <a
                href="https://github.com/ngbdev"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                Github
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxDiscordLogo />
              <a
                href="https://discordapp.com/users/garcianicolas"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                Discord
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxInstagramLogo />
              <a
                href="https://www.facebook.com/ngbdev/"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                Facebook
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxTwitterLogo />

              <a
                href="https://twitter.com/ngbdev"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                X (twitter)
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <RxLinkedinLogo />

              <a
                href="https://www.linkedin.com/in/ngbdev"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <a
                href="https://www.youtube.com/watch?v=CHWAilyppkw"
                className="text-[15px] ml-[6px]"
                target="_blank"
              >
                Cordoba, Argentina
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-20">
              <a
                href="mailto:nicolasgarciabrogna@gmail.com"
                className="text-[15px] ml-[6px]"
              >
                nicolasgarciabrogna@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          <br />
          <hr />
          &copy; NGVDev 2024 Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
