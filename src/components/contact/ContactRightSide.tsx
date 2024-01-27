"use client"
import { useForm } from "react-hook-form"
import Button from "../buttons/Button"
import InputField from "./InputField"

interface ContactFormType {
    name: string,
    email: string,
    subject: string,
    message: string
}

const ContactRightSide = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormData>();

    const handleOnSubmit = ({ data }: { data: ContactFormType }) => {
        if (data.name && data.email && data.subject && data.message) {
            fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                reset();
            })
        }
    }

    return (
        <div className="flex-1 pl-8 max-xl:pl-0 space-y-4">
            <h2 className="font w-full max-sm:text-sm">
                Or Fill Out This Form
            </h2>
            <form onSubmit={handleSubmit((data: any) => handleOnSubmit({ data: { name: data.name, email: data.email, subject: data.subject, message: data.message } }))} className="space-y-6">
                <div className="flex items-center justify-center gap-4" >
                    <InputField label="NAME" register={register} icon="name" type="text" />
                    <InputField label="EMAIL" register={register} icon="email" type="email" />
                </div>
                <InputField label="SUBJECT" register={register} icon="subject" type="text" />
                <InputField label="MESSAGE" register={register} icon="message" type="text" isTextArea={true} />
                <Button name="SUBMIT" />
            </form>
        </div>
    )
}

export default ContactRightSide
