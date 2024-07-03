"use client";
import ProjectForm from "@/components/admin/ProjectForm";
import { useAppSelector } from "@/redux/hooks";
import { selectIsAdminLoggedIn } from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Admin = () => {
  const navigate = useRouter();
  const isAdminLoggedIn = useAppSelector(selectIsAdminLoggedIn);

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate.push("/admin/auth/signin");
    }
  }, [isAdminLoggedIn, navigate]);

  return (
    <div className="w-full">
      <ProjectForm />
    </div>
  );
};

export default Admin;
