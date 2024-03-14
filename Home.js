import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Counter from './Counter'
import Registration from './Registration'
import  Main from './Main'
export default function Home(){
  const [enableCounter,setCounter]=useState(false)
  
  if(enableCounter){
    return<Counter></Counter>
  }
  else{
    // return <Registration></Registration>
    return <Main></Main>
  }
  // return(
  //   <div>
  //     <h1>
  //       Home
  //     </h1>
  //     <Link to="/Login">Login</Link><br></br>
  //   </div>
  // )
}
