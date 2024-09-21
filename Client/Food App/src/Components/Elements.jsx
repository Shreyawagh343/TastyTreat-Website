import React from 'react'
import { motion } from "framer-motion"

const Elements = () => {
    return (
        <>
            <div className="mt-32 ml-[3rem] md:block hidden">
                <motion.h1

                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        delay: 0.6,
                        y: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "ease-out",
                        duration: 1
                    }}

                    className='text-[1.7rem] md:ml-[8rem] font-bold mt-10'>What's on your mind?</motion.h1>
                <motion.div

                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{
                        delay: 0.3,
                        y: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "ease-in",
                        duration: 1
                    }}


                    className="flex md:ml-[8rem] cursor-pointer">
                    <div className="mt-10">
                        <img src="https://img.freepik.com/free-photo/isolated-shot-pizza-with-ham-arugula_181624-45431.jpg?t=st=1726742008~exp=1726745608~hmac=bcc4da41c2dead244d2b23ded6519fd3f55918c8a8d0019f31276121baa2fd4a&w=1060" alt="" className='h-28' />
                        <h1 className='text-[1.3rem]  ml-14 mt-2'>Pizza</h1>
                    </div>

                    <div className='mt-9 ml-14'>
                        <img src="https://img.freepik.com/premium-photo/bowl-biryani-with-chicken-pieces_1342603-283.jpg?w=740" alt="" className='h-32' />
                        <h1 className='text-[1.3rem] ml-8'>Briyani</h1>
                    </div>
                    <div className='mt-9 ml-14'>
                        <img src="https://img.freepik.com/free-photo/spaghetti-with-shrimp_1339-1346.jpg?t=st=1726742177~exp=1726745777~hmac=e7d238e59b2786ba4382eb641e1dd22a20d1454071e6af1ecde63e6d0dd50404&w=996" alt="" className='h-32' />
                        <h1 className='text-[1.3rem]  ml-14 mt-1'>Chinese</h1>
                    </div>
                    <div className='mt-8 ml-12'>
                        <img src="https://img.freepik.com/premium-psd/high-quality-mouth-watering-delicious-food-isolated-transparent-background_259071-6012.jpg?w=740" alt="" className=' h-32' />
                        <h1 className='text-[1.3rem]   ml-8 mt-1'>Momos</h1>
                    </div>
                    <div className='mt-8 ml-14'>
                        <img src="https://img.freepik.com/premium-psd/3d-render-mini-tart-cake-3d-illustration_962446-370.jpg?w=740" alt="" className='h-32' />
                        <h1 className='text-[1.3rem]   ml-10 mt-2'>Cake</h1>
                    </div>
                    <div className=' ml-14'>
                        <img src="https://img.freepik.com/premium-photo/photorealistic-hyper-realistic-image-white-background-ai-generated-by-freepik_643360-532589.jpg?w=740" alt="" className=' h-40' />
                        <h1 className='text-[1.3rem]  ml-14 mt-2'>Pulao</h1>
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Elements