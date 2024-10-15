import React from 'react'
import "./Hero.css"
import { motion } from "framer-motion"

const Hero = () => {
  return (
  <>
  <div className="">
    <div className="logo">
        <motion.h1 
        initial={{x:200,opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{ once: false }}
        transition={{
            delay:0.6,
            x:{type:'spring',stiffness:60},
            opacity:{duration:0.2},
            ease:"ease-in",
            duration:1
        }}
        className='md:text-[3.4rem] text-[2.5rem] font-bold text-white md:w-[35rem] w-[20rem] md:ml-[48rem] ml-[4rem] md:pt-[8rem] pt-[7rem]'>Savor the Flavors: Fresh Meals
        <span        
        className='md:text-red-500 text-white '> Delivered Fresh</span> </motion.h1>
        <motion.h1 
        
        initial={{x:200,opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{ once: false }}
        transition={{
            delay:0.6,
            x:{type:'spring',stiffness:60},
            opacity:{duration:0.2},
            ease:"ease-in",
            duration:1
        }}
        
        
        className='md:text-[3.4rem] text-[2.5rem]     font-bold text-white md:w-[35rem] w-[20rem] md:ml-[48rem] ml-[4rem] ' >to Your Door</motion.h1>
        <motion.p
        
        initial={{y:40,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{ once: false }}
        transition={{
            delay:0.6,
            y:{type:'spring',stiffness:60},
            opacity:{duration:0.2},
            ease:"ease-in",
            duration:1
        }}
        
        
        className='md:text-2xl text-[1.2rem] text-white md:w-[40rem] w-[20rem] md:ml-[48rem] ml-[4rem]'>Craving something delicious? We've got you covered! Explore a world of fresh, flavorful dishes crafted with love and delivered straight to your doorstep.  
            <span className='text-red-500 text-2xl'>Eat fresh, eat happy!</span></motion.p>
    </div>
  </div>
  </>
  )
}

export default Hero