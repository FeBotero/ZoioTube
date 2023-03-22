import { ReactNode, createContext,useState } from "react";

type UserContextProps = {
    children:ReactNode
}

type UserContextType={
    user:string;
    setUser:(newState:String)=>void,
}

const info:any = localStorage.getItem("user")
const userLogged = JSON.parse(info)



export const UserContext = createContext({})

export const UserProvider = ({children}:UserContextProps)=>{
    const [user,setUser]=useState(null)

    // const toggleUser=()=>{
    //     const newValue = ""
    //     setUser(newValue)
    //     // user ===userLogged.id?"":userLogged.id
    // }


    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>

    )
}