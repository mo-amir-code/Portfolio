"use client";
import store from "@/redux/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <main className="w-full min-h-screen p-4 bg-white">
        <div className="max-w-5xl w-full mx-auto">{children}</div>
      </main>
    </Provider>
  );
};

export default Layout;
