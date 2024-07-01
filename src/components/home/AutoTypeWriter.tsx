"use client"
import { MyContext } from "@/context/context";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";

const AutoTypeWriter = () => {
    const {theme} = useContext(MyContext);

  return (
    <span style={{ color: theme.bg.primary, fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Web Developer', 'Blockchain DApp Developer', 'Learner']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
  )
}

export default AutoTypeWriter
