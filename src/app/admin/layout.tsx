"use client";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
      <main className="w-full min-h-screen p-4 bg-white">
        <div className="max-w-5xl w-full mx-auto">{children}</div>
      </main>
  );
};

export default Layout;
