import React from 'react'
import Work from '../public/bg.png'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="w-full bg-white h-screen py-16">
      <div className="bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex space-x-5 text-white mx-auto font-light">
            <div className="uppercase tracking-wide text-white">
              <span className="block font-extrabold text-1xl bg-clip-text text-transparent bg-[url(https://i.ibb.co/RDTnNrT/animated-text-fill.png)] animate-aitf ">
                Most Viewed
              </span>
            </div>
            <Link href="/python/python" className="hover:scale-105">Python</Link>
            <Link href="/cn/cn" className="hover:scale-105">Computer Network</Link>
            <Link href="/oops/oops" className="hover:scale-105">Oops in C++</Link>
            <Link href="/physics/physics" className="hover:scale-105">Semiconductor Physics</Link>
            <Link href="/mpi/mpi" className="hover:scale-105">Microprocessor</Link>
            <Link href="/java/java" className="hover:scale-105">Java</Link>
            <Link href="/dbms/dbms" className="hover:scale-105">DBMS</Link>
            <Link href="/os/os" className="hover:scale-105">Operating System</Link>
            <Link href="/htmlCss/htmlCss" className="hover:scale-105">HTML/CSS</Link>
            <Link href="/js/js" className="hover:scale-105">JavaScript</Link>
          </div>
        </div>
      </div>
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <div className="w-1/2 p-36">
        nwjbhfjdwih efo grhbdnkmnv bhfkl jcnkmdsf bvhjw odefrhbfn kmsnd csmncv nswbfhvjnkmsx cnmxnbhvfj[wnd cx,sbhfvjnwmqls dcnnkjnjbhdfndm snvnswm cs,nfbvjndkms ,mcvkmdnjbfh nmcd,s cvnn]
        <div className="flex gap-4 mt-4">
          <button type="button" className="w-1/2 bg-gradient-to-tr from-purple-950 via-purple-700 to-purple-500 text-white font-medium rounded text-sm px-4 py-3 text-center hover:bg-gradient-to-tl ease-in-out duration-100">Get started</button>
          <button type="button" className="w-1/2 border text-gray-500 font-medium rounded text-sm px-4 py-3 text-center ease-in-out duration-100">LogIn</button>
        </div>
      </div>
      <div className="w-1/2 right-0">
        <Image src={Work} alt="animated studying man" width="500" height="500" />
      </div>
    </div>
    </div>
  )
}

export default HomePage