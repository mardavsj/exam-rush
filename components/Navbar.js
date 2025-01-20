import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import logo from "../public/logo.png";

const Navbar = () => {
    return (
        <nav className="fixed mx-auto bg-white w-full border">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
                <div className="flex items-center order-1">
                    <Image src={logo} width="35" height="35" alt="logo" />
                    <span className="self-center text-2xl font-bold px-2">ExamRush</span>
                </div>

                <div className="order-2">
                    <SearchBar />
                </div>

                <div className="order-1">
                    <div className="flex font-medium uppercase">
                        <Link href="/" className="hover:bg-gray-100 rounded py-2 px-5" aria-current="page">
                            Home
                        </Link>
                        <Link href="/about" className="hover:bg-gray-100 rounded py-2 px-5">
                            About
                        </Link>
                        <Link href="/games" className="hover:bg-gray-100 rounded py-2 px-5">
                            Games
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;