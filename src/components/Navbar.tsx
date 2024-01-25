import { navData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import react_icon from "@/assets/files/react.svg"
import html_icon from "@/assets/files/html.svg"
import contact_icon from "@/assets/files/css.svg"
import js_icon from "@/assets/files/javascript.svg"
import md_icon from "@/assets/files/markdown.svg"
import pdf_icon from "@/assets/files/pdf.svg"
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { MyContext } from "@/context/context";


const Navbar = () => {
    const path = usePathname();
    const { theme } = useContext(MyContext);

    return (
        <div className="flex w-[1036px] items-center justify-start bg-secondary-color overflow-hidden" >
            {
                navData.map((nav, idx) => (
                    <Link href={nav.path} key={idx} className={`relative rounded-t overflow-hidden flex items-center border-r-2 border-tertiary-color gap-2 py-3 cursor-pointer px-5 bg-secondary-color text-white`} >
                        <div className='w-4' >{(() => {
                            switch (nav.path) {
                                case "/":
                                    return <Image src={react_icon} alt={nav.name} />
                                case "/about":
                                    return <Image src={html_icon} alt={nav.name} />
                                case "/contact":
                                    return <Image src={contact_icon} alt={nav.name} />
                                case "/projects":
                                    return <Image src={js_icon} alt={nav.name} />
                                case "/github":
                                    return <Image src={md_icon} alt={nav.name} />
                                case "/resume":
                                    return <Image src={pdf_icon} alt={nav.name} />
                            }
                        })()}</div>
                        <span className='text-sm' >{nav.name}</span>
                        {path === nav.path && <span className={`absolute top-0 left-0 w-full h-[0.5px] bg-[${theme.bg.primary}]`} />}
                    </Link>
                ))
            }
        </div>
    )
}

export default Navbar
