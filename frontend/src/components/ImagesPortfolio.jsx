import React, { useEffect } from 'react'
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../App.css'
// import { Images } from './Images';
import { useGetGraphicsQuery } from '../redux/Api/GraphicApi';



const ImagesPortfolio = () => {
  const {data,error,isLoading,isFetching,refetch} = useGetGraphicsQuery()
 const [gallerys,setGallerys] = useState([])
  useEffect(()=>{
    setGallerys(data?.data?.map((item)=>({
      src: item?.url,
      original: item?.url,
      width: item?.width,
      height: item?.height,
      caption: item?.caption,
  })))
  },[data])

const slides = data?.data?.map(({ url, width, height }) => ({
  src: url,
  width,
  height,
}));

  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  
  return (
    <section id='graphic' className="bg-white ">
  <div className="container px-6 py-10 mx-auto">
  <div className='flex flex-col md:flex-row item-center gap-10 pb-10'>
<div className='flex md:inline-block justify-center'>

<h1 className="text-xl inline-block text-center md:text-left font-semibold text-gray-100 bg-black px-2 py-1 rounded-lg capitalize lg:text-xl">Graphic / Motion-Graphic Portfolio</h1>
</div>
<p className="text-black text-center md:text-left text-sm max-w-xl">Expertise in creating visually stunning designs and illustrations, with a strong focus on composition, color theory, and creativity, using tools like Adobe Photoshop and Illustrator.
</p>
</div>
    <div className='gallery-container'>
      <Gallery
        images={gallerys}
        onClick={handleClick}
        enableImageSelection={false}
        imageStyle={{ borderRadius: '100px' }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      
      />
    </div>
 
  </div>
</section>
  )
}

export default ImagesPortfolio