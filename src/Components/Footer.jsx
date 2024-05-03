import React from 'react'

function Footer() {
  return (
    <div className="w-full">
        <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
            <div className="basis-1/2">
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className="basis-1/2 flex gap-24">
                 <div className="basis-1/3">
                <h4 className='mb-10 text-zinc-600 capitalize'>Socials</h4>
           {["instagram", "twitter (x?)" , "LinkedIn"].map((item , index)=><a key={index}  className='block mt-2 text-zinc-600 capitalize' href="#">{item}</a>)}
           </div>
           <div className="basis-1/3">
                <h4 className='mb-10 text-zinc-600 capitalize'>Socials</h4>
           {["instagram", "twitter (x?)" , "LinkedIn"].map((item , index)=><a key={index} className='block mt-2 text-zinc-600 capitalize' href="#">{item}</a>)}
           </div>
           </div>
           <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right
            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. cupi  </p>
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" className='w-32 mt-10' />
           </div>
           
        </div>
    </div>
  )
}

export default Footer