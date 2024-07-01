"use client"
import React, { useState } from "react";
import { TextInputFieldType } from "./types";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const TextInputField = ({
  name,
  placeholder,
  type,
  register,
  error
}: TextInputFieldType) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);

  return (
    <div className="w-full" >
      <div className="relative w-full p-2 border smooth_transition hover:border-primary-color">
        <input
          type={type === "password"? isPasswordShowing? "text" : "password" : type}
          id={name}
          placeholder={placeholder}
          {...register}
          className="w-full px-2 py-2 text-sm outline-none"
        />

       {type === "password" ? <div onClick={()=> setIsPasswordShowing((prev)=> !prev)} className="absolute select-none top-1/2 -translate-y-1/2 right-2 cursor-pointer" >
         {isPasswordShowing? <BsEyeSlash /> : <BsEye/>}
       </div> : null}

      </div>
      {
       error? <span className="text-sm text-red-600" >{error}</span> : null 
      }
    </div>
  );
};

export default TextInputField;
