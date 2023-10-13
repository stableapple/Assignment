import { useState } from "react";
import axios from "axios";
import ShowComment from "./ShowComment";
const Comment =({id,name,user})=>{
    const [comment,setComment]=useState("");
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(id)
        axios.post(`http://localhost:3001/posts/${id}/comments`,{
            comment:comment,
            name:user
        })
    }
    return (
        <div>
           <form onSubmit={(e)=>onSubmit(e)}>
                <input className="input" onChange={(e)=>setComment(e.target.value)}/> 
                
                <ShowComment id={id}/>
           </form> 
           
        </div>
    )
}
export default Comment;