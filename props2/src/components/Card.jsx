import React from "react"


function Card({channel,btntext}) {
  console.log(channel);
  return (
    <>
    <h1>taiwind</h1>
    <div className="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.unsplash.com/photo-1766999345012-b08ede100287?w=600&auto
    =format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=
    M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" />
  </div>
  <div className="flex">
    <div className="text-2xl font-medium" >{channel}</div>
    <span className="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
      <button className="mt-6 inline-flex p-10 items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
       {btntext}
      </button>
    </span>
  </div>
</div>
</>
  )
}

export default Card