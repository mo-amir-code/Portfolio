import Image from "next/image"
import vscode_icon from "@/assets/app/vs code.svg"


const Header = () => {
  return (
    <header className="w-full flex items-center border-b border-black justify-between px-2 py-1 text-white text-sm bg-secondary-color" >
        <div className="flex items-center justify-start gap-4 flex-1" >
            <div className="w-4" >
                <Image src={vscode_icon} alt="vs code icon" />
            </div>
            <ul className="flex items-center cursor-pointer justify-start gap-4 max-lg:hidden" >
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
                <li>Help</li>
            </ul>
        </div>
        <div className="flex-1 flex items-center justify-center max-lg:flex-[3]" >
            <h1 className="text-center max-sm:text-xs" >Mo Amir - Full Stack Web Developer</h1>
        </div>
        <div className="flex items-center justify-end gap-2 flex-1" >
            <span className="bg-[#F1FA8C] max-sm:w-[0.7rem] max-sm:h-[0.7rem] w-[0.8rem] h-[0.8rem] rounded-full" />
            <span className="bg-[#50FA7B] max-sm:w-[0.7rem] max-sm:h-[0.7rem] w-[0.8rem] h-[0.8rem] rounded-full" />
            <span className="bg-[#FF5555] max-sm:w-[0.7rem] max-sm:h-[0.7rem] w-[0.8rem] h-[0.8rem] rounded-full" />
        </div>
    </header>
  )
}

export default Header
