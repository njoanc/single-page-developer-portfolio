import React, { useState, useEffect } from "react";

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
      <div className="font-space-grotesk flex flex-col md:flex-row justify-center items-center px-5 md:pr-0 md:justify-between lg:px-[10rem] xl:px-[10rem]">
        <div className="flex justify-center items-center mt-1 text-[#d9d9d9] font-space-grotesk text-3xl md:text-4xl lg:text-5xl leading-8 md:transform md:translate-y-[-14rem] md:translate-x-[1rem] lg:translate-y-[-12rem] lg:translate-x-[-5rem] xl:translate-x-[-1.5rem] xl:translate-y-[-22rem]">
          <h3>adamaskeyes</h3>
        </div>

        <div className="flex flex-col w-full md:w-1/3 md:bg-[#242424]">
          <div className="flex justify-center md:justify-end space-x-4 pb-4 md:pb-8 md:pt-5 lg:pb-12 xl:pb-16 text-[#d9d9d9] md:bg-[#242424]">
            <a
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

          <div className="relative flex justify-center md:justify-end px-[5rem] md:px-0">
            <img
              src={profilePicture}
              alt="profile picture"
              className={`relative z-10 h-auto w-full md:w-full md:h-auto md:pt-[3rem]  lg:pt-5 xl:pt-10${
                isLargeScreen ? "bg-[#242424]" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pt-[18rem]">
        <img
          src="mobile/group26.svg"
          alt="group26"
          className="transform -ml-[5rem] translate-y-[-10rem] md:translate-x-[-1rem] md:translate-y-[-13.5rem] lg:w-1/2  lg:h-[129px]  xl:w-[950px] xl:h-[155px] lg:translate-y-[-11.5rem] xl:translate-y-[-9.5rem]"
        />
      </div>
      <div className="absolute inset-0  z-10">
        <img
          src="shared/oval.svg"
          alt="oval"
          className="transform translate-x-[23rem] translate-y-[18.5rem] md:translate-x-[45rem] md:translate-y-[24.5rem] lg:translate-x-[38.5rem] lg:translate-y-[25rem] xl:translate-x-[69.5rem] xl:translate-y-[40.5rem]"
          style={
            isLargeScreen
              ? { clipPath: "inset(0 0 0 0)" }
              : { clipPath: "inset(0 50% 0 0)" }
          }
        />
      </div>
    </div>
  );
}

export default Header;
