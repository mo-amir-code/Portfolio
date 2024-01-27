"use client";
import { MyContext } from "@/context/context";
import Image from "next/image";
import { useContext } from "react";

const Hero = ({
  avatarUrl,
  repos,
  followers,
  name,
}: {
  avatarUrl: string;
  repos: number;
  followers: number;
  name: string;
}) => {
  const { theme } = useContext(MyContext);

  return (
    <div className="w-full font-[Montserrat] max-sm:text-xs gap-4 font-medium flex items-center justify-center bg-secondary-color py-5 px-4">
      <div
        style={{ borderColor: theme.bg.primary }}
        className="flex h-[60px] items-center justify-center gap-2 max-sm:border-r-[1px] border-r-[2px] pr-4"
      >
        <div className="rounded-full flex items-center justify-center overflow-hidden">
          <Image src={avatarUrl} alt={name} width={60} height={60} />
        </div>
        <h2>{name}</h2>
      </div>
      <div
        style={{ borderColor: theme.bg.primary }}
        className="pr-4 h-[60px] flex items-center justify-center max-sm:border-r-[1px] border-r-[2px]"
      >
        <h2>{repos} repos</h2>
      </div>
      <div className="h-full">
        <h2>{followers} followers</h2>
      </div>
    </div>
  );
};

export default Hero;
