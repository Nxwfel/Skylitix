import React from 'react'

const Header = () => {
  return (
    <div className='h-16 w-screen absolute top-0 flex justify-center items-center bg-transparent text-white'>
      <div className='ml-6 mt-3 mr-auto mb-auto '><h1 className='font-Alumi text-3xl font-light text-white'>Skylitix</h1></div>
      <div className='ml-auto mt-3 mr-3'>
        <ul className='flex space-x-6 justify-center items-center'>
            <li className='font-Alumi text-xl font-light'>
             About
            </li>
            <li className='font-Alumi text-xl font-light'>
             Services
            </li>
           <li className='font-Alumi text-xl font-light'>
           <button
                class="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
                >
                <div class="relative overflow-hidden">
                    <p
                    class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                    >
                    Visit Our Page
                    </p>
                    <p
                    class="absolute top-7 left-4 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                    >
                    See You
                    </p>
                </div>
            </button>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Header