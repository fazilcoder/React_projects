import { useState , useCallback,useEffect,useRef } from 'react'


import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [ncbox,setNcbox]=useState(false);
  const [ccbox,setCcbox]=useState(false);
  const [pwd,setPwd]=useState("");
  //useref
    const passwordref= useRef(null);
      //using call back hook
    const pwdGenerator= useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(ncbox){
        str=str+"0123456789"
      }
      if(ccbox){
        str=str+"!@#$%^&*()_-+={}[]"
      }
      for(let i=1;i<=length;i++){
        let randomNum=Math.floor(Math.random()*str.length+1);
         //pass=pass+string[randomNum];
        pass +=str.charAt(randomNum);
      }
      setPwd(pass)
    },[length,ncbox,ccbox,setPwd]);
      const copypasswordtoclipboard=useCallback(()=>{
        passwordref.current?.select();
        passwordref.current?.setSelectionRange(0,length);
        window.navigator.clipboard.writeText(pwd);
      },[pwd])

    useEffect(()=>{
      pwdGenerator();
    },[length,ncbox,ccbox,pwdGenerator]);
  return (
    <div className='w-full h-400 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 '>
      <h1 className='text-3xl text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 h-400'>
        <input type="text" value={pwd}  className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordref}/>
        <button  onClick={copypasswordtoclipboard} className='bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-gm gpa-x-2'>
        <div className='flex items-center gap-1'>
          <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value) }  />
          <label >Length:{length}</label>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={ncbox} id="numberInput" onChange={()=>{setNcbox((ncbox)=> !ncbox)}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"  id="characterInput" onChange={()=>{setCcbox((ccbox)=> !ccbox)}} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
