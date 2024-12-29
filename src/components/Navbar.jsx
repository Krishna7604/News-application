import { useState } from "react";
import "../styles/Navbar.css"
import { GetNewsContext } from "../hooks/NewsContextGet";
const Navbar=()=>{
    const [value,setValue]=useState("")
    const {News,setNews}=GetNewsContext();
    const handleSubmit=((e)=>{
        e.preventDefault();
        const getNews=async ()=>{
        try{
            const response=await fetch(`https://newsapi.org/v2/everything?q=`+value+`&apiKey=API_KEY`)
            const json=await response.json();
            if (json["articles"])
            setNews(json["articles"]);
            setValue("")
        }catch(error){
            console.log(error)
        }
    }
    getNews()

    })
    return <header>
        <div className="head">
            <h1><a href="/"> Poki News</a></h1>
            <a href="/about" className="about">About</a>
        </div>
        <div className="other">
            <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="search" onChange={e=>setValue(e.target.value)}/>
            <button type="submit">Search</button>
            </form>
        </div>
    </header>
}
export default Navbar;
