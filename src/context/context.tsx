"use client"
import React, { ReactNode, createContext, useState } from "react";

interface MyContextPropsType {
    theme: {
        bg: {
            primary: string,
            secondary: string,
            tertiary: string,
            border: string
        }
    },
    setTheme: Function,
    isFileOpen: boolean,
    setIsFileOpen: Function
}

const initialValue = {
    theme: {
        bg: {
            primary: "#50FA7B",
            secondary: "#1F2428",
            tertiary: "#24292E",
            border: "#000000"
        }
    },
    setTheme: () => { },
    isFileOpen: false,
    setIsFileOpen: () => { }
}


interface ThemeType{
    bg: {
        primary: string,
        secondary: string,
        tertiary: string,
        border: string
    }
}

export const MyContext = createContext<MyContextPropsType>(initialValue);

const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeType>({
        bg: {
            primary: "#50FA7B",
            secondary: "#1F2428",
            tertiary: "#24292E",
            border: "#000000"
        }
    });
    const [isFileOpen, setIsFileOpen] = useState(true);


    return (
        <MyContext.Provider value={{ theme, setTheme, isFileOpen, setIsFileOpen }} >
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider

