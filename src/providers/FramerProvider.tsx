"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const FramerProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={path}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerProvider;
