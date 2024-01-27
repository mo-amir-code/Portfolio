import ContactLeftSide from "@/components/contact/ContactLeftSide";
import ContactRightSide from "@/components/contact/ContactRightSide";


const Contact = () => {
  return (
    <div className="w-full h-full font-[JetBrains Mono] no-scrollbar text-white px-8 py-20 overflow-y-auto">
      <div className="w-full h-full flex max-xl:flex-col max-xl:gap-8">
        <ContactLeftSide />
        <ContactRightSide />
      </div>
    </div>
  );
};

export default Contact;
