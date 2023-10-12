import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './actorsSwiper.css';
import {Navigation } from 'swiper/modules';



const Actors = memo(({actors}) => {


  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="actorsSwiper">
      {actors && actors.map(actor =>  
      <SwiperSlide className='actorsSlide' >
        <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}/>
        <div>{actor.name}</div>
        <div>{actor.character}</div>
      </SwiperSlide>
      )}
      
    </Swiper>
  );
})

export default Actors;
