"use client"
import { MyContext } from "@/context/context"
import Link from "next/link"
import { useContext } from "react"


const LinkBorderButton = ({path, content}:{path:string, content: string}) => {
    const {theme} = useContext(MyContext);

  return (
    <Link href={path} style={{borderColor: theme.bg.primary}} className={`px-3 py-[0.38rem] border-2 font-bold text-lg hover:shadow-xl tracking-wider text-white max-md:text-base max-sm:text-sm`} >{content}</Link>
  )
}

export default LinkBorderButton
