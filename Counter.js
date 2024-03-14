import React, { useEffect, useState } from 'react'
export default function Counter(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("component mounted")
        return function(){
            console.log("component exit")
        }
    },[]) 
    useEffect(()=>{
        // if(count==0){
        //     alert( "The count is zero");
        // }
        if(count!=0){
        console.log("updated")
        // setCount(count+2) isse infinite count chl jaega
        }
    },[count]) //count ki value change ho toh ye call hoga
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            {/* <button onClick={()=> setCount(0)}>Reset</button> */}
        </div>
    )
}