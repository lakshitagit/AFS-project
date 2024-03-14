import axios from "axios";
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './registeration.css'
export default function Registration(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    // const[LoginError,setLoginError]=useState('');
    const [usernameValid, setUsernameValid] = useState(false);
    const navigate=useNavigate()
    const handleUsername=(event)=>{
        setUsername(event.target.value);
        
        setUsernameValid(event.target.value !== '');

      }
      // const handleUsername = (event) => {
      //   setUsername(event.target.value);
      //   setUsernameValid(event.target.value !== '');
      // }
      const handlePassword=(event)=>{
        setPassword(event.target.value); 
      }
      const handleFormData= async(event)=>{
        event.preventDefault();
        try{
           const result = await axios.post('http://localhost:3000/register',{
            username:username,
            password:password
           })
           
           if(result.status===201){
            alert("registered successfully")
            navigate('/login')
           }
          
          }
        
        catch (error){
          console.log("something went wrong");
        }
      }
    return (
      <div className="container1">
        <div className="register">
            <h1>Registration</h1>
            <form onSubmit={handleFormData}>
              <div className="register-fields">
      <label>
        Username
      </label>
      <input type='text' value={username} onChange={handleUsername}></input>
      <br></br>
      <label>Password</label>
      <input type='password' value={password} onChange={handlePassword}></input>
      <br></br>
      </div>
      <button disabled={!usernameValid}>Submit</button>
      <p>Already have an account? <Link to='/login'>login</Link></p>
    </form>
    {/* <h4>{LoginError}</h4> */}
      {/* <button onClick={()=>navigate("/posts/:postId")}>Login</button> */}
    </div>
    </div>
    )
}