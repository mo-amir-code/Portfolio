"use client"
import { useContext } from "react"
import Socials from "./Socials"
import { MyContext } from "@/context/context"


const ContactLeftSide = () => {
    const { theme } = useContext(MyContext);

    return (
        <div style={{borderColor: theme.bg.primary}} className="flex-1 border-r max-xl:border-none space-y-3">
            <h2 className="font w-full max-sm:text-sm">
                Reach Out Via Socials
            </h2>
            <Socials />
        </div>
    )
}

export default ContactLeftSide
