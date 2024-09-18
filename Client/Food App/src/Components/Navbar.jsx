import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"

const Navbar = () => {
    const[sticky,setsticky]=useState(false)
    useEffect(()=>{
        const handleNavbar =()=>{
            if(window.scrollY > 0){
                setsticky(true)
            }
            else {
                setsticky(false)
            }
            window.addEventListener("scroll",handleNavbar)
            return()=>{
                window.removeEventListenerEventListener("scroll",handleNavbar)
            }
        }
    })

    return (
        <>
            <div className={`fixed z-50 top-0 w-[100vw]${sticky ? "sticky- shadow-md bg-base-100 duration-300" : ""}`}>
                <div className="navbar bg-base-100">
                <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li><a href=''>Home</a></li>
                            <li><a href=''>About Us</a></li>
                            <li><a href=''>Menu</a></li>
                            <li><a href=''>Offers</a></li>
                            <li><a href=''>Help</a></li>
                                </ul>
                            </div>
                    <div className="flex-1">
                        <img src={logo} alt="" className='md:w-[10rem] w-[8rem] md:h-16 h-12 md:ml-8 ml-3' />
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="flex -ml-[55rem] gap-11 text-[1.1rem] cursor-pointer">
                            <li><a href=''>Home</a></li>
                            <li><a href=''>About Us</a></li>
                            <li><a href=''>Menu</a></li>
                            <li><a href=''>Offers</a></li>
                            <li><a href=''>Help</a></li>
                        </ul>
                    </div>
                    <input type="text" placeholder="Search" className="input input-bordered w-44 md:w-auto mt-1 md:block hidden " />
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://media.istockphoto.com/id/2015429231/vector/vector-flat-illustration-in-black-color-avatar-user-profile-person-icon-profile-picture.jpg?s=612x612&w=0&k=20&c=Wu70OARg2npxWy5E22_ZLneabuTafvV_6avgYPhWOoU=" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar