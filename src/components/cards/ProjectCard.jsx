import Button from "../ui/buttons/Button";

function ProjectCard({ project }) {
  const tags = project.tags.map((tag) => (
    <span className="uppercase text-light-gray" key={tag}>
      {tag}
    </span>
  ));

  return (
    <article className="relative">
      <div className="mb-5 lg:relative ">
        <picture className="">
          <source
            media="(min-width: 33.75em)"
            srcSet={`/images/${project.src[1].large}`}
          />
          <img src={`/images/${project.src[0].small}`} alt={project.title} />
        </picture>

        <div className="flex space-x-[30px] absolute bottom-[-40px]  lg:opacity-0 lg:transition hover:lg:opacity-80 lg:space-x-0 lg:absolute lg:top-0 lg:flex-col lg:gap-y-[60px] lg:bg-black  lg:justify-center lg:items-center lg:w-full lg:h-full">
          <Button type="link" href={project.livePage}>
            View Project
          </Button>
          <Button type="link" href={project.codePage}>
            View Code
          </Button>
        </div>
      </div>

      <h3 className="text-md uppercase font-bold mb-[7px]">{project.title}</h3>

      <div className="flex space-x-[18px]">{tags && tags}</div>
    </article>
  );
}

export default ProjectCard;
