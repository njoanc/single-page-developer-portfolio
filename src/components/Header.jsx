import React from "react";
import "../../custom.css";

function Header() {
  return (
    <div className="bg-[#151515] flex flex-col justify-center items-center  px-5 md:flex-row   md:justify-between md:px-[0rem] lg:px-[0rem]">
      <div className=" flex justify-center items-center mt-[1rem] md:pb-[25rem] lg:pb-[25rem] md:w-2/3 lg: w-2/3 md:justify-start ld:justify-start md:pl-[2rem] lg:pl-[10rem]">
        <h3 className="text-white font-space-grotesk-bold text-2xl leading-8 ">
          jeannedarc
        </h3>
      </div>

      <div className="flex flex-col md:bg-[#242424] md:pr-[0rem] lg:pr-[10rem]">
        <div className="flex flex-row space-x-4  pb-[1rem] bg-gradient-to-b from-[#151515] to-[#2d2d2c]">
          <a
            className="md:pl-[4rem]"
            href="https://github.com/njoanc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="shared/githubIcon.svg"
              alt="github icon"
              className="p-4"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jeanne-nyiramwiza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="shared/linkedInIcon.svg"
              alt="linkedIn icon"
              className="p-4"
            />
          </a>
          <a
            href="https://x.com/njoanc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="shared/twitterIcon.svg"
              alt="twitter icon"
              className="p-4"
            />
          </a>
        </div>

        <div className="background-image"></div>
      </div>
    </div>
  );
}

export default Header;
