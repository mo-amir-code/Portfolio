"use client";
import { MyContext } from "@/context/context";
import OnView from "@/providers/OnView";
import React, { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { HiOutlineLink } from "react-icons/hi";
import { PiGithubLogoLight } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";

const GitCard = ({
  name,
  watchers,
  fork,
  stars,
  gitLink,
  deployedLink,
}: {
  name: string;
  watchers: number;
  fork: number;
  stars: number;
  gitLink: string;
  deployedLink?: string;
}) => {
  const { theme } = useContext(MyContext);

  return (
    <OnView className="flex-1 min-w-[250px] hover:shadow-lg duration-150 transition-all cursor-pointer bg-secondary-color px-3 py-4">
      <div className="flex flex-col gap-3 justify-between">
        <h3 style={{ color: theme.bg.primary }}>{name}</h3>
        <div className="flex items-center justify-between">
          <div
            style={{ color: theme.bg.primary }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-1">
              <RxEyeOpen size={16} />
              <span className="text-gray-100">{watchers}</span>
            </div>
            <div className="flex items-center gap-1">
              <GoRepoForked size={16} />
              <span className="text-gray-100">{fork}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegStar size={16} />
              <span className="text-gray-100">{stars}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              style={{ color: theme.bg.primary }}
              href={gitLink}
              target="_blank"
            >
              <PiGithubLogoLight size={16} />
            </a>
            {!!deployedLink && (
              <a
                style={{ color: theme.bg.primary }}
                href={deployedLink}
                target="_blank"
              >
                <HiOutlineLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </OnView>
  );
};

export default GitCard;
