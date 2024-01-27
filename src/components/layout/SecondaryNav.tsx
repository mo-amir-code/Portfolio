import { navData } from '@/data'
import Image from 'next/image'
import React, { useContext } from 'react'
import { RxCaretRight } from 'react-icons/rx'
import react_icon from "@/assets/files/react.svg"
import html_icon from "@/assets/files/html.svg"
import contact_icon from "@/assets/files/css.svg"
import js_icon from "@/assets/files/javascript.svg"
import md_icon from "@/assets/files/markdown.svg"
import pdf_icon from "@/assets/files/pdf.svg"
import Link from 'next/link'
import { MyContext } from '@/context/context'

const SecondaryNav = () => {
  const { isFileOpen, setIsFileOpen} = useContext(MyContext);

  return (
    <div className='w-[12.3rem] border-r border-black h-full space-y-4 py-1 text-gray-100 ' >
      <h2 className='font-[Montserrat] px-4' >EXPLORER</h2>
      <div className='space-y-3' >
        <h2 onClick={() => setIsFileOpen(!isFileOpen)} className='flex items-center justify-start px-2 text-sm font-semibold cursor-pointer' ><RxCaretRight size={20} className={`${isFileOpen && "rotate-90"} transition-all duration-200`} /><span>PORTFOLIO</span></h2>
        <div className={`${!isFileOpen && "hidden"}`} >
          {
            navData.map((nav, idx) => (
              <Link href={nav.path} key={idx} className='flex items-center gap-2 py-1 cursor-pointer px-5 hover:bg-tertiary-color' >
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
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SecondaryNav
