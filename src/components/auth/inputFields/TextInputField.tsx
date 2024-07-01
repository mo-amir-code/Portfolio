import React from "react";
import { TextInputFieldType } from "./types";

const TextInputField = ({
  name,
  placeholder,
  type,
  register,
  error
}: TextInputFieldType) => {
  return (
    <div className="w-full" >
      <div className="w-full p-2 border smooth_transition hover:border-primary-color">
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register}
          className="w-full px-2 py-2 text-sm outline-none"
        />
      </div>
      {
       error? <span className="text-sm text-red-600" >{error}</span> : null 
      }
    </div>
  );
};

export default TextInputField;
