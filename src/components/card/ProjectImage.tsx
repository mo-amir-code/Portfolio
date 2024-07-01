import Image from "next/image";

const ProjectImage = ({ image, title }: { image:string, title: string }) => {

  return (
    <div className="w-full pointer-events-none">
      <Image src={image} alt={title} width={300} height={167} />
    </div>
  );
};

export default ProjectImage;