// import Link from 'next/link'
import React from 'react'
import { FaBehanceSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
   <>
    <footer className="bg-white">
  <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row bg-black rounded-t-3xl">
    <a href="#">
    <img src='/logo-dark.png' alt='footer_logo' className='w-16' />


    </a>
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
  <a href="/#about" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-400">
  About Me
  </a>
  <a href="/#skills" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-400">
    Skills
  </a>
  <a href="/#video" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-400">
    Videos Portfolio
  </a>
  <a href="/#graphic" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-400">
    Graphics Portfolio
  </a>

</div>

    <div className="flex -mx-2">
      <a href="http://x.com/itstenrin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-400" aria-label="Reddit">
      <FaSquareXTwitter size={22} />
      </a>
      <a href="https://www.linkedin.com/in/tenrin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-400" aria-label="Facebook">
      <FaLinkedin size={22} />
      </a>
      <a href="https://www.behance.net/tenrin" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-400" aria-label="Github">
      <FaBehanceSquare size={22} />
      </a>
      <a href="http://youtube.com/@tenrintv" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-400" aria-label="Github">
      <FaYoutube size={22} />
      </a>
    </div>
  </div>
  <div className="container px-6 py-12 mx-auto bg-black ">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
    
    <div className='md:text-left text-center'>
      <p className="font-semibold text-gray-800 bg-white inline-block p-1 rounded">Contact:</p>
      <div className="flex flex-col md:items-start mt-5 space-y-2">
        <a href="mailto:contact@tenrin.dev" className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline text-sm flex justify-center items-center gap-2"><span><MdEmail size={26} /></span>contact@tenrin.dev</a>
        {/* <a href="#" className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline text-sm">Téléphone: +32 (0) 468 08 16 20</a>
        <a href="#" className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline text-sm">Address: 75, Rue du Spignat
B-6030 Charleroi, Belgium</a> */}
      </div>
    </div>
    
    <div className="sm:col-span-3 ">
      <div className="flex flex-col justify-around items-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row bg-[#292A32] rounded-md py-8 md:px-0 px-4">
        <input id="email" type="text" className="px-4 py-2 border rounded-md bg-transparent text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 md:w-1/2 w-full" placeholder="Email" />
        <button className="w-full md:px-20 px-10 py-2.5 text-sm font-medium tracking-wider text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-white rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
        Leave your email for contact
        </button>
      </div>
    </div>
  </div>
  <div>
  <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
  <div>
  <div className="flex flex-col-reverse md:flex-row flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
  <a href="/" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-400 underline">
  © 2024 Tenrin. All Rights Reserved.
  </a>
  
  
</div>
  </div>
</div>

</div>

</footer>


   </>
  )
}

export default Footer