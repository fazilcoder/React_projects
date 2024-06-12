import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]=useState(0);
  function Clicking(){
    
    if(count<20){
      setCount(count+1);
    }
    
    
  } 
  function Declicking(){
    if(count<=0){
      alert("no negative value")
    }
    else{
      setCount(count-1);
    }
    
    
  }
  return (
    <>
    <h1>States in React</h1>
    <button onClick={Clicking}> click me count={count}</button>
    <button onClick={Declicking}>Decrease the value {count}</button>
    </>
  )
}

export default App
