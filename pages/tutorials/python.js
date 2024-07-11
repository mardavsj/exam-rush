import React from "react";
import Head from "next/head";
import Link from "next/link";
const python = () => {
  return (
    <div>
      <Head>
        <title>Python Tutorial - Learn Python | Exam Rush</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-row overflow-y-hidden mt-16">
          <main className="max-h-screen flex-1 bg-white overflow-y-auto border">
            content
          </main>

          <nav className="max-h-screen order-first w-[20%] bg-white border overflow-y-auto px-3 py-1 ">
            <aside class="">
              <nav class="space-y-8 text-sm">
                <div class="space-y-2">
                  <h2 class="text-sm font-semibold tracking-widest text-purple-900">
                    Python Tutorial
                  </h2>
                  <div class="flex flex-col space-y-1">
                    <Link href="#">Function</Link>
                    <Link href="#">Function</Link>
                    <Link href="#">Function</Link>
                    
                  </div>
                </div>
              </nav>
            </aside>
          </nav>

          <aside className="w-[20%] bg-white border overflow-y-auto">
            Right Sidebar
          </aside>
        </div>
      </div>
    </div>
  );
};

export default python;
