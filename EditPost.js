// // import React from 'react'
// // import { useParams } from 'react-router-dom'
// // function EditPost() {
// //     const params=useParams()
// //     console.log(params)
// //   return (
// //     <div>
// //       <h1>{params.postId}</h1>
// //     </div>
// //   )
// // }


// // export default EditPost
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Editpost.css'
const EditPost = () => {
  const [post,setPost]=useState({
    title: '',
    content:''
  })
    const {id}=useParams();
    const [val,setVal]=useState({
        id:id,
        title:'',
        content:''
    })
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/posts/:postId').then(
    //         res=>{
    //             setVal({...val, title:res.data.title,content:res.data.content})
    //         }
    //     ).catch(err=>console.log(err))
    // },[])
    useEffect(()=>{
      axios.get(`http://localhost:3000/posts/${id}`).then(
          res=>{
            console.log(res.data)
              // setVal({...val, title:res.data.title,content:res.data.content})
          }
          // useEffect(()=>{
          //   axios.get(`http://localhost:3000/posts`)
          //   .then(function (response) {
          //     console.warn('Successfully retrieved posts')
          //     window.localStorage.setItem("post", JSON.stringify(response.data));
          //     document.location = "/update"
          //   })
          // },[])
      ).catch(err=>console.log(err))},[])
      const handleInput=(event)=>{
        setPost({...val,[event.target.name]:event.target.value})
      }
      function handleSubmit(event){
        event.preventDefault()
        let url= `http://localhost:3000/posts/${post.id}`;
        axios.put(url, {post}).then((result)=> {
          console.log(result.data);
          // alert("Your Post has been updated!");
          // document.location='/'
        }).catch(err=>console.log(err))
      }
  return (
    <div className='editcontainer'>
      <div className='editc2'>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='editc3'>
            <label>Title</label>
            
            <input type='text' name='title' value={val.title} onChange={handleInput}></input>
            <br></br>
                <label>Content</label>
                
                <input type='text' name='content' value={val.content}  onChange={handleInput}></input>
            </div>
            <br>
            </br>
            <button>Edit</button>
      </form>
      </div>
    </div>
  )
}

export default EditPost



// import React, { useEffect } from 'react'
// import axios from 'axios'
// import './Editpost.css'
// export default function EditPost() {
  // useEffect(()=>{
  //   axios.get(`http://localhost:3000/posts`)
  //   .then(function (response) {
  //     console.warn('Successfully retrieved posts')
  //     window.localStorage.setItem("post", JSON.stringify(response.data));
  //     document.location = "/update"
  //   })
  // },[])
//   // const params = new URLSearchParams(window
//   return (
//     <div className='editcontainer'>
//     <div className='editc2'>
//     <h2>Edit Post</h2>
//     <form>
//       <div className='editc3'>
//           <label>Title</label>
          
//           <input type='text' name='name' value={val.title} onChange={e=>setVal({...val,title:e.target.val})}></input>
//           <br></br>
//               <label>Content</label>
              
//               <input type='text' name='name' value={val.content} onChange={e=>setVal({...val,content:e.target.val})}></input>
//           </div>
//           <br>
//           </br>
//           <button>Edit</button>
//     </form>
//     </div>
//   </div>
//   )
// }
// // 