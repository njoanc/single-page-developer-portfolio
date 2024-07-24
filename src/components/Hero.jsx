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
    <div className="bg-black px-[0.5rem] font-space-grotesk pt-[5rem]">
      <div className="text-[white]">
        <h1 className=" font-bold text-5xl tracking-[-1.1363636255264282px] text-center md:hidden lg:text-[88px] lg:leading-10 lg:tracking-[-2.5px] lg:text-left xl:text-[88px] xl:leading-10 xl:tracking-[-2.5px]">
          Nice to meet you! I'm Adam Keyes.
        </h1>
        <div className="md:hidden lg:hidden xl:hidden pl-[7rem] pt-2 pb-5">
          <img src="mobile/rectangular.svg" alt="green line" />
        </div>
        <div className="hidden md:block lg:hidden font-bold text-[70px] transform md:translate-y-[-30rem] md:translate-x-[2rem] w-2/3">
          <h1 className="leading-[72px] tracking-[3px] text-left">Nice to</h1>
          <h1 className="leading-[72px] tracking-[3px] text-left">
            meet you! I'm
          </h1>
          <h1 className="leading-[72px] tracking-[3px] text-left">
            Adam Keyes.
          </h1>
          <img src="tablet/rectangular.svg" alt="green line" />
        </div>

        <div className=" hidden relative lg:z-10  xl:z-10 lg:block font-bold lg:text-[75px] lg:leading-[70px] xl:text-[135px] xl:leading-[150px] tracking-[-2.5px] xl:tracking-[-2.5px] text-left lg:w-2/3 xl:w-2/3 lg:transform lg:translate-y-[-23.5rem] lg:translate-x-[4rem] xl:transform xl:translate-y-[-44.5rem] xl:pl-[4.5rem]">
          <h1>Nice to meet you!</h1>
          <h1> I'm Adam Keyes.</h1>
          <img
            src="desktop/rectangular.svg"
            alt="green line"
            className=" lg:pt-3 lg:tranform lg:translate-x-[7.5rem] lg:w-[415px] xl:pt-3 xl:tranform xl:translate-x-[14.5rem] xl:w-[700px]"
          />
        </div>
      </div>

      <p className="md:relative text-[#d9d9d9] font-medium text-xl leading-[40px] text-center mt-4 md:text-2xl md:leading-[30px] lg:leading-[40px] xl:leading-[40px] md:text-left lg:text-left xl:text-left md:transform md:translate-y-[-28.5rem] md:z-10 md:translate-x-[2rem] md:w-2/3 lg:w-[445px] xl:w-[545px] lg:transform lg:translate-y-[-21.5rem] lg:translate-x-[4.5rem] xl:transform xl:translate-y-[-42.5rem] xl:translate-x-[8.5rem] ">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <div className="flex flex-col justify-center items-center mt-8 md:transform md:translate-x-[-17.05rem] md:translate-y-[-29rem] lg:translate-y-[-20rem] lg:translate-x-[-22.05rem] xl:translate-y-[-41rem] xl:translate-x-[-43.05rem]">
        <button
          onClick={scrollToContact}
          className="font-space-grotesk hover:text-[#4EE1A0] text-white text-xl font-bold tracking-[2.2857143878936768px] ease-in-out"
        >
          CONTACT ME
        </button>
        <div className="pt-2 pb-10  ">
          <img
            src="mobile/rectangular11.svg"
            alt="green line"
            className="h-[0.2rem] w-[10rem]"
          />
        </div>

        <div className="md:hidden lg:hidden xl:hidden pt-10 pb-2">
          <img src="mobile/rectangular1.svg" alt="rectangular1" />
        </div>
        <div className="hidden lg:hidden md:block md:px-2 w-full md:transform md:translate-x-[18rem] ">
          <img src="tablet/rectangular1.svg" alt="rectangular1" />
        </div>
        <div className="hidden md:hidden lg:block xl:hidden ">
          <img
            src="desktop/rectangular1.svg"
            alt="rectangular1"
            className="lg:w-screen lg:translate-x-[22rem] lg:px-[4rem]"
          />
        </div>
      </div>
      <div className="hidden md:hidden lg:hidden xl:block ">
        <img
          src="desktop/rectangular1.svg"
          alt="rectangular1"
          className="xl:transform xl:translate-y-[-35rem] xl:px-[9rem] xl:w-screen"
        />
      </div>
    </div>
  );
}

export default Hero;
