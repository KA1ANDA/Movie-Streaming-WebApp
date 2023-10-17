import React, { memo, useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './trendingMoviesSwiper.css';

import { Autoplay, Navigation } from 'swiper/modules';
import { useGetMovieGenresQuery, useGetMoviesQuery, useGetTrendingMoviesQuery } from '../../Redux/API/api';
import TrendingMoviesSlide from '../Slides/TrendingMoviesSlide';



const TrendingMoviesSlider = memo(() => {

  const [time , setTime] = useState('day')

  const {data} = useGetTrendingMoviesQuery(time)
 


  const trendingDay = useRef('')
  const trendingWeek = useRef('')



  const TrendingMoviesTime = useCallback ((value) => {
    setTime(value)
  })

  return (
    <div className="-mr-[75px]">
     <div className='flex'>
        <div>Popular of the </div>
        <div onClick={() => TrendingMoviesTime(trendingDay.current.textContent)} ref={trendingDay}>day</div>
        <div onClick={() => TrendingMoviesTime(trendingWeek.current.textContent)} ref={trendingWeek}>week</div>
     </div>
     <Swiper navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="trendingMoviesSwiper">
      {data && data.results.map(movie => 
      <SwiperSlide className='trendingMoviesSlide' >
        <TrendingMoviesSlide posterPath={movie.poster_path} title={movie.title} voteAverage={movie.vote_average}  movie={movie} mediaType={movie.media_type}/>
      </SwiperSlide>  
      )}
      <div className='riightGradient '> </div> 
     </Swiper>
    </div>
  );
})

export default TrendingMoviesSlider;
