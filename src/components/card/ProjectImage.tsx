import Image from "next/image";

const ProjectImage = ({ image, title }: { image:string, title: string }) => {

  return (
    <div className="w-full pointer-events-none">
      <Image src={image} alt={title} width={0} height={0} sizes="100vw" style={{width: "100%", height: "auto"}} />
    </div>
  );
};

export default ProjectImage;