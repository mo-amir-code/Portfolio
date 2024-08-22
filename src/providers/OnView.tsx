"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OnView = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </div>
  );
};

export default OnView;
