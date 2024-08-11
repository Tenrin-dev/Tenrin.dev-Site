import React from 'react'
import './timeline.css'

const Work = () => {
  return (
    <>
{/* component */}
<section id='work' className="bg-white">

<div className="md:container mx-auto w-full h-full">
<div className='py-10 px-5'>

        <p className="mt-4 text-center text-slate-800">
        Professional Background
        </p>
        <h1 className="text-5xl font-bold py-2 text-center text-black capitalize lg:text-6xl ">Work Experience
        </h1>

</div>

  <div className="relative w-full wrap overflow-hidden p-10 h-full">
    <div className="border-2-2  absolute border-opacity-20 border-black h-full border md:left-[50%]"  />
    {/* right Work */}
      
   <div className="mb-8 mt-1 flex justify-between items-start w-full right-timeline">
      <div className="order-1 w-5/12 hidden md:block " />
      <div className="z-20 flex items-center order-1 bg-[#dfdfdf] shadow-xl -ml-4 md:ml-0 md:mr-0 mr-2 w-28 md:w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-black">1</h1>
      </div>
      <div className="order-1 md:w-5/12">
      <div className=" px-1 pb-2 text-left md:absolute right-time">
        <span className="block text-xl font-bold text-slate-800" tabIndex={0} role="link">2022-2024</span>
        <span className="text-sm text-slate-800">Graphic Designer</span>
    </div>
      <div data-aos="fade-left"
     data-aos-duration="500" className="w-full py-5 px-5 overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <div className=" text-left">
      <h2 className='block text-2xl font-bold text-black'>
      SportsKeeda
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-800">Senior Graphic Specialist
</p>
    </div>
  {/* <img className="object-cover w-full h-62" src="/timeline/uni.jpeg" alt="avatar" /> */}
  <ul className=" text-left px-2 list-disc">
    <li className="text-md list-disc text-gray-900">
Manage Visual Communication, Branding, and Design for both print and digital media</li>
<li className="text-md list-disc text-gray-900">
Created compeling visiuals with a keen eye for detail, ensuring a lasting impact.</li>
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
        <span className="block text-xl font-bold text-slate-800" tabIndex={0} role="link">2017-2022</span>
        <span className="text-sm text-slate-800">Designer/social Media </span>
    </div>
      <div data-aos="fade-right"
     data-aos-duration="500" className="w-full py-10 px-5 overflow-hidden rounded-lg shadow-lg bg-gray-100">
      <div className=" px-2 text-left">
      <h2 className='block text-3xl font-bold text-black'>
      Velocity IT
      </h2>
    <p className="py-2 block text-lg font-bold text-gray-800">
    Graphic Designer & social Media Manager
</p>
    </div>
  {/* <img className="object-cover w-full h-54 aspect-square" src="/timeline/law.jpg" alt="avatar" /> */}
  <div className=" text-left">
  <ul className=" text-left px-2">
    <li className="text-md list-disc text-gray-900">
    Created Visual Concept and utilized computer software to design layouts for print and digital media</li>
    <li className="text-md list-disc text-gray-900">
   Prepared Finished Art work, ensuring high standards of quality and visual appeal.</li>
  </ul>
  </div>
</div>

      </div>
    </div>

    
  </div>
</div>
</section>


    </>
  )
}

export default Work