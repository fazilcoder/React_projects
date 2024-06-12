import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  
  
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}} >
      <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded">
            <button onClick={()=>setColor('red')} className="outline px-4 py-1 rounded" style={{backgroundColor:"red"} } >Red</button>
            <button onClick={()=>setColor("green")}className="outline px-4 py-1 rounded" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")}className="outline px-4 py-1 rounded" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("lavender")}className="outline px-4 py-1 rounded" style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={()=>setColor("chocolate")}className="outline px-4 py-1 rounded" style={{backgroundColor:"chocolate"}}>chocolate</button>
            <button onClick={()=>setColor("fuchsia")}className="outline px-4 py-1 rounded" style={{backgroundColor:"fuchsia"}}>fuschia</button>
        </div>
      </div>
    </div>
  )
}

export default App
