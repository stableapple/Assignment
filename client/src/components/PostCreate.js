import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const PostCreate=()=>{
    const history = useNavigate();
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [name,setName]=useState("")
    const onSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/posts',{
            name:name,
            title: title,
            description:description
        }).then((response)=>{
            history("/")
        })
    }
    return(
        <div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Title</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default PostCreate;