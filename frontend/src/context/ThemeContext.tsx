import {createContext,ReactNode, useEffect, useState} from "react"
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light"
import dark from "../styles/themes/dark";


type ThemeContextProps={
    children:ReactNode
}
type themeType = "light"|"dark"|null;

type ThemeContextType={
    theme:themeType,
    changeTheme:()=>void
}


export const ThemeContext = createContext({} as ThemeContextType)

const localStorageTheme = localStorage.getItem("theme") as themeType

export const ThemeContextProvider = ({children}:ThemeContextProps)=>{
    
    const [theme,setTheme] = useState<themeType>(localStorageTheme)

    function changeTheme(){
        const newThemeValue = theme==="light"?"dark":"light";
        setTheme(newThemeValue);

        localStorage.setItem("theme",newThemeValue)
    }
    useEffect(()=>{
        if(!localStorageTheme){
            changeTheme();
            localStorage.setItem("theme","light")
        }
    },[])

    return(
        <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme === "light"? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
    )
}
