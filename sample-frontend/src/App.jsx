import React, { useState } from 'react'

const App = () => {
  const [count, setCount]=useState(0);
  const handleIncrement =
  return (
    <div className="" className="bg-[url(https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/original_images/20180730-gsta_reiland-sunrays_in_a_pine_forest-6901-2_CMSTemplate.jpg)] bg-no-repeat w-100% bg-cover h-200 p-5 flex flex-col justify-center item-center">
      <h1 className="text-center 
      font-bold 
      bg-blue-400 
      m-3 p-5 italic text-2xl 
      rounded-4xl 
      shadow-2xl
      shadow-pink-300 
      ">Sample Project</h1>

      <h2 className="backdrop-blur-2xl w-50 text-center text-2xl font-bold shadow-2xl shadow-amber-200 rounded-3xl text-white " > Welcome to Tailwind</h2>
      
      <button className="">Increment++</button>
      <button>{count}</button>
      
      <div className="bg-mauve-400 p-10 grid grid-cols-4 gap-x-2 gap-y-2 rounded-2xl">
      
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
        <div className=" bg-red-400 h-10 w-30 rounded-2xl shadow-2xl shadow-black"></div>
      </div>
    </div>
  )
}

export default App