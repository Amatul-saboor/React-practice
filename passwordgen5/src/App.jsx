import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [num, setnum]= useState(false);
  const [chars, setchars]=useState(false);
  const [passw, setpass]=useState("");

  //ref hook
const passref=useRef(null);
  const passgen=useCallback(() => {
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+="0123456789";
    if(chars) str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setpass(pass)
  }, [length, num, chars, setpass]);
const copytoclipboard=useCallback(()=>{
  passref.current?.select();
  window.navigator.clipboard.writeText(passw)
},[passw])  

  useEffect(() => {
    passgen();
  }, [length,num,chars, passgen]);

  return (
    <>
<div className='w-full max-w-md mx-auto text-purple-500 rounded-lg shadow-md px-4 py-3 my-8 bg-gray-700'><h1 className='text-white text-center'>Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'></div>
  <input type="text"
  className='outline-none w-full py-1 px-3 rounded-full'
  placeholder='password'
  value={passw}
  readOnly
  ref={passref}
  />
  <button onClick={copytoclipboard}
   className='flex px-2 py-1 bg-blue-500 shrink-0 text-white rounded-2xl'>copy</button>
  <div className='flex text-sm gap-x-2'></div>
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={6}
    max={20}
    value={length}
    className='cursor-pointer'
    onChange={(e) =>{ setLength(e.target.value)}}

     /> <label>Length: {length}</label>
  </div>
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" id="numberinp"
    defaultChecked={num}
    onChange={()=>{setnum((prev)=> !prev)}} />
    <label htmlFor="numberinp">Numbers</label></div>

    <div className='flex items-center gap-x-1'>
    <input type="checkbox" id="charinp"
    defaultChecked={chars}
    onChange={()=>{setchars((prev)=> !prev)}} />
    <label htmlFor="charinp">Characters</label></div>
  </div>    </>
  )
}

export default App
