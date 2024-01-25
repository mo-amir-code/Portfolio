import { CiFileOn } from "react-icons/ci"
import { PiEnvelopeSimpleLight, PiGearSixLight, PiGithubLogoLight, PiUserCircleLight } from "react-icons/pi"
import { VscCode } from "react-icons/vsc"


const PrimaryNav = () => {
    return (
        <nav className="w-full bg-tertiary-color flex flex-col items-center h-full justify-between" >
            <div className="w-full flex flex-col items-start justify-center cursor-pointer" >
                <div className="py-3 border-l-2 border-primary-color rounded-l w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <CiFileOn size={28} />
                    </div>
                </div>
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <PiGithubLogoLight size={28} />
                    </div>
                </div>
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <VscCode size={28} />
                    </div>
                </div>
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <PiEnvelopeSimpleLight size={28} />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col justify-end cursor-pointer" >
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <CiFileOn size={28} />
                    </div>
                </div>
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <PiUserCircleLight size={28} />
                    </div>
                </div>
                <div className="py-3 w-full hover:bg-secondary-color flex items-center justify-center" >
                    <div className="w-10 text-gray-500 flex items-center justify-center" >
                        <PiGearSixLight size={28} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default PrimaryNav
