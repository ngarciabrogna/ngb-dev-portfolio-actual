import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
	<div className="w-full h-full bg-transparent text-grey-200 shadow-lg p-[15px]">

		<div className="w-full flex flex-col items-center justify-center m-auto">
			<div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
				<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
					<div className="font-bold text-[16px]">Community</div>
					<p className="flex flex-row items-center my-[15px] cursor-pointer">

						<FaYoutube />
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Footer