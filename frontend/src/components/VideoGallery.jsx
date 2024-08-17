import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import '../App.css';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import lgVideo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import { useEffect, useState } from 'react';
import { useGetVideosQuery } from '../redux/Api/VideoApi';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const VideGallery = () => {
  const {data,error,isLoading,isFetching,refetch} = useGetVideosQuery()
  const [videos,setVideos] = useState([])

  useEffect(() => {
    // fjGallery(document.querySelectorAll('.gallery'), {
    //   itemSelector: '.gallery__item',
    //   rowHeight: 280,
    //   lastRow: 'start',
    //   gutter: 15,
    //   rowHeightTolerance: 0.1,
    //   calculateItemsHeight: false,
    // });

    Fancybox.bind("[data-fancybox]");
    // console.log("data",data) 
    setVideos(data)
  }, []);
  return (
    <div className="App">

      <div className='grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-3'>
      {data?.data?.map((item)=>(
        <a key={item._id} href={item?.url} data-fancybox="gallery" data-caption={item?.description}>
        <img src={item?.poster} className='rounded-md shadow shadow-black' />
        </a>
      ))}

      </div>
    </div>
  );
};
