import { createContext, useState } from "react";

export const Newscontext=createContext()

export const ContextProvider=({children})=>{
    const [News,setNews]=useState([]);
    return <Newscontext.Provider value={{News,setNews}}>
        {children}
    </Newscontext.Provider>
}
