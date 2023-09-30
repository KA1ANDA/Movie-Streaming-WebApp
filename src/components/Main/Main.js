import React from 'react';
import Navigation from './Navigation';
import { useGetMovieGenresQuery, useGetPopularMoviesQuery } from './../../Redux/api';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';



function Main() {
  console.log('ki')

  const genres = useGetMovieGenresQuery()
  const {data} = useGetPopularMoviesQuery()
 
  const movies = data?.results?.slice(0, 5);
  

  

  return (
    <div className=" -mx-[75px] -my-[40px] h-[848px]  relative  " >
      <Navigation />
      <Swiper pagination={true}  modules={[Pagination]}  className="mySwiper"    >
        
        {data && movies.map( movie => 
        <SwiperSlide className='' >
          <img className=" " src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/> 
          <div className="gradienti px-[75px] text-white">
            <div className=' border absolute border-red-500 bottom-[150px] w-[500px]'>
              <div>{movie.original_title}</div>
              <div className=' flex justify-center'>
                <div>{movie.release_date}</div>
                {genres && 
                  <div>{genres.data.genres.filter(genre => movie.genre_ids.includes(genre.id)).map(el => el.name)}</div>
                }
              </div>
         
              <div>{movie.overview}</div>
            

      
              
              <div></div>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );


}

export default Main;
