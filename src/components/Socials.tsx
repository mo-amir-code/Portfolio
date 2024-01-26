"use client"

import { MyContext } from "@/context/context"
import { useContext } from "react"


const Socials = () => {
    const {theme} = useContext(MyContext);

  return (
    <div className="font-[Montserrat] font-semibold leading-8 text-lg max-md:text-base max-sm:text-xs max-sm:leading-9" >
        <p><span className="mr-2" >1</span><span style={{color: theme.bg.primary}} >. socials</span> {"{"}</p>
        <p><span className="mr-8" >2</span>email: <span style={{color: theme.bg.primary}} ><a href="mailto:mo.amir.code@gmail.com" target="_blank" className="hover:underline cursor-pointer"  >mo.amir.code@gmail.com</a></span></p>      
        <p><span className="mr-8" >3</span>github: <span style={{color: theme.bg.primary}} ><a href="https://github.com/mo-amir-code" target="_blank" className="hover:underline" >mo-amir-code</a></span></p>      
        <p><span className="mr-8" >4</span>linkedin: <span style={{color: theme.bg.primary}} ><a href="https://www.linkedin.com/in/mo-amir/" target="_blank" className="hover:underline" >mo-amir</a></span></p>      
        <p><span className="mr-8" >5</span>twitter: <span style={{color: theme.bg.primary}} ><a href="https://twitter.com/mo_amir_code" target="_blank" className="hover:underline" >mo_amir_code</a></span></p>      
        <p><span className="mr-2" >6</span>{"}"}</p>
    </div>
  )
}

export default Socials
