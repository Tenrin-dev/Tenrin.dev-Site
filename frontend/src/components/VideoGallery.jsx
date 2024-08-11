import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import '../App.css';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import lgVdeo from 'lightgallery/plugins/video';
import fjGallery from 'flickr-justified-gallery';
import { useEffect, useState } from 'react';
import { useGetVideosQuery } from '../redux/Api/VideoApi';

export const VideGallery = () => {
  const {data,error,isLoading,isFetching,refetch} = useGetVideosQuery()
  const [videos,setVideos] = useState([])

  useEffect(() => {
    fjGallery(document.querySelectorAll('.gallery'), {
      itemSelector: '.gallery__item',
      rowHeight: 280,
      lastRow: 'start',
      gutter: 15,
      rowHeightTolerance: 0.1,
      calculateItemsHeight: false,
    });
    console.log("data",data) 
    setVideos(data)
  }, []);
  return (
    <div className="App">
      <LightGallery
        plugins={[lgZoom, lgShare, lgHash, lgVdeo]}
        speed={500}
        elementClassNames={'gallery grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-3'}
      >

      {data?.data?.map((item)=>(
        <>
        <a
          className={'gallery__item'}
          data-lg-size="1280-720"
          data-pinterest-text="Pin it3"
          data-tweet-text={item?.description}
          data-src={item.url}
          data-poster={item?.poster}
          data-sub-html={item?.description}
        >
          <img
            className="img-responsive h-64 object-cover object-center"
            src={item.poster}
          />
        </a>
       
        </>
        
      ))}
        
      </LightGallery>
    </div>
  );
};
