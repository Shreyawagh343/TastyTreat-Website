import React, { useState } from 'react'
import { motion } from "framer-motion"

const DeliveryCard = () => {

    const [sort, setsort] = useState(false)
    const [rating, setrating] = useState(false)
    const [del, setdel] = useState(false)
    const [veg, setveg] = useState(false)

    const sorthandle = () => {
        const sortComponent = document.querySelector(".sort");
        sortComponent.addEventListener("click", () => {
            setsort(true)
            setrating(false)
            setdel(false)
            setveg(false)
        })
    }

    const rathandle = () => {
        const rating = document.querySelector(".rating")
        rating.addEventListener("click", () => {
            setrating(true)
            setsort(false)
            setdel(false)
            setveg(false)

        })
    }

    const delhandle = () => {
        const delComponent = document.querySelector(".del");
        delComponent.addEventListener("click", () => {
            setdel(true)
            setsort(false)
            setrating(false)
            setveg(false)
        })
    }
    const veghandle = () => {
        const vegComponent = document.querySelector(".veg");
        vegComponent.addEventListener("click", () => {
            setveg(true)
            setsort(false)
            setrating(false)
            setdel(false)
        })
    }


    return (
        <>
            <div className="">
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

                    className='text-[1.7rem] md:ml-[10rem] font-bold mt-10'>Restaurants with online food delivery</motion.h1>

                <div className="mt-5 flex">
                    <div className="md:ml-[10rem] ">
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 
                                className="font-bold text-2xl">Filter</h3>
                                <br />
                                <div

                                    className="flex">
                                    <div className="cursor-pointer">
                                        <li className='list-none text-xl font-semibold'><p className='sort' 
                                        onClick={(e)=>{
                                            e.persist();
                                            sorthandle();
                                        }}
                                        
                                        >Relevance (Sort)</p></li>
                                        <li className='list-none text-xl mt-2 font-semibold'><p className='rating'    
                                        onClick={(e)=>{
                                            e.persist();
                                            rathandle();
                                        }}
 
                                        >Rating</p></li>
                                        <li className='del list-none text-xl mt-2 font-semibold'><p className='del' 
                                        onClick={(e)=>{
                                            e.persist();
                                            delhandle();
                                        }}
                                        
                                        >Delivery Time</p></li>
                                        <li className='veg list-none text-xl mt-2 font-semibold'  onClick={(e)=>{
                                            e.persist();
                                            veghandle();
                                        }}
                                        >Veg/Non-Veg</li>
                                    </div>
                                    <div
                                        className="ml-10 bg-slate-100 pt-5  pl-10 pr-20 pb-10 ">
                                        <div className={`${sort ? "block" : "hidden"}`}>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Relevance(Default)</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Delivery Time</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Rating</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Cost:Low to High</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Cost:High to Low</a></li>
                                        </div>
                                        <div className={`${rating ? "block" : "hidden"}`}>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>4.5+ Rating</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>4.0+ Rating</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>3.5+ Rating</a></li>

                                        </div>
                                        <div className={`${del ? "block" : "hidden"}`}>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Fast Delivery</a></li>
                                        </div>
                                        <div className={`${veg ? "block" : "hidden"}`}>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Veg</a></li>
                                            <li className='list-none'><a className='text-[1.2rem] flex'><span><input type="radio" name="default" id="default" className='mr-6' /></span>Non-Veg</a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </dialog>
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Filter</button>
                    </div>
                    <div className="dropdown dropdown-bottom ml-4">
                        <div 
                    
                        tabIndex={0} role="button" className="btn">Sort By</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow">
                            <li><a className='text-[1rem]'>Relevance(Default) <span><input type="radio" name="default" id="default" className='ml-3' /></span> </a></li>
                            <li><a className='text-[1rem]'>Delivery Time  <span><input type="radio" name="default" id="default" className='ml-[2.7rem]' /></span> </a></li>
                            <li><a className='text-[1rem]'>Rating  <span><input type="radio" name="default" id="default" className='ml-[5.7rem]' /></span> </a></li>
                            <li><a className='text-[1rem]'>Cost:Low to High <span><input type="radio" name="default" id="default" className='ml-5' /></span> </a></li>
                            <li><a className='text-[1rem]'>Cost:High to low <span><input type="radio" name="default" id="default" className='ml-6' /></span> </a></li>

                        </ul>
                    </div>
                    <motion.div 
                    
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
                    
                    
                    className="">
                    <div role="button" className="btn ml-4 ">Fast Delivery</div>
                    <div role="button" className="btn ml-4 ">Rating </div>
                    <div role="button" className="btn ml-4 ">Veg</div>
                    <div role="button" className="btn ml-4 ">Non-veg</div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default DeliveryCard