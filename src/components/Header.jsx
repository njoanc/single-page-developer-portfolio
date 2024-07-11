import React, { useState, useEffect } from "react";
import "../../general.css";

function Header() {
  const [profilePicture, setProfilePicture] = useState(
    "mobile/profilePicture.svg"
  );
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateProfilePicture = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setProfilePicture("mobile/profilePicture.svg");
        setIsLargeScreen(false);
      } else if (width < 1024) {
        setProfilePicture("tablet/profilePicture.svg");
        setIsLargeScreen(false);
      } else {
        setProfilePicture("desktop/profilePicture.svg");
        setIsLargeScreen(true);
      }
    };

    // Initial check
    updateProfilePicture();

    // Event listener for window resize
    window.addEventListener("resize", updateProfilePicture);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateProfilePicture);
  }, []);

  return (
    <div className="relative bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center px-5 md:justify-between md:px-0">
        <div className="flex justify-center items-center mt-1 lg:pb-40 md:w-2/3 lg:w-2/3 md:justify-start lg:justify-start md:pl-8 lg:pl-20 text-[#d9d9d9] font-space-grotesk-bold text-2xl leading-8 md:transform md:translate-y-[-13rem] lg:translate-y-[-10rem] md:translate-x-[5rem]">
          <h3>jeannedarc</h3>
        </div>

        <div className="flex flex-col md:w-1/3 md:bg-[#242424]">
          <div className="flex flex-row space-x-4 pb-[3rem] text-[#d9d9d9]  md:bg-[#242424] md:justify-end   lg:justify-end">
            <a
              className="md:pl-16 md:transform "
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
                className="p-4 "
              />
            </a>
          </div>

          <div className="relative">
            <img
              src={profilePicture}
              alt="profile picture"
              className={`relative z-10 h-60 w-52 md:w-full md:h-auto ${
                isLargeScreen ? "bg-[#242424]" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div className="pt-[18rem] absolute inset-0 ">
        <img
          src="mobile/group26.svg"
          alt="group26"
          className="-ml-[5rem] transform translate-y-[-10rem] md:transform md:translate-x-12 md:translate-y-[-13.5rem]  lg:w-1/2 lg:h-[10rem]"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden md:z-10 lg:z-10">
        <img
          src="shared/oval.svg"
          alt="oval"
          className="transform translate-x-[16rem] translate-y-[15.5rem] md:translate-x-[45rem] md:translate-y-[21.5rem] lg:translate-x-[38.5rem] lg:translate-y-[25rem]"
          style={
            isLargeScreen
              ? { clipPath: "inset(0 100% 0 0)" }
              : { clipPath: "inset(0 50% 0 0)" }
          }
        />
      </div>
    </div>
  );
}

export default Header;
