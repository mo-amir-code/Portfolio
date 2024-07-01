"use client";
import { MyContext } from "@/context/context";
import { BIO } from "@/utils/constants";
import { useContext } from "react";

const Bio = ({textColor}:{textColor?:string}) => {
  const { theme } = useContext(MyContext);

  return (
    <p style={{ color: textColor? textColor : theme.bg.primary}} className={`text-lg text-wrap max-sm:text-sm`} >
      Greeting! {BIO}
    </p>
  );
};

export default Bio;
