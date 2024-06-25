import React from 'react'
import Work from '../public/bg.png'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="flex w-full h-screen mb-[800px]">
      <div className="w-1/2">
      </div>
      <div className="w-1/2">
        <Image src={Work} alt="animated studying man" width="500" height="500" />
      </div>
    </div>
  )
}

export default HomePage