import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// import Image from 'next/image'
import MobileNavbar from '../components/MobileNavbar'
import Calendly from '../components/Calendly'
import Skills from '../components/Skills'
import Video from '../components/Video'
import ImagesPortfolio from '../components/ImagesPortfolio'
import Typewriter from 'typewriter-effect';
import { FaBehanceSquare, FaLinkedin } from 'react-icons/fa'
import { GrDocumentPdf } from 'react-icons/gr'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Home = () => {
  const [Open,setOpen] = useState(false)
  return (
    <>
  
<Navbar event={setOpen}/>
<MobileNavbar event={setOpen}/>

{/* hero  */}
<section className="">
  <div className="container px-6 md:py-10 md:mt-0 mt-10 mx-auto">
    <div className="items-center lg:flex">
      <div className="w-full lg:w-[55%]">
        <div className="" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <p className="mb-3 text-gray-800 font-bold text-2xl uppercase ">NABARUN SARKAR</p>

        {/* <h1 className="text-3xl font-semibold text-white lg:text-8xl">HELLO</h1> */}
        <div>
  <h2 className="text-5xl text-black font-extrabold text-left lg:text-5xl 2xl:text-6xl text-transparent bg-gradient-to-tl bg-clip-text to-black from-[#b0b0b0] flex md:flex-row flex-col gap-3 py-2">
   <span>
      I am a
   </span>
    <Typewriter
  options={{
    strings: ['Graphic Designer.', 'Video Editor.','Content Writer.'],
    autoStart: true,
    loop: true,
  }}
/>

  </h2>
</div>

  <p className="text-black text-md mt-4 leading-relaxed">With over five years of experience in graphic design and video editing, I specialize in delivering high-quality visual content for various platforms. As a Senior Graphic Specialist at Sportskeeda, I manage diverse graphic design projects. Proficient in Adobe Photoshop, Illustrator, and Premiere Pro, I create compelling graphics and video narratives. Passionate about gaming and esports, I continuously merge my design skills with my love for gaming to stay ahead of trends and share my insights.
</p>
          
        </div>
      </div>
      <div className="flex relative items-center justify-center w-full mt-6 lg:mt-0 lg:w-[45%] h-[400px]">
             
        
        <img data-aos="fade-left"
     data-aos-duration="1500" className="xl:w-full h-full rounded-lg lg:max-w-md shadow-[20px_20px_0px_5px_black]" src="/user.png" alt="hero.png" />
      </div>
    </div>
  </div>
</section>

<section id='about' className="bg-gray-100">
  <div className="container px-6 py-24 mx-auto text-left">
    <div className=" mx-auto">
    <p className="text-md font-semibold text-gray-800 tracking-wider leading-9">Overview</p>

      <h1 className="text-4xl font-bold text-gray-800 tracking-wider lg:text-4xl">INTRODUCTION</h1>
      <p className="mt-6 text-black text-left">With over five years of experience in graphic design and video editing, I am a seasoned creative professional dedicated to delivering high-quality visual content across various platforms and purposes. As a Senior Graphic Specialist at Sportskeeda, one of India's leading sports media platforms, I manage and execute a wide range of graphic design projects.
                    <br/>
My expertise lies in a strong foundation of design principles and techniques, coupled with proficiency in industry-standard software such as Adobe Photoshop, Illustrator, and Premiere Pro. I excel in creating visually compelling graphics for social media, websites, and print materials, as well as producing engaging video narratives that integrate video, audio, and graphics seamlessly.
<br/>
Passionate about gaming and esports, I possess a deep understanding of the latest trends and developments in this dynamic field. I continually seek innovative ways to merge my love for gaming with my design and video editing skills, striving to share my knowledge and insights with others.</p>
      <div className='flex items-center flex-wrap gap-5 mt-6 text-white'>
    <a href='https://drive.google.com/file/d/1mdPD7gean3d4TewhwYlDEgrjE-QegKsj/view?usp=sharing' target='_blank' className="inline-flex items-center text-black border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 hover:text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0 justify-center gap-1"><GrDocumentPdf /> <span>Resume</span>
    </a>
    <a href='https://www.linkedin.com/in/tenrin' target='_blank' className="inline-flex items-center border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0  justify-center gap-1"><FaLinkedin size={22} /><span> Linkedin</span>
     
     </a>
     <a href='https://www.behance.net/tenrin' target='_blank' className="inline-flex items-center border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0  justify-center gap-1"><FaBehanceSquare size={22} /><span> Behance</span>
     
     </a>
     <a href='http://x.com/itstenrin' target='_blank' className="inline-flex items-center border-2 py-2 px-6 border-gray-600 focus:outline-none hover:bg-gray-200 text-black hover:scale-110 scale-100 transition-all rounded-xl text-base mt-4 md:mt-0  justify-center gap-1"><FaSquareXTwitter size={22} /><span> Twitter</span>
     
     </a>
     
    </div>
    </div>
   

  </div>
</section>

{/* Skills */}
<Skills/>

{/* cta  */}
<section className="lg:py-12 py-8 lg:flex lg:justify-center">
  <div className="container overflow-hidden bg-[#F3F3F3] lg:mx-8 lg:flex lg:w-full lg:shadow-md lg:rounded-xl flex items-center justify-center">
   
    <div className="max-w-xl space-y-8 px-6 py-12 md:max-w-4xl text-center">
      <p className="mt-4 text-black">
      Let’s Bring Your Vision to Life
      </p>
      <h2 className="text-2xl font-semibold text-black md:text-2xl">
      Ready to collaborate on your next creative project? Get in touch to discuss how we can make your ideas a reality.
      </h2>
      <div className="inline-flex w-full mt-6 sm:w-auto">
        <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm text-white duration-300 bg-[#191A23] rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
        Schedule a Meeting
        </a>
      </div>
    </div>
  </div>
</section>


{/* Video */}
<Video/>

{/* images */}
<ImagesPortfolio/>


{/* faqs */}
<Faqs/>

{/* contact */}
{/* <Contact/> */}

{/* // footer */}
<Footer/>

{ Open && <>
<div className="relative bg-black flex justify-center">

  <div className="fixed bg-black inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-center justify-center h-auto text-center sm:block md:px-28 px-2 pt-2">
      <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform sm:my-8 sm:align-middle items-center sm:w-full">
        <div>
        <span className="relative text-right w-full sm:inline-block sm:align-middle text-white font-extrabold text-3xl cursor-pointer" aria-hidden="true" onClick={()=>setOpen(false)}>x​</span>

          {/* <video  src={video} >
</video> */}
        <Calendly/>

        </div>
       
        
      </div>
    </div>
  </div>
</div>
</>}

    </>
  )
}

export default Home
