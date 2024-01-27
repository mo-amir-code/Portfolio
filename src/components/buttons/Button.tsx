"use client"

import { MyContext } from "@/context/context"
import { useContext } from "react"

const Button = ({name}:{name:string}) => {
    const {theme} = useContext(MyContext);

  return (
    <button type="submit" style={{backgroundColor: theme.bg.primary}} className="px-2 py-1 text-black text-sm" >{name}</button>
  )
}

export default Button
