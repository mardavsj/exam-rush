import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/bg.png'

const HomePage = () => {
  return (
    <div className="w-full bg-white h-screen py-16">
      <div className="bg-purple-700 py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex space-x-5 text-white mx-auto font-light">
            <div className="uppercase tracking-wide text-white">
              <span className="block font-extrabold text-1xl bg-clip-text text-transparent bg-[url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)] animate-aitf ">
                Most Viewed
              </span>
            </div>
            <Link href="/tutorials/python" className="hover:scale-105">Python</Link>
            <Link href="/tutorials/cn" className="hover:scale-105">Computer Network</Link>
            <Link href="/tutorials/oops" className="hover:scale-105">Oops in C++</Link>
            <Link href="/tutorials/physics" className="hover:scale-105">Semiconductor Physics</Link>
            <Link href="/tutorials/mpi" className="hover:scale-105">Microprocessor</Link>
            <Link href="/tutorials/java" className="hover:scale-105">Java</Link>
            <Link href="/tutorials/dbms" className="hover:scale-105">DBMS</Link>
            <Link href="/tutorials/os" className="hover:scale-105">Operating System</Link>
            <Link href="/tutorials/htmlCss" className="hover:scale-105">HTML/CSS</Link>
            <Link href="/tutorials/js" className="hover:scale-105">JavaScript</Link>
          </div>
        </div>
      </div>
      <section className="pt-32">
        <div className="container mx-auto px-7 flex">
          <div className="w-[60%] m-7">
            <div className="flex flex-col w-full">
              <div className="font-bold text-[35px] w-full">
                <div className="h-[70px] overflow-hidden inline-block ml-2">
                  <div className="w-full animate-flip">
                    <div className="px-3 mb-4">Study Less, Achieve More</div>
                    <div className="px-3 mb-4">Easy to Digest, Hard to Forget</div>
                    <div className="px-3">Quick Points, Clear Understanding</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-6">
            <p className="text-[18px] text-gray-700 font-light py-2">At Exam Rush, we transform long, complicated answers into concise, easy-to-remember points. Our goal is to make your study sessions more efficient and effective. Join us to access streamlined content that helps you understand and retain information faster.</p>
            <div className="flex mt-12 gap-2 w-[85%]">
                <button type="button" className="w-1/2 bg-purple-700 text-white hover:bg-[#963be5] rounded text-sm px-4 py-3 text-center">Get started</button>
              <button type="button" className="w-1/2 border border-gray-600 text-gray-600 hover:bg-gray-50 rounded text-sm px-4 py-3 text-center ease-in-out duration-100">LogIn</button>
          </div>
          <p className="text-1xl mt-4 text-gray-700 font-light">Get Started & achieve your academic success with less stress!</p>
          </div>
          </div>
        <div className=" w-[40%] ">
            <Image src={Logo} alt="logo"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage