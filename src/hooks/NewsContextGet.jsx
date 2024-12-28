import { useContext } from "react"
import { Newscontext } from "../context/context"

export const GetNewsContext=()=>{
    const context =useContext(Newscontext)
    if(!context){
        throw Error("Not Found")
    }
    return context
}