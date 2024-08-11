import React from 'react'
import './timeline.css'

const Education = () => {
  return (
    <>
{/* component */}
<section id='education' className="bg-white">

<div className="container mx-auto w-full h-full px-2">
<div className='py-10' data-aos="fade-up"
     data-aos-anchor-placement="top-center">

        <p className="mt-4 text-center uppercase text-slate-800">
        What I have Studied so far
        </p>
        <h1 className="text-4xl py-2 font-bold text-center text-black capitalize lg:text-5xl ">Education / Certification
        </h1>

</div>

  <div className="relative w-full wrap overflow-hidden p-10 h-full">
    <div className="border-2-2  absolute border-opacity-20 border-black h-full border md:left-[50%]"  />
    {/* right Education */}
      
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#dfdfdf] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-800" tabIndex={0} role="link">2015-2019</span>
        <span className="text-sm text-slate-800">BS 4 year program (completed)</span>
    </div>
      <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-5 px-5 overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <div className=" text-left">
      <h2 className='block text-2xl font-bold text-black'>
      Bachelor of Business Administration (BBA)
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-800">Sikkim Manipal University
</p>
    </div>
  {/* <img className="object-cover w-full h-62" src="/timeline/uni.jpeg" alt="avatar" /> */}
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-900">
    BBA, Busniess, Marketing and Related Support Service</li>
  </ul>
</div>

      </div>
    </div>
    <div className="mb-8 mt-1 flex md:flex-row-reverse justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#dfdfdf] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-black">2</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute left-time">
        <span className="block text-xl font-bold text-slate-800" tabIndex={0} role="link">2018-2020</span>
        <span className="text-sm text-slate-800">Graphic Design </span>
    </div>
      <div data-aos="fade-right"
     data-aos-duration="500" className="w-full py-10 px-5 overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <div className=" px-2 text-left">
      <h2 className='block md:text-3xl text-xl font-bold text-black'>
      Fundamentals Of Graphic Design
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-800">
    California institute of Arts (CatArts)
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-900">
    Good Hands on C++ Programing Language Great Communication Skil Great Communication Skill</li>
    <li className="text-md list-disc text-gray-900">
    Great Communication Skill</li>
  </ul>
  </div>
</div>

      </div>
    </div>
    {/* right Education */}
      
    <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#dfdfdf] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-black">3</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-800" tabIndex={2} role="link">2020-2024</span>
        <span className="text-sm text-slate-800">BS 4 year program (completed)</span>
    </div>
      <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-5 px-5 overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <div className=" text-left">
      <h2 className='block text-2xl font-bold text-black'>
      Adobe Creative Suite - Essentials
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-800">Linkedin Learning
</p>
    </div>
  {/* <img className="object-cover w-full h-62" src="/timeline/uni.jpeg" alt="avatar" /> */}
  <ul className=" text-left px-2">
  <li className="text-md list-disc text-gray-900">
   Good Hands on Adobe Softwares</li>
  
  </ul>
</div>

      </div>
    </div>
  </div>
</div>
</section>


    </>
  )
}

export default Education