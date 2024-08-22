"use client";

import { FLAG_COLORS } from "@/utils/constants";

const Flag = ({ content }: { content: string }) => {
  const color = () => {
    const rn = Math.floor(Math.random() * FLAG_COLORS.length);
    return FLAG_COLORS[rn];
  };

  return (
    <span
      style={{ borderColor: color() }}
      className="py-1 px-2 hover:shadow-lg duration-200 transition-all border-opacity-90 rounded-full border-2 text-xs max-sm:text-[10px]"
    >
      {content}
    </span>
  );
};

export default Flag;