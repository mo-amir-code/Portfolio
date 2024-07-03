"use client";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";
import InputField from "./InputField";
import axios from "axios";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/reduxTypes";
import { useState } from "react";

interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactRightSide = () => {
    const [isSending, setIsSending] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = async ({ data }: { data: ContactFormType }) => {
    try {
      if (data.name && data.email && data.subject && data.message) {

        setIsSending(true);

        const {data:resData, error} = await axios.post("/api/send-email", data) as { data: APIRequestType, error?:{ data:APIRequestType } };

        if(resData.success){
            reset();
            toast.success(resData.message)
        }

        if(error?.data?.success === false){
            toast.error(error?.data?.message);
        }

        setIsSending(false);
      }
    } catch (error) {
        setIsSending(false);
        console.error(error);
    }
  };

  return (
    <div className="flex-1 pl-8 max-xl:pl-0 space-y-4">
      <h2 className="font w-full max-sm:text-sm">Or Fill Out This Form</h2>
      <form
        onSubmit={handleSubmit((data: any) =>
          handleOnSubmit({
            data: {
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message,
            },
          })
        )}
        className="space-y-6"
      >
        <div className="flex items-center justify-center gap-4">
          <InputField
            label="NAME"
            register={register}
            icon="name"
            type="text"
          />
          <InputField
            label="EMAIL"
            register={register}
            icon="email"
            type="email"
          />
        </div>
        <InputField
          label="SUBJECT"
          register={register}
          icon="subject"
          type="text"
        />
        <InputField
          label="MESSAGE"
          register={register}
          icon="message"
          type="text"
          isTextArea={true}
        />
        <Button status={isSending} name="SUBMIT" />
      </form>
    </div>
  );
};

export default ContactRightSide;
