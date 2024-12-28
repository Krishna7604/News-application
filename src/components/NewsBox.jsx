
import "../styles/Newsbox.css"
import { formatDistanceToNow } from "date-fns/formatDistanceToNow"
const NewsBox = ({payload})=> {
  return (
    <div className="newsbox">
        
        <div className="imgbox">
            <img src={payload["urlToImage"]} alt="news" height={300} width={300}/>
        </div>
        <div className="content">
        <a href={payload["url"]} target="_blank" ><h1>{payload["title"]}</h1></a>
            <p>{payload["description"]}</p>
            <p className="description"><a href={payload["url"]} target="_blank" >{payload["content"]}</a></p>
            {payload["source"]["name"]!=="[Removed]" && <p>source:{payload["source"]["name"]}</p>}
            <p className="data">Published At:{formatDistanceToNow(new Date(payload["publishedAt"]),{addSuffix:true})}</p>
        </div>
        

    </div>
  )
}

export default NewsBox