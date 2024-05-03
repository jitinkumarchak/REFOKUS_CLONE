import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
   var products = [
    {
        title: "arqitle",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: false,
    },
    {
        title: "TTR",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case:false,
    },
    {
        title: "YIR 2022",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: true,
    },
    {
        title: "Yahooo!!!",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: true,
    }
   ];
   

 const [pos, setpos] = useState(0);
 const mover = (val) => {
  setpos(val*23);
 }

  return (
    <div className='mt-32 relative'>
        {products.map((val ,index)=> <Product val={val} mover={mover}  count = {index}/> )}
        <div className="absolute top-0 w-full h-full pointer-events-none">
            <motion.div  initial={{ y: pos , x : "-50%" }}  
            animate={{ y: pos+ `rem` }} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
              className="window absolute w-[32rem] h-[23rem] bg-white left-[44%]   overflow-hidden">

                <motion.div
                 animate={{y: -pos+`rem`}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                  className='w-full h-full bg-sky-200'>
                    <video src=""></video>

                  </motion.div>
                <motion.div
                 animate={{y: -pos+`rem`}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                  className='w-full h-full bg-sky-300'>

                  </motion.div>
                <motion.div
                 animate={{y: -pos+`rem`}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}} 
                 className='w-full h-full bg-sky-400'>

                 </motion.div>
                <motion.div
                 animate={{y: -pos+`rem`}}
                  transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
                  className='w-full h-full bg-sky-500'>

                  </motion.div>
                
            
            </motion.div>
        </div>
    </div>
  )
}

export default Products