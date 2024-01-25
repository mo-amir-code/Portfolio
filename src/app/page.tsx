import AutoTypeWriter from "@/components/AutoTypeWriter";
import Bio from "@/components/Bio";
import LinkBorderButton from "@/components/LinkBorderButton";
import LinkSolidButton from "@/components/LinkSolidButton";


const page = () => {
 
  return (
    <div className="px-8">
      <div className="my-28 space-y-6 font-[Montserrat]" >
        <h2 className="font-bold text-5xl text-white max-md:text-4xl" >Mo Amir</h2>
        <h3 className="text-2xl text-white max-md:text-xl" >I am a <AutoTypeWriter /></h3>
        <Bio />
        <div className="flex items-center justify-start gap-6 flex-wrap" >
          <LinkSolidButton path="/projects" content="View Work" />
          <LinkBorderButton path="/contact" content="Contact" />
        </div>
      </div>
    </div>
  );
};

export default page;
