function SkillCard({ skill }) {
  return (
    <section>
      <h2 className="font-bold text-[32px] leading-10 tracking-[-1px] md:text-lg md:mb-[14px]">
        {skill.title}
      </h2>

      <p className="text-[16px] text-light-gray leading-[26px] md:text-base">
        {skill.experience}
      </p>
    </section>
  );
}

export default SkillCard;
