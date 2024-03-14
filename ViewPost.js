import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'
import './ViewPost.css'
export default function ViewPost(){
    const [ApiError,setApiError]=useState(false)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("jwttoken")){
            (async ()=>{
                try{
               const response= await axios.get('http://localhost:3000/posts',{
                headers:{
                    authorization: "Bearer "+localStorage.getItem('jwttoken')
                }
               })
               setData(response.data);
               setLoading(false)
                }catch(error){
                    setApiError(true);
                }
            })()
        }
        else{
            navigate('/login');
        }
    },[])
    //     ;(async ()=>{
    //         try{
    //        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
    //        setData(response.data);
    //        setLoading(false)
    //         }catch(error){
    //             setApiError(true);
    //         }
    //     })()
    // },[])
    if(loading){
        return <h1>Loading.....</h1>
    }
    if(ApiError){
        return <h1>Something went wrong</h1>
    }
    const result=data.map((post)=>
    <div className='container11' key={post.id}>
        <h4 className='titlecss'> Title <br></br> {post.title}</h4>
        <h4 className='contentcss'> Content <br></br>  {post.content}</h4>
        <div className='btnpost'>
        <button onClick={()=> navigate('/editpost')}>Edit</button>
        
        </div>
        </div>
    )
    return(
        <div  className="containersview">
            <h1>Posts: </h1>
            <div className='abcd'>
            <Link to="/createpost">Create post</Link>
            </div>
            {result}
        </div>
    )
    }