"use client";

import { MyContext } from "@/context/context";
import { useContext } from "react";

const Loader = () => {
  const { theme } = useContext(MyContext);

  return (
    <div className="max-w-[200px] flex items-center justify-center" >
      <div
        className="loading-wave"
      >
        <div style={{ backgroundColor: theme.bg.primary }} className="loading-bar"></div>
        <div style={{ backgroundColor: theme.bg.primary }} className="loading-bar"></div>
        <div style={{ backgroundColor: theme.bg.primary }} className="loading-bar"></div>
        <div style={{ backgroundColor: theme.bg.primary }} className="loading-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
