import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Navigation from './NavList';
import { useAddToWatchlistMutation, useGetMovieGenresQuery, useGetPopularMoviesQuery } from './../../Redux/API/api';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';
import WatchButton from '../Buttons/WatchButton';




const Main = memo(() => {
  
  const {profileId} = useSelector (state => state.profileSlice)
  const [movies , setMovies] = useState([])

  const genres = useGetMovieGenresQuery()
  const {data} = useGetPopularMoviesQuery()
  const [idValues] = useAddToWatchlistMutation()


 
  const addToWatchList = (movieId) => {
    const params = {
      movieId,
      profileId
    }
    
    idValues(params)
  }
  
  
  useEffect (() => {
    if(data){
      setMovies(data.results.slice(0, 5))
    }
  },[data])



  return (
    <div className=" -mx-[75px] -mt-[40px] h-[848px]  relative  " >
      <Swiper loop={true} pagination={true}  modules={[Pagination]}  className="mySwiper"    >
        
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
              
              <div className='flex justify-center gap-5'>
                <WatchButton  id={movie.id} />
                <button onClick={() => addToWatchList(movie.id)}>Add Watchlist</button>
              </div>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );


})

export default Main;
