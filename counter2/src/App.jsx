import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setcount]=useState(15)
// let num=5;
const add=() => {
// console.log("num is", count);
if(count<20){
count+=1;
setcount(count);}
}
const remove=()=>{
  if(count>0){
  setcount(count-1)}
}
  return (
    <>
      <h1>React project</h1>
      <h2>count value:{count}</h2>
      <button onClick={add}
      >Add value</button>
      <br />
      <button onClick={remove}
      >Remove value</button>
<p>footer{count}</p>
    </>
  )
}

export default App
