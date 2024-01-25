"use client";
import { MyContext } from "@/context/context";
import { useContext } from "react";

const Bio = () => {
  const { theme } = useContext(MyContext);

  return (
    <p style={{ color: theme.bg.primary }} className={`text-lg text-wrap max-sm:text-sm`}>
      Greeting! I'm Mo Amir, a full stack web, Discord bot developer and a freelancer. I have
      hands-on experience to build amazing full stack web projects, and always curios to learn new or trending technologies.
    </p>
  );
};

export default Bio;
