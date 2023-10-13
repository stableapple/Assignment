import React from "react";
import { useState } from "react";
import Posts from "./Posts"
import PostCreate from './PostCreate'
import { BrowserRouter, Routes, Route, Router,Link } from "react-router-dom";
const App =()=>{
    const [name,setName]=useState("");
    const [submit,setSubmit]=useState(false);

    const onSubmit=(e)=>{
        e.preventDefault() 
        setSubmit(true);
    }
    return (
        <BrowserRouter>
            <div>
                {submit ? (
                    <Routes>
                        <Route exact path="/" element={<Posts name={name} />} />
                        <Route exact path="/create" element={<PostCreate />} />
                    </Routes>
                ) : (
                    <form onSubmit={onSubmit}>
                        <label>Name</label>
                        <input onChange={(e) => setName(e.target.value)} />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </BrowserRouter>
    );
}
export default App;