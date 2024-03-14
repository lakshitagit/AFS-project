import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Createpost.css'
export default function CreatePost() {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("jwttoken")){
            navigate("/login")
        }
    },[])
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const handleTitle=(event)=>{
        setTitle(event.target.value)
    }
    const handleContent=(event)=>{
        setContent(event.target.value)
    }
    const handleForm= async(event)=>{
        try{
        event.preventDefault()
        const response= await axios.post("http://localhost:3000/posts",{
            title:title,
            content:content
        },{
            headers:{
                authorization: "Bearer "+localStorage.getItem("jwttoken")
            }
        })
        navigate('/posts')
        }catch{

        }
    }
  return (
    <div className='createc1'>
        <div className='createc2'>
      <h1>Create post: </h1>
      <form onSubmit={handleForm}>
        <div className='createc3'>
        <label>Title: </label>
        <input type="text" value={title}  onChange={handleTitle}></input><br></br>
        <label>Content: </label>
        <input type='text' value={content} onChange={handleContent}></input><br></br>
        </div>
        <button>submit</button>
      </form>
      </div>
    </div>

  )
}
