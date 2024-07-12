import React from "react";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black px-[0.5rem] font-space-grotesk-bold pt-[5rem] leading-[55px]">
      <div className="text-[white]">
        <h1 className="font-space-grotesk-bold font-bold text-5xl  tracking-[-1.1363636255264282px] text-center md:hidden lg:text-[88px] lg:leading-10 lg:tracking-[-2.5px] lg:text-left xl:text-[88px] xl:leading-10 xl:tracking-[-2.5px]">
          Nice to meet you! I'm Adam Keyes.
        </h1>
        <div className="md:hidden lg:hidden xl:hidden pl-[7rem] pt-2 pb-5">
          <img src="mobile/rectangular.svg" alt="green line" />
        </div>
        <div className="hidden md:block lg:hidden transform md:translate-y-[-25rem] md:translate-x-[2rem] w-2/3">
          <h1 className="font-bold text-[72px] leading-[72px] tracking-[-2.045454502105713px] text-left">
            Nice to
          </h1>
          <h1 className="font-bold text-[72px] leading-[72px] tracking-[-2.045454502105713px] text-left">
            meet you! I'm
          </h1>
          <h1 className="font-bold text-[72px] leading-[72px] tracking-[-2.045454502105713px] text-left">
            Adam Keyes.
          </h1>
          <img src="tablet/rectangular.svg" alt="green line" />
        </div>

        <div className="hidden lg:block font-bold text-[88px] leading-[88px] tracking-[-2.5px] text-left">
          <h1>Nice to meet you!</h1>
          <h1>Adam Keyes</h1>
          <h1>I'm</h1>
        </div>
      </div>

      <p className="text-[#d9d9d9] font-medium text-xl leading-[40px] text-center mt-4 md:text-2xl md:leading-[40px] md:text-left lg:text-left md:transform md:translate-y-[-23rem] md:translate-x-[2rem] md:w-2/3">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <div className="flex flex-col justify-center items-center mt-8">
        <button
          onClick={scrollToContact}
          className="font-space-grotesk-bold text-white text-xl font-bold tracking-[2.2857143878936768px] ease-in-out"
        >
          CONTACT ME
        </button>
        <div className="md:hidden lg:hidden xl:hidden pt-2 pb-10">
          <img src="mobile/rectangular11.svg" alt="green line" />
        </div>

        <div className=" md:hidden lg:hidden xl:hidden pt-10 pb-2">
          <img src="mobile/rectangular1.svg" alt="rectangular1" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
