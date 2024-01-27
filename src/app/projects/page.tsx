import ProjectCard from "@/components/ProjectCard";
import { ProjectsData } from "@/data";

const Projects = () => {
  return (
    <div className="w-full bg-tertiary-color px-8 py-16 text-gray-100">
      <div className="space-y-2 font-[JetBrains Mono] space-y-4">
        <h2 className="w-full font-semibold">{"Stuff I've Built So Far"}</h2>
        <div className="w-full flex justify-center flex-wrap gap-3">
          {ProjectsData.map((item, idx) => (
            <ProjectCard
              key={idx}
              title={item.title}
              description={item.description}
              flags={item.flags as [string]}
              source={item.source}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
