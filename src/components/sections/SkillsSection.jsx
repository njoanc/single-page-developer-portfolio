import { useEffect, useState } from "react";
import SkillCard from "../cards/SkillsCard";

function SkillsSection() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const renderSkills = skills.map((skill) => (
    <SkillCard key={skill.title} skill={skill} />
  ));

  return (
    <section className="relative mb-20 md:mb-[100px] lg:mb-[140px] section-container skills-bg-image">
      <div className="grid justify-center space-y-6 text-center border-y-[1px] w-full py-10 md:border-t-[1px] md:border-b-0 md:grid-cols-2 md:text-left md:space-y-0 md:gap-y-[52px] md:pt-[52px] lg:pt-[72px] md:pb-0 xl:grid-cols-3 xl:gap-y-[58px]">
        {renderSkills}
      </div>
    </section>
  );
}

export default SkillsSection;
