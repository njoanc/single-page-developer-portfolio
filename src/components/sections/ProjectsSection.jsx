import { useEffect, useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import Button from "../ui/buttons/Button";

function ProjectsSection() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const renderProjects = projects?.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ));

  return (
    <section className="section-container mb-[8.0rem] md:mb-[145px] lg:mb-[140px]">
      <div className="flex justify-between items-center mb-10 md:mb-[60px] lg:mb-[80px]">
        <h2 className="text-h1 md:text-h1md md:leading-[72px] lg:text-xl">
          Projects
        </h2>
        <Button type="link" href="#contact">
          Contact Me
        </Button>
      </div>

      <div className="grid gap-y-[86.4px] md:grid-cols-2 md:gap-y-[106px] md:gap-x-6 lg:gap-x-[30px] lg:gap-y-[69px]">
        {renderProjects && renderProjects}
      </div>
    </section>
  );
}

export default ProjectsSection;
