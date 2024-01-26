import ContactLeftSide from "@/components/ContactLeftSide";
import ContactRightSide from "@/components/ContactRightSide";


const Contact = () => {
  return (
    <div className="w-full h-full font-[Montserrat] no-scrollbar text-white px-8 py-8 overflow-y-auto">
      <p className="opacity-0" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius vitae consectetur ea eos numquam amet aut ipsam quae, ab veniam sunt nihil nostrum!</p>
      <div className="w-full h-full flex max-xl:flex-col max-xl:gap-8">
        <ContactLeftSide />
        <ContactRightSide />
      </div>
    </div>
  );
};

export default Contact;
