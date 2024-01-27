"use client"
import Navbar from "@/components/layout/Navbar"
import PrimaryNav from "@/components/layout/PrimaryNav"
import SecondaryNav from "@/components/layout/SecondaryNav"
import MyContextProvider from "@/context/context"


const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <MyContextProvider>
            <div className="flex h-full w-full" >
                <div className="w-12 h-full bg-tertiary-color" >
                    <PrimaryNav />
                </div>
                <div className="h-full bg-secondary-color max-sm:hidden" >
                    <SecondaryNav />
                </div>
                <div className="relative w-full h-full overflow-y-auto no-scrollbar bg-tertiary-color">
                    <div className="absolute top-0 left-0 w-full bg-secondary-color no-scrollbar overflow-x-auto" >
                        <Navbar />
                    </div>
                    <div className="w-full" >
                        {children}
                    </div>
                </div>
            </div>
        </MyContextProvider>
    )
}

export default MainLayout
