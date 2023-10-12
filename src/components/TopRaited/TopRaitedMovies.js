import React, { memo, useEffect, useRef, useState } from 'react';
import { useGetMovieGenresQuery, useGetTopRatedMoviesQuery } from '../../Redux/API/api';
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

  const movieInfo = data?.results[index]
  
  return (
    <div className='flex items-center -mx-[75px] bg-blue-300 h-[848px]  relative overflow-hidden '>  
     
      
      {data && genres &&
      
        <>
           <img className=' absolute w-full ' src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}/>
     
          <div className='bg-green-500 z-50 w-[50%]'>
            <div>{movieInfo.title}</div>
            <div>
              <div>{movieInfo.vote_average}</div>
              <div>{genres.data.genres.filter(genre => movieInfo.genre_ids.includes(genre.id)).map(el => el.name)}</div>
              <div>{movieInfo.overview}</div>
            </div>
          </div>
          <Swiper onNavigationNext={indexIncrement} onNavigationPrev={indexDecrement} navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="topRatedMoviesSwiper">
          {data.results.map(movie =>
            <SwiperSlide key={movie.id}  className='topRatedMoviesSlide' >

              <MainSlide  movie={movie}  />
          

            </SwiperSlide>)}  
          

            <div className='riightGradient '> </div> 
          </Swiper>
        </>
      }
      
    </div>
  );
})

export default TopRaitedMovies;
