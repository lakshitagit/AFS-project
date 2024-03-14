import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Registration from './Registration'
// import Registration from './Registration'
import './Main.css'
export default function Main() {
  const navigate=useNavigate();
  return (
    <div className='xyz'>
      <div className='containerMain'>
      <h1>Blog app</h1>
      <p>Welcome to the blog application. Here you can create, read and update posts.</p>
      <p>To create a post you need to login first </p>
      <hr />
      </div>
      <br></br>
      {/* <PostForm />
      <PostList /> */}
      {/* <Posts /> */}
      <div className='btn-register'>
      <button onClick={()=> navigate('/register')}>  Register</button>
      </div>
      {/* <br></br> */}

      <div className='btn-login'>
      <button onClick={()=> navigate('/login')}>Login  </button>
      </div>
      
    </div>
  )
}
