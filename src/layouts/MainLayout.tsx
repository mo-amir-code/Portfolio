"use client";
import Navbar from "@/components/layout/Navbar";
import PrimaryNav from "@/components/layout/PrimaryNav";
import SecondaryNav from "@/components/layout/SecondaryNav";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full" >
      <div className="w-12 h-full bg-tertiary-color">
        <PrimaryNav />
      </div>
      <div className="h-full bg-secondary-color max-sm:hidden">
        <SecondaryNav />
      </div>
      <div className="relative flex-grow h-[90vh] overflow-hidden no-scrollbar bg-tertiary-color">
        <div className="w-full h-full overflow-y-auto scroll-smooth">
          {children}
        </div>
        <div className="absolute top-0 left-0 w-full bg-secondary-color no-scrollbar overflow-x-auto">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
