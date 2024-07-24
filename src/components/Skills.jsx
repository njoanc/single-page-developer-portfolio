import React, { useState, useEffect } from "react";
import skillsData from "../skills.json";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  return (
    <div className="bg-black font-space-grotesk text-center pt-[3rem] md:text-left md:px-5 lg:px-10 xl:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-6 md:transform md:translate-y-[-29rem] lg:grid-cols-3 xl:grid-cols-3 lg:gap-3 xl:gap-3 xl:translate-y-[-25rem] xl:pl-[7rem] xl:translate-y-[-32rem]">
        {skills.map((skill, index) => (
          <div key={index} className="p-4">
            <h2 className="text-[#d9d9d9] font-bold text-5xl tracking-[3px] md:pb-4">
              {skill.title}
            </h2>
            <p className="text-[#d9d9d9] font-medium text-lg leading-[40px]">
              {skill.yearsOfExperience} Years Experience
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end pt-4 md:transform md:translate-x-4 md:translate-y-[-35.5rem] lg:translate-x-10 lg:w-1/4 xl:w-1/5 lg:h-[129px] xl:h-[180px] xl:translate-x-[91rem] xl:translate-y-[-40rem]">
        <img
          src="mobile/group26.svg"
          alt="group26"
          className="transform rotate-180"
        />
      </div>
      <div className="md:hidden lg:hidden xl:hidden pt-[1.5rem] pb-5 px-[2rem]">
        <img
          src="mobile/rectangular1.svg"
          alt="rectangular1"
          className="transform translate-x-[1rem] translate-y-[-5.6rem] w-[22rem]"
        />
      </div>
    </div>
  );
}

export default Skills;
