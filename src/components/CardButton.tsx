"use client";
import { MyContext } from "@/context/context";
import { useContext } from "react";

const CardButton = ({ content, path }: { content: string; path: string }) => {
  const { theme } = useContext(MyContext);

  return (
    <a href={path} target="_blank" style={{width: `${content.length*9.33}px`}} className={`relative font-medium group h-6 `}>
      <span
        style={{ backgroundColor: theme.bg.primary }}
        className="w-full z-0 absolute bottom-0 left-0 h-[2px] duration-200 transition-all group-hover:h-full"
      />
      <span className="z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center">{content}</span>
    </a>
  );
};

export default CardButton;
