import React, { memo, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import './ganresSwiper.css';

import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { setGenreId } from '../../Redux/Slices/movieSlice';






const GenresSwiper = memo(({genres ,indexIncrement , indexDecrement , retry , }) => {


  const dispatch = useDispatch()
  const genresSwiper = document.getElementById("GenresSwiper")
  const movies = genresSwiper?.querySelector(".swiper-wrapper")
  const activeSlide = movies?.querySelector(".swiper-slide-active")
  const activeSlideId = activeSlide?.getAttribute("id");

  useEffect(() => {
    dispatch(setGenreId(activeSlideId))
    console.log(activeSlideId)
  } , [dispatch , activeSlideId])
 
  ///jeshmariti ari ro is active romelicaa im filmis id gadavce !!!!!
  return (  
      <Swiper id='GenresSwiper'  loop={retry} slidesPerView={'auto'} onNavigationNext={indexIncrement} onNavigationPrev={indexDecrement} navigation={true}  modules={[Navigation]} spaceBetween={20}  className="genresSwiper">
      {genres && genres.genres.map(genre =>
         <SwiperSlide key={genre.id} id={genre.id} className='genresSlide' >
          <img src={``}/> 
          <div>{genre.name}</div>         
         </SwiperSlide>)}  
       
      </Swiper>
  );
})

export default GenresSwiper;
