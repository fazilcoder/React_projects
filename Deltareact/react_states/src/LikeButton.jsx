import { useState } from "react"

export default function LikeButton(){
    let [isLiked, setIsLiked]=useState(false)
    let [count,setCount]=useState(0)
    let toggleLike=()=>{
        setIsLiked(!isLiked);
        
    };
    
    let likeStyle={color:"red"};

    let countNum=()=>{
        setCount(count+1);
    }
    return(
        <div>
            <p  onClick={toggleLike}>
                {isLiked ? <i className="fa-solid fa-heart" style={likeStyle}></i>:

                <i className="fa-regular fa-heart"></i>}
            </p>

            <button onClick={countNum}>Click me {count}</button>
           
            
        </div>
    )
}