import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp(){
//   return(
//   <h1>running app</h1>
//   )
// }
// const elem=(
//   <a href="https://google.com" target='_blank'>visit google</a>
// )
// const reactelem=React.createElement(
//   'a',
//   {href:'https://google.com' , target:'_blank'},
//   'visit google site'
// )
createRoot(document.getElementById('root')).render(
  
    <App/>
  // reactelem
)
