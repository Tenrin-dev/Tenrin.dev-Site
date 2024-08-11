import React from 'react'
import { VideGallery } from './VideoGallery'

const Video = () => {
  return (
    <section id='video' className="bg-white ">
  <div className="container px-6 py-10 mx-auto">
  <div className='flex flex-col md:flex-row item-center gap-10 pb-10'>
<div className='flex md:inline-block justify-center'>

<h1 className="text-xl inline-block text-center md:text-left font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg capitalize lg:text-xl">Videos Portfolio</h1>
</div>
<p className="text-black text-center md:text-left text-sm max-w-xl">Adept at crafting compelling video content and animations, showcasing a keen eye for detail and storytelling
</p>
</div>
<VideGallery/>
    {/* <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/sitBdgxfA1hRCHLerI4qbxItWmo.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/pQ0TQ2kOubRCnbTTdcwOzcTBJE.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/2trgaI7ULvrFIJKo1Ers08pt9pA.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/sitBdgxfA1hRCHLerI4qbxItWmo.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/sitBdgxfA1hRCHLerI4qbxItWmo.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
      <div className="flex shadow-[10px_10px_2px_0px_black] transition-colors duration-300 transform cursor-pointer rounded-3xl hover:border-transparent group hover:bg-[#afe916]">

        <video src="https://framerusercontent.com/assets/sitBdgxfA1hRCHLerI4qbxItWmo.mp4" loop controls muted playsInline style={{cursor: 'auto', borderRadius: 22, display: 'block', objectFit: 'contain', backgroundColor: 'rgba(0, 0, 0, 0)'}} />

     
        
      </div>
    </div> */}
 
  </div>
</section>
  )
}

export default Video