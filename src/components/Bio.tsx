"use client";
import { MyContext } from "@/context/context";
import { BIO } from "@/utils/constants";
import { useContext, useState } from "react";

const Bio = ({ textColor }: { textColor?: string }) => {
  const [isExpand, setIsExpand] = useState(false);
  const { theme } = useContext(MyContext);

  return (
    <p
      style={{ color: textColor ? textColor : theme.bg.primary }}
      className={`text-lg text-wrap max-sm:text-sm`}
    >
      <span className="max-sm:hidden">Greeting! {BIO}</span>
      <span className="sm:hidden">
        Greeting! {isExpand ? BIO : BIO.slice(0, 110)}
      </span>{" "}
      <button
        onClick={()=> setIsExpand((prev) => !prev)}
        className="font-semibold sm:hidden"
      >
        {isExpand ? `less` : "more..."}
      </button>
    </p>
  );
};

export default Bio;
