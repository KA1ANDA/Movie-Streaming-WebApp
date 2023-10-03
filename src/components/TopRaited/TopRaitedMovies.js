import React, { memo, useEffect, useRef, useState } from 'react';
import { useGetMovieGenresQuery, useGetTopRatedMoviesQuery } from '../../Redux/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './topRatedMoviesSwiper.css';
import {Navigation } from 'swiper/modules';
import MainSlide from '../Slides/MainSlide';
import { useSwiperSlide } from 'swiper/react';


const TopRaitedMovies = memo(() => {

  const genres = useGetMovieGenresQuery()
  const {data} = useGetTopRatedMoviesQuery()

  const [index , setIndex] = useState(0)



  const indexIncrement = () => {
    setIndex(index+1)
  } 

  const indexDecrement = () => {
    setIndex(index-1) 
  } 


  
  return (
    <div className=" bg-blue-300">
      {data && 
        <>
          <div>
            <div>{data.results[index].title}</div>
          </div>
          <Swiper onNavigationNext={indexIncrement} onNavigationPrev={indexDecrement} navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="topRatedMoviesSwiper">
          {data.results.map(movie =>
            <SwiperSlide key={movie.id}  className='topRatedMoviesSlide' >

              <MainSlide  genres={genres} movie={movie}  />
          

            </SwiperSlide>)}  
          

            <div className='riightGradient '> </div> 
          </Swiper>
        </>
      }
      
    </div>
  );
})

export default TopRaitedMovies;
