"use client";
import Loader from "@/components/Loader";
import ProjectCard from "@/components/card/ProjectCard";
import { useGetProjectsQuery } from "@/redux/queries/project/projectQuery";
import toast from "react-hot-toast";
import { ProjectCardType } from "./types";

const Projects = () => {
  const { data, isLoading, isFetching, isError, isSuccess } = useGetProjectsQuery(undefined);

  if (isLoading || isFetching) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    console.error(data);
    toast.error("Something error occurred");
    return;
  }

  return (
    <div className="w-full h-full bg-tertiary-color px-8 py-16 text-gray-100">
      <div className="space-y-2 font-[JetBrains Mono] space-y-4">
        <h2 className="w-full font-semibold">{"Stuff I've Built So Far"}</h2>
        <div className="w-full flex justify-center flex-wrap gap-2">
          {isSuccess
            ? data?.data?.map(
                ({
                  _id,
                  description,
                  title,
                  image,
                  sourceLink,
                  tags,
                  deployedLink,
                }: ProjectCardType) => (
                  <ProjectCard
                    key={_id}
                    image={image}
                    title={title}
                    description={description}
                    flags={tags as [string]}
                    source={sourceLink}
                    url={deployedLink}
                  />
                )
              )
            : null}
        </div>
      </div>
    </div>
  );
};

export default Projects;
