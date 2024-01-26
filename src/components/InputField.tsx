"use client"
import { MyContext } from "@/context/context"
import { useContext } from "react"


const InputField = ({ label, icon, type, register, isTextArea }: { label: string, icon: string, type: string, register?: any, isTextArea?: boolean }) => {
    const { theme } = useContext(MyContext);

    return (
        <div className="flex flex-col w-full space-y-2" >
            <label htmlFor={icon} className="text-xs font-semibold" >{label}</label>
            <div style={{ backgroundColor: theme.bg.secondary }} className={`font-[Teko] w-full cursor-pointer border border-transparent group-focus:border-[${theme.bg.primary}] flex-1 text-xl py-3 gap-2 px-2 hover:border-primary-color hover:shadow-lg shadow-primary-color flex items-center justify-start`} >
                {!isTextArea ? <input type={type} id={icon} {...register ? { ...register(icon, { required: true }) } : null} className="text-base font-normal outline-none group w-full bg-transparent" />
                    : <textarea type={type} id={icon} {...register ? { ...register(icon, { required: true }) } : null} className="text-base font-normal outline-none group w-full bg-transparent" rows={5} />}
            </div>
        </div>
    )
}

export default InputField