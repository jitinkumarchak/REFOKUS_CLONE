import React from 'react'
import Button from "./Button.jsx"

export const Navbar = () => {
  return (
    <div className='max-w-screen-xl p-3 mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
       <div className="n-left flex items-center"> <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-10 ml-20">
            {["Home " , "Work" , " Culture" , "" , "News"].map((elem, index) =>(elem.length === 0 ?<span key={index} className='w-[2px] h7 bg-zinc-700 '></span> :  (<a  key={index}   href='#' className='text-sm flex font-regular items-center gap-1'>
                {index === 1  && (<span style={{boxShadow : "0 0 0.75em #00FF19"}} className=' inline-block w-1 h-1 rounded  bg-green-500'></span>)}
                {elem}</a>)))}
        </div> 
        </div>

        <Button/>
       
    </div>
    
  )
}
