
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './context/Theme'
import Card from './components/Card'
import Themebtn from './components/Themebtn'
function App() {
const [theme,settheme]=useState("light")
const darkmode=()=>{
  settheme("dark")
}
const lightmode=()=>{
  settheme("light")
}
useEffect(()=>{
document.querySelector('html').classList.remove('light','dark')
document.querySelector('html').classList.add(theme)
},[theme])


  return (
    <Themeprovider value={{theme, darkmode, lightmode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>    
            </Themeprovider>
  )
}

export default App
