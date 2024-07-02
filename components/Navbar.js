import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import logo from '../public/logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="fixed mx-auto bg-white w-full border">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
                    <div className="flex items-center order-1">
                        <Image src={logo} width="35" height="35" alt="logo" />
                        <span className="self-center text-2xl font-bold px-2">ExamRush</span>
                    </div>
                    <form class="order-2">
                        <div class="flex relative gap-1">
                            <div class="absolute inset-y-0 flex items-center ps-3">
                                <svg class="w-4 h-4 text-purple-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
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
                            <Link href="/contact" className="hover:bg-gray-100 rounded py-2 px-5">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar