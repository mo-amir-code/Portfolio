"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { SignInFormType } from "./types";
import TextInputField from "./inputFields/TextInputField";
import Button from "./button/Button";
import toast from "react-hot-toast";
import Link from "next/link";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SignInFormType>();

  const handleOnSubmit = (data:SignInFormType) => {
    try {

      

    } catch (error) {
      console.error(error);
      toast.error("Something gone wrong!");
    }
  }

  return (
    <div className="w-full max-w-3xl space-y-4 border rounded-lg p-4 mx-auto flex flex-col">
      <h1 className="text-xl font-semibold" >Sign In</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full space-y-2">
        <TextInputField
          name="Email"
          placeholder="Enter admin email"
          type="email"
          register={register("email", { required: "Email is required" })}
          error={errors.email?.message || undefined}
        />
        <TextInputField
          name="Password"
          placeholder="Enter password"
          type="password"
          register={register("password", { required: "Password is required" })}
          error={errors.password?.message || undefined}
        />
        <TextInputField
          name="secretCode"
          placeholder="Enter secret code"
          type="password"
          register={register("secretCode", { required: "Secret code is required" })}
          error={errors.secretCode?.message || undefined}
        />
        <Link href={"/admin/auth/signup"} className="px-1 text-sm font-medium py-2" >Don't have an account? Click here</Link>
        <Button name="Login" />
      </form>
    </div>
  );
};

export default SignIn;
