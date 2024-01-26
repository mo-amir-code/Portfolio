"use client"
import Navbar from "@/components/Navbar"
import PrimaryNav from "@/components/PrimaryNav"
import SecondaryNav from "@/components/SecondaryNav"
import MyContextProvider from "@/context/context"


const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    return (
        <MyContextProvider>
            <div className="flex overflow-hidden" >
                <div className="w-12 bg-tertiary-color" >
                    <PrimaryNav />
                </div>
                <div className="bg-secondary-color max-sm:hidden" >
                    <SecondaryNav />
                </div>
                <div className="relative flex-grow overflow-y-auto no-scrollbar flex-col flex items-center bg-tertiary-color" >
                    <div className="absolute top-0 left-0 w-full overflow-x-auto" >
                        <Navbar />
                    </div>
                    {children}
                </div>
            </div>
        </MyContextProvider>
    )
}

export default MainLayout
