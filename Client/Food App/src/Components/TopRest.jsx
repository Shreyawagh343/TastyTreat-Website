import React from 'react'
import { motion } from "framer-motion"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopRest = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className="w-[85vw] ml-[3rem] ">
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

                    className='text-[1.7rem] md:ml-[8rem] font-bold mt-10'>Top restaurant</motion.h1>
                <div className="mt-10 ml-32">
                    <Carousel responsive={responsive}>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Pizza Hut</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.1 . 30-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Pizza</p>
                                <p className="text-[1.1rem] text-gray-600 ">Hinjawadi
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXmMuWa7-Pvuy2E-ftPI1nCOuAwT7mws3uA&s"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">kfc</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.3 . 29-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Fried Chicken</p>
                                <p className="text-[1.1rem] text-gray-600 "> Ground Floor, Eternity Mall </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRbRuOK43CowEoUGCd_xCV4HuJ81_yGiRnw&s"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Burger king</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">3.8 . 20-30min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Burger</p>
                                <p className="text-[1.1rem] text-gray-600 ">Food Court, VR Mall, Medical Chowk
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7agSwWOUel7Azqu-RB93XtIZtZ2EqTwunCA&s"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Dominos</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.1 . 30-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Pizza</p>
                                <p className="text-[1.1rem] text-gray-600 ">Hinjawadi
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Pizza Hut</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.1 . 30-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Pizza</p>
                                <p className="text-[1.1rem] text-gray-600 ">Hinjawadi
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Pizza Hut</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.1 . 30-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Pizza</p>
                                <p className="text-[1.1rem] text-gray-600 ">Hinjawadi
                                </p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-[17rem] shadow-xl h-[20rem]">
                            <figure>
                                <img
                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/c997ac50-07f4-4dff-b1d6-03ace6065734_14780.jpg"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-semibold">Pizza Hut</h2>
                                <p className="text-[1.2rem] text-green-800 font-semibold">4.1 . 30-35min</p>
                                <p className="text-[1.1rem] text-gray-600 ">Pizza</p>
                                <p className="text-[1.1rem] text-gray-600 ">Hinjawadi
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default TopRest