"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/reduxTypes";
import TextInputField from "../auth/inputFields/TextInputField";
import { ProjectFormType } from "./types";
import { useAddProjectMutation } from "@/redux/queries/project/projectQuery";
import Button from "../auth/button/Button";

const ProjectForm = () => {
  const [addProject] = useAddProjectMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ProjectFormType>();

  const handleOnSubmit = async (data:ProjectFormType) => {
    try {

      let tags:string | [string] = data.tags as string;
      tags = tags.split(",") as [string];

      const { data:resData, error } = await addProject({...data, tags}) as { data:APIRequestType, error?:{data:APIRequestType} }

      if(resData?.success){
        toast.success(resData.message);
        reset();
      }

      if(error?.data?.success === false){
        toast.error(error?.data?.message);
      }

    } catch (error) {
      console.error(error);
      toast.error("Something gone wrong!");
    }
  }

  return (
    <div className="w-full max-w-3xl space-y-4 border rounded-lg p-4 mx-auto flex flex-col">
      <h1 className="text-xl font-semibold" >Add Project</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full space-y-2">
        <TextInputField
          name="Title"
          placeholder="Enter title here"
          type="text"
          register={register("title", { required: "Title is required" })}
          error={errors.title?.message || undefined}
        />
        <TextInputField
          name="Description"
          placeholder="Enter description here"
          type="text"
          register={register("description", { required: "Description is required" })}
          error={errors.description?.message || undefined}
        />
        <TextInputField
          name="Tags"
          placeholder="Enter tags here"
          type="text"
          register={register("tags", { required: "Tags are required" })}
          error={errors.tags?.message || undefined}
        />
        <TextInputField
          name="Image URL"
          placeholder="Enter image url here"
          type="text"
          register={register("image", { required: "Image is required" })}
          error={errors.image?.message || undefined}
        />
        <TextInputField
          name="Source Link"
          placeholder="Enter source link here"
          type="text"
          register={register("sourceLink")}
          error={errors.sourceLink?.message || undefined}
        />
        <TextInputField
          name="Deployed Link"
          placeholder="Enter deployed project link here"
          type="text"
          register={register("deployedLink")}
          error={errors.deployedLink?.message || undefined}
        />
        <TextInputField
          name="Secret Code"
          placeholder="Enter secret code here"
          type="password"
          register={register("secretCode", {required: "Secret code is required"})}
          error={errors.secretCode?.message || undefined}
        />
        <Button name="Submit" />
      </form>
    </div>
  );
};

export default ProjectForm;