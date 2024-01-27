import Flag from "./Flag";
import CardButton from "../buttons/CardButton";
import ProjectImage from "./ProjectImage";

export interface ProjectCardType {
  id: string;
  title: string;
  description: string;
  flags: [string];
  source?: string;
  url?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  flags,
  source,
  url,
}: ProjectCardType) => {

  return (
    <div className="flex-1 min-w-[250px] max-w-[300px] rounded-lg overflow-hidden hover:shadow-lg duration-150 transition-all cursor-pointer bg-secondary-color">
      <ProjectImage id={id} title={title} />
      <div className="px-5 py-6 space-y-2">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="">{description}</p>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {flags.map((flag, idx) => (
            <Flag key={idx} content={flag} />
          ))}
        </div>
        <div className="flex items-center flex-wrap justify-start py-3 gap-4">
          {!!source && <CardButton content="Source Code" path={source} />}
          {!!url && <CardButton content="Live Demo" path={url} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
