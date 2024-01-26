import Button from "./Button"
import InputField from "./InputField"


const ContactRightSide = () => {
    return (
        <div className="flex-1 pl-8 max-xl:pl-0 space-y-4">
            <h2 className="font w-full max-sm:text-sm">
                Or Fill Out This Form
            </h2>
            <form action="" className="space-y-6">
                <div className="flex items-center justify-center gap-4" >
                    <InputField label="NAME" icon="name" type="text" />
                    <InputField label="EMAIL" icon="email" type="email" />
                </div>
                <InputField label="SUBJECT" icon="subject" type="text" />
                <InputField label="MESSAGE" icon="message" type="text" isTextArea={true} />
                <Button name="SUBMIT" />
            </form>
        </div>
    )
}

export default ContactRightSide
