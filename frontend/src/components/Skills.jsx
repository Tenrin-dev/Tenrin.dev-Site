import React from 'react'

const Skills = () => {
  return (
    <section id='skills' className="bg-white">
  <div className="container px-6 py-10 mx-auto">
  <div className='flex md:flex-row flex-col item-center gap-10'>
    <div className='flex md:block justify-center'>

    <h1 className="text-xl text-center md:text-left inline-block md:block font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg capitalize lg:text-xl ">Skills</h1>
    </div>
    <p className="text-black text-sm text-center md:text-left max-w-xl">
    Experienced in utilizing industry-standard tools like Adobe Creative Suite, Sketch, and Figma to bring creative concepts to life with precision and flair
    </p>
  </div>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-5">
      <div className="p-8 flex justify-center items-center border border-[#28292b] rounded-3xl shadow-md drop-shadow-md shadow-black hover:bg-black group transition-all">
        
       
        
       <div className=' flex-col flex justify-center items-center gap-3'>
        <img src="/skills/ps.png" width="0"
      height="0"
      sizes="100vw"
      className=" md:w-52 w-32 h-auto group-hover:scale-110 transition-all" 
        alt='service'
      />
      <h1 className="text-lg font-bold text-gray-700 capitalize group-hover:text-white text-center "><span className=' p-1 rounded'>Adobe Photoshop</span></h1>
       </div>

      
      </div>

<div className="p-8 flex justify-center items-center border border-[#28292b] rounded-3xl shadow-md drop-shadow-md shadow-black hover:bg-black group transition-all">
        
       
        
       <div className=' flex-col flex justify-center items-center gap-3'>
        <img src="/skills/pr.png" width="0"
      height="0"
      sizes="100vw"
      className=" md:w-52 w-32 h-auto group-hover:scale-110 transition-all" 
        alt='service'
      />
      <h1 className="text-lg font-bold text-gray-700 capitalize group-hover:text-white text-center "><span className=' p-1 rounded'>Adobe Premier Pro</span></h1>
       </div>

      
      </div>
      <div className="p-8 flex justify-center items-center border border-[#28292b] rounded-3xl shadow-md drop-shadow-md shadow-black hover:bg-black group transition-all">
        
       
        
       <div className=' flex-col flex justify-center items-center gap-3'>
        <img src="/skills/ae.png" width="0"
      height="0"
      sizes="100vw"
      className=" md:w-52 w-32 h-auto group-hover:scale-110 transition-all" 
        alt='service'
      />
      <h1 className="text-lg font-bold text-gray-700 capitalize group-hover:text-white text-center "><span className=' p-1 rounded'>Adobe After Effect</span></h1>
       </div>

      
      </div>
      <div className="p-8 flex justify-center items-center border border-[#28292b] rounded-3xl shadow-md drop-shadow-md shadow-black hover:bg-black group transition-all">
        
       
        
       <div className=' flex-col flex justify-center items-center gap-3'>
        <img src="/skills/ai.png" width="0"
      height="0"
      sizes="100vw"
      className=" md:w-52 w-32 h-auto group-hover:scale-110 transition-all" 
        alt='service'
      />
      <h1 className="text-lg font-bold text-gray-700 capitalize group-hover:text-white text-center "><span className=' p-1 rounded'>Adobe Illustrator</span></h1>
       </div>

      
      </div>
      <div className="p-8 flex justify-center items-center border border-[#28292b] rounded-3xl shadow-md drop-shadow-md shadow-black hover:bg-black group transition-all">
        
       
        
       <div className=' flex-col flex justify-center items-center gap-3'>
        <img src="/skills/ca.png" width="0"
      height="0"
      sizes="100vw"
      className=" md:w-52 w-32 h-auto group-hover:scale-110 transition-all" 
        alt='service'
      />
      <h1 className="text-lg font-bold text-gray-700 capitalize group-hover:text-white text-center "><span className=' p-1 rounded'>Canva Pro</span></h1>
       </div>

      
      </div>
   
      
    </div>
  </div>
</section>
  )
}

export default Skills