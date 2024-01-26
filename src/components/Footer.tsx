import Image from "next/image"
import git_icon from "@/assets/app/git.png"
import x_icon from "@/assets/app/x.svg"
import warning_icon from "@/assets/app/warning.png"
import nextjs_icon from "@/assets/app/nextjs.svg"
import doubeltick_icon from "@/assets/app/done-all.svg"
import bell_icon from "@/assets/app/bell.png"


const Footer = () => {
    return (
        <header className="w-full z-10 flex items-center border-t border-black justify-between px-3 text-white text-xs bg-secondary-color" >
            <div className="flex items-center justify-start flex-1" >

                <div className="flex items-center justify-center gap-2 hover:bg-gray-500 p-1 cursor-pointer" >
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={git_icon} alt="git icon" />
                        </div>
                        <span className="max-sm:hidden" >main</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 hover:bg-gray-500 p-1 cursor-pointer" >
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={x_icon} alt="cross icon" />
                        </div>
                        <span className="max-sm:hidden" >0</span>
                    </div>
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={warning_icon} alt="warning icon" />
                        </div>
                        <span className="max-sm:hidden" >0</span>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-end gap-2 flex-1" >

                <div className="flex items-center justify-center gap-2 hover:bg-gray-500 p-1 cursor-pointer" >
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={nextjs_icon} alt="next js icon" />
                        </div>
                        <span className="max-sm:hidden" >Powered by Next.js</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 hover:bg-gray-500 p-1 cursor-pointer" >
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={doubeltick_icon} alt="next js icon" />
                        </div>
                        <span className="max-sm:hidden" >Prettier</span>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 hover:bg-gray-500 p-1 cursor-pointer" >
                    <div className="flex items-center justify-center gap-1" >
                        <div className="w-4" >
                            <Image src={bell_icon} alt="bell icon" />
                        </div>
                        {/* <span>Prettier</span> */}
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Footer
