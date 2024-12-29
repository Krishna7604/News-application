import {  useEffect, useState } from "react";
import NewsBox from "../components/NewsBox";

import { GetNewsContext } from "../hooks/NewsContextGet";


const Home =()=>{
    const{News,setNews} =GetNewsContext()
    useEffect(()=>{
        const getnews=async ()=>{
            try{
                const response=await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY
                                           ")
                const json=await response.json()
                if(json["status"]=="ok")
                setNews(json["articles"]);
            
            }catch(err){
                setNews([{"error":err.message}]);
            }
        }
        getnews();
    },[])
    return (
        <div className="container">
            
            {News && News.map((news)=>{
                if (news["title"]!=="[Removed]")
                return <NewsBox key={Math.random().toString()} payload={news}></NewsBox>
            })}
        </div>
    )
}
export default Home;
