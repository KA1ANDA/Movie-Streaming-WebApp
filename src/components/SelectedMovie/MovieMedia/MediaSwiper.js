import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './mediaSwiper.css'
// import './commonSwiper.css';
import {Navigation } from 'swiper/modules';





const MediaSwiper = memo(({data}) => {


  
  return (
    <>
     
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={'auto'} className='mediaSwiper'>
      {data && data.map( image => 
      <SwiperSlide className='mediaSlide' >
        <img  src={`https://image.tmdb.org/t/p/original/${image.file_path}`}/>
      </SwiperSlide>  
      )}
      
     </Swiper>   

    </>
     
  );
})

export default MediaSwiper;
