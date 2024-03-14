import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import './login.css'
// import Registration from './Registration';
export default function Login() {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[LoginError,setLoginError]=useState('');
  const [usernameValid, setUsernameValid] = useState(false);
    const navigate=useNavigate();
    const handleUsername=(event)=>{
      setUsername(event.target.value);
      setUsernameValid(event.target.value !== '');
    }

    const handlePassword=(event)=>{
      setPassword(event.target.value); 
    }
    const handleFormData= async(event)=>{
      event.preventDefault();
      try{
        const response=await axios.post('http://localhost:3000/login',{
          username:username,
          password:password
        })
        // console.log(response);
        localStorage.setItem('jwttoken',response.data.token);
        alert("logged in")
        navigate('/posts');
      }
      catch (error){
        setLoginError("incorrect username or password");
      }
    }
      // if(username==='lakshita' && password==='sethi'){
      //   alert("Logged In Successfully");
      //   navigate('/posts');
      // }
      // else{
      //   setLoginError("incorrect username or password");
      // }
    //   try{
    //    const result=await axios.get('http://localhost:3000/register',{
    //       username:username,
    //       password:password
    //      })
        //  if(result===201){
        //   navigate('/posts');
        //  }
    //   }
    //   catch (error){

    //   }
    // }
    
    // const handleApi=()=>{
    //   // console.log({username,password});
    //   axios.post('http://localhost:3000/register',{
    //     username:username,
    //     password:password
    //   }).then(result=>{ 
    //     console.log(result);
    //     localStorage.setItem('token',result.data.token) 
    //     navigate('/posts');

    //   })
    //   .catch(error=>{
    //     alert("error");
    //   })
    // }
  return (
    <div className='containerlogin'>
      <div className='containerlogin2'>
      <h1>Login</h1>
    <form onSubmit={handleFormData}>
      <div className='login-fields'>
      <label>
        username
      </label>
      <input type='text' value={username} onChange={handleUsername}></input>
      <br></br>
      <label>Password</label>
      <input type='password' value={password} onChange={handlePassword}></input>
      <br></br>
      </div>
      <button disabled={!usernameValid}>Submit</button>
      {/* //onClick={handleApi} */}
    </form>
    <h4>{LoginError}</h4>
      {/* <button onClick={()=>navigate("/posts/:postId")}>Login</button> */}
      </div>

    </div>
  )

  }

//localstorage.setitem()
//agr m kuch bhi derhi hu input me login form me toh vo fr bhi post pr jarha hai