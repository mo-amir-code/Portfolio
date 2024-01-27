"use client";
import Image from "next/image";
import ig from "@/assets/projects/instagram-poster.png";
import creto from "@/assets/projects/creto.png";
import newflix from "@/assets/projects/newflix.png";
import mern from "@/assets/projects/mern.png";

const ProjectImage = ({ id, title }: { id: string; title: string }) => {
  const selectImage = () => {
    switch (id) {
      case "instagram":
        return ig;
      case "creto":
        return creto;
      case "newflix":
        return newflix;
      case "mern":
        return mern;
      default:
        return ig;
    }
  };

  return (
    <div className="w-full pointer-events-none">
      <Image src={selectImage()} alt={title} />
    </div>
  );
};

export default ProjectImage;
