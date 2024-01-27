"use client"
import { MyContext } from "@/context/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CiFileOn } from "react-icons/ci";
import {
  PiEnvelopeSimpleLight,
  PiGearSixLight,
  PiGithubLogoLight,
  PiUserCircleLight,
} from "react-icons/pi";
import { VscCode } from "react-icons/vsc";

const PrimaryNav = () => {
  const path = usePathname();
  const {theme} = useContext(MyContext);

  return (
    <nav className="w-full bg-tertiary-color flex flex-col items-center h-full justify-between">
      <div className="w-full flex flex-col items-start justify-center cursor-pointer">
        <div style={{borderColor: path === "/"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <CiFileOn size={28} />
            </div>
          </Link>
        </div>
        <div style={{borderColor: path === "/github"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/github"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <PiGithubLogoLight size={28} />
            </div>
          </Link>
        </div>
        <div style={{borderColor: path === "/projects"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/projects"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <VscCode size={28} />
            </div>
          </Link>
        </div>
        <div style={{borderColor: path === "/contact"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/contact"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <PiEnvelopeSimpleLight size={28} />
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col justify-end cursor-pointer">
        <div style={{borderColor: path === "/resume"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/resume"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <CiFileOn size={28} />
            </div>
          </Link>
        </div>
        <div style={{borderColor: path === "/about"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/about"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <PiUserCircleLight size={28} />
            </div>
          </Link>
        </div>
        <div style={{borderColor: path === "/settings"? theme.bg.primary : "transparent"}} className={`py-3 rounded-l border-l-2 w-full hover:bg-secondary-color flex items-center justify-center`}>
          <Link href={"/settings"} >
            <div className="w-10 text-gray-500 flex items-center justify-center">
              <PiGearSixLight size={28} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNav;
