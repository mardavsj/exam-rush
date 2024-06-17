import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="fixed z-50 mx-auto bg-white md:w-full border">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="ExamRush Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">ExamRush</span>
                    </a>
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

        </>
    )
}

export default Navbar