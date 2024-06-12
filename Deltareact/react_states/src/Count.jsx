import { useState } from "react"

export default function Count(){
    let [count,setcount]=useState(0);
     
    let incCount=()=>{
        setcount(count+1);
    }
    return(
        <>
        <h3>This is a count variable count {count}</h3>
        <button  onClick={incCount}>Click me</button>
        </>
    )
    


}