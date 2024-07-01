import Bio from "@/components/Bio";

const About = () => {
  return (
    <div className="w-full bg-tertiary-color px-8 py-20 text-gray-100">
      <div className="space-y-2 font-[Montserrat] pb-5 border-b border-gray-100" >
        <h2 className="text-xl font-semibold w-full max-sm:text-lg">About me</h2>
        <Bio textColor="white" />
      </div>
    </div>
  );
};

export default About;
