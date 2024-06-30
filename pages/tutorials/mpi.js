import React from 'react'
import Head from 'next/head'

const mpi = () => {
  return (
    <div>
        <Head>
            <title>Microprocessor Tutorial - Learn Microprocessor | Exam Rush</title>
        </Head>
      <div className="min-h-screen flex flex-col py-16">
          <div className="flex-1 flex flex-row overflow-y-hidden">
              <main className="flex-1 bg-purple-100 overflow-y-auto">Content here</main>

              <nav className="order-first w-[20%] bg-purple-200 overflow-y-auto">Sidebar</nav>

              <aside className="w-[20%] bg-purple-200 overflow-y-auto">Right Sidebar</aside>
          </div>
      </div>
    </div>
  )
}

export default mpi