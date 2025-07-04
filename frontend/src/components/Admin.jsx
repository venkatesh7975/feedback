import axios from "axios";
import {useState,useEffect} from "react";
export default function Admin() {
    const [feedbacks,setFeedback]=useState([]);

    async function getFeedback(){
        const response =await  axios("http://localhost:3000/feedbacks");
        setFeedback(response.data)
        console.log(response.data)
    }

    useEffect(()=>{
   getFeedback()
    },[])
 
  return (
    <div>

<ul>
    {feedbacks.map((feedback,index)=>(
        <li key={index}>{feedback.name}<br/>
        {feedback.message}</li>
    ))}
</ul>
        </div>
  )
}
