"use client"

import { MyContext } from "@/context/context"
import { useContext } from "react"

const Button = ({name, status}:{name:string, status?:boolean}) => {
    const {theme} = useContext(MyContext);

  return (
    <button type="submit" disabled={status? status : false} style={{backgroundColor: status? "#9ca3af" : theme.bg.primary}} className="px-2 py-1 text-black text-sm" >{name}</button>
  )
}

export default Button
