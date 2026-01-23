import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github(){
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data) 
    //     }
    //     )
    // },[])
return(
<>
    <div className='bg-gray-700 text-white text-3xl p-4 m-4 text-center'>Github followers: {data.followers}</div>
</>
)
}

export const githubinfo=async()=>{
   const response= await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json();
}