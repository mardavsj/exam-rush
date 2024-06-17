import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="fixed z-50 bg-gradient-to-r from-black via-gray-700 to-black mx-auto md:w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Company Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CompanyName</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="bg-black focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center bg-gradient-to-tr from-[#2b369a] via-[#007ecd] to-[#00b8e1] dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white hover:scale-105 ease-in-out duration-100">Get started</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className=" items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100" aria-controls="navbar-cta" aria-expanded="false">
                        </button>
                    </div>
                    <div className="items-center justify-between flex w-auto md:order-1" id="navbar-cta">
                        <ul className="flex font-medium rounded-lg flex-row space-x-8">
                            <li>
                                <a href="/" className="block rounded bg-transparent hover:scale-105 text-white duration-200 ease-in-out" aria-current="page">HOME</a>
                            </li>
                            <li>
                                <a href="/About" className="block rounded hover:scale-105 text-white duration-200 ease-in-out">ABOUT</a>
                            </li>
                            <li>
                                <a href="/BlogsPage" className="block rounded hover:scale-105 text-white duration-200 ease-in-out">BLOGS</a>
                            </li>
                            <li>
                                <a href="/Contact" className="block rounded hover:scale-105 text-white duration-200 ease-in-out">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar