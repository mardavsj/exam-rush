import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="fixed z-50 mx-auto bg-white md:w-full border">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <div className="flex items-center">
                        <Image src={logo} width="40" height="40" alt="logo"/>
                        <span className="self-center text-2xl font-bold px-2">ExamRush</span>
                    </div>
                    <div className="flex md:order-2">
                        <button type="button" className="bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 text-white font-medium rounded-full text-sm px-4 py-1 text-center hover:bg-gradient-to-tl ease-in-out duration-100">Get started</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm rounded-lg" aria-controls="navbar-cta" aria-expanded="false">
                        </button>
                    </div>
                    <div className="items-center justify-between flex w-auto md:order-1" id="navbar-cta">
                        <ul className="flex font-medium rounded-lg flex-row space-x-8">
                            <li>
                                <a href="/" className="block rounded bg-transparent hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/About" className="block rounded hover:underline">About</a>
                            </li>
                            <li>
                                <a href="/BlogsPage" className="block rounded hover:underline">Hot Questions</a>
                            </li>
                            <li>
                                <a href="/Contact" className="block rounded hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex w-full">
                <ul className="flex mx-auto m-16 space-x-10 text-gray-600 border p-3 px-10">
                    <li>
                        <a href="/1stsem" className="block rounded hover:scale-105">1st Sem</a>
                    </li>
                    <li>
                        <a href="/2ndsem" className="block rounded hover:scale-105">2nd Sem</a>
                    </li>
                    <li>
                        <a href="/3rdsem" className="block rounded hover:scale-105">3rd Sem</a>
                    </li>
                    <li>
                        <a href="/4thsem" className="block rounded hover:scale-105">4th Sem</a>
                    </li>
                    <li>
                        <a href="/5thsem" className="block rounded hover:scale-105">5th Sem</a>
                    </li>
                    <li>
                        <a href="/6thsem" className="block rounded hover:scale-105">6th Sem</a>
                    </li>
                    <li>
                        <a href="/7thsem" className="block rounded hover:scale-105">7th Sem</a>
                    </li>
                    <li>
                        <a href="/8thsem" className="block rounded hover:scale-105">8th Sem</a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar