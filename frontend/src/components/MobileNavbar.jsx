// "use client"
// import Image from 'next/image'
// import Link from 'next/link'
import React,{useState} from 'react'
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const MobileNavbar = ({event}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
return (
  <header className='md:hidden block bg-gray-100 sticky top-0 z-40'>
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
        <a href="/" className="text-white font-bold text-xl w-26">
        <img
        id='image'
      src="/logo.png" 
      width="0"
      height="0"
      sizes="100vw"
      className="w-20 h-auto"
      alt='logo'
       />
        </a>
        <div className="block lg:hidden text-[black]">
          <button onClick={toggleDrawer} className="flex items-center px-3 py-2 border rounded border-black hover:text-black text-black hover:border-white">
            <svg className="fill-current h-3 w-3 text-black" fill='currentColor' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>
      
    </div>

    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='!h-full !bg-[#131212] !w-full overflow-hidden'
  >
  <div className="z-40 p-4 h-screen fixed overflow-y-auto w-full text-white">
    <button onClick={toggleDrawer} type="button" className="text-white bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white">
      <svg aria-hidden="true" className="w-15 h-5 fill-current " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
      <span className="sr-only">Close menu</span>
    </button>
    <div className="py-2 gap-10 overflow-y-auto flex-col flex justify-center items-center h-full">
    
      <ul onClick={toggleDrawer} className="space-y-6 font-bold text-center text-xl">
        <li>
        <a href='/#about' className=" hover:text-gray-300 hover:scale-110 text-center">About Me</a>
        </li>
        <li>
        <a href='/#skills' className=" hover:text-gray-300 hover:scale-110 text-center">My Skills</a>    
        </li>
        <li>
        <a href='/experience' className=" hover:text-gray-300 hover:scale-110 text-center">Education / Experience</a>    
        </li>
        <li>
        <a href='/#video' className=" hover:text-gray-300 hover:scale-110 text-center"> Video Portfolio</a>
        </li>
        <li>
        <a href='/#gallery' className=" hover:text-gray-300 hover:scale-110 text-center"> Image Portfolio</a>
        </li>
      </ul>
      <div className='flex gap-5'>
   
    <button onClick={()=>{toggleDrawer();event(true)}} className="inline-flex items-center bg-white text-black border border-black py-3 px-5 focus:outline-none hover:bg-gray-200 rounded-md text-base mt-4 md:mt-0">Schedule a Meeting
    </button>
    </div>
    </div>
      <div className='relative bottom-0'>

      <a href="/contact" className="md:inline-flex text-md font-extrabold text-black items-center hover:bg-white border-0 py-2 px-3 focus:outline-none bg-blackBtn rounded mt-4 md:mt-0 hidden">Contact Us
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
      </div>
  </div>
  </Drawer>
  </header>
  )
}

export default MobileNavbar