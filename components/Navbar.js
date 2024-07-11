import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '../public/logo.png'
import { MdArrowDropDown } from "react-icons/md"

const Navbar = () => {
    return (
        <>
            <nav className="fixed mx-auto bg-white w-full border">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
                    <div className="flex items-center order-1">
                        <Image src={logo} width="35" height="35" alt="logo" />
                        <span className="self-center text-2xl font-bold px-2">ExamRush</span>
                    </div>
                    <form className="order-2">
                        <div className="flex relative gap-1">
                            <div className="absolute inset-y-0 flex items-center ps-3">
                                <svg className="w-4 h-4 text-purple-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block p-2 ps-8 text-sm border border-gray-300 rounded" placeholder="Explore every topic" required />
                            <button type="submit" class="text-white bg-purple-700 rounded hover:bg-[#963be5] text-sm px-4 hover:bg-gradient-to-tl">Search</button>
                        </div>
                    </form>
                    <div className="order-1">
                        <div className="flex font-medium uppercase">
                                <Link href="/" className="hover:bg-gray-100 rounded py-2 px-5" aria-current="page">Home</Link>
                            <Link href="/about" className="hover:bg-gray-100 rounded py-2 px-5">About</Link>
                            <Link href="/games" className="hover:bg-gray-100 rounded py-2 px-5">Games</Link>
                            <nav className="primary-navigation text-center">
                                <ul className="relative">
                                    <li>
                                        <a href="#" className="flex relative text-black rounded py-2 px-5 hover:bg-gray-100">Category<span className="my-auto"><MdArrowDropDown/></span></a>
                                        <ul className="dropdown absolute bg-white p-5 py-7 hidden border border-gray-300 capitalize font-light w-[200%] space-y-5">
                                            <li className="hover:scale-105 cursor-pointer">Dummy Function 1</li>
                                            <li className="hover:scale-105 cursor-pointer">Dummy Function 2</li>
                                            <li className="hover:scale-105 cursor-pointer">Dummy Function 3</li>
                                            <li className="hover:bg-gray-100 rounded">
                                                <a href="#" className="text-black flex justify-center">Category<span className="my-auto"><MdArrowDropDown/></span></a>
                                            <ul className="dropdown absolute bg-purple-700 hidden text-white w-[100%] space-y-5 p-5 py-7">
                                                <li className="hover:scale-105 cursor-pointer">Dummy Function 1</li>
                                                <li className="hover:scale-105 cursor-pointer">Dummy Function 2</li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar