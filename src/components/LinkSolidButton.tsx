"use client"
import { MyContext } from "@/context/context"
import Link from "next/link"
import { useContext } from "react"


const LinkSolidButton = ({path, content}:{path:string, content: string}) => {
    const {theme} = useContext(MyContext);

  return (
    <Link href={path} className={`px-3 py-2 bg-[${theme.bg.primary}] font-bold text-lg hover:shadow-lg tracking-wider text-white max-md:text-base max-sm:text-sm`} >{content}</Link>
  )
}

export default LinkSolidButton
