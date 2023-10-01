import React from 'react';
import Navigation from './Navigation';
import { useAddToWatchlistMutation, useGetMovieGenresQuery, useGetPopularMoviesQuery } from './../../Redux/api';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';



function Main() {
  
  const {profileId} = useSelector (state => state.profileSlice)
  const genres = useGetMovieGenresQuery()

  const {data} = useGetPopularMoviesQuery()
 
  const [idValues] = useAddToWatchlistMutation()

  
  const movies = data?.results?.slice(0, 5);

  const addToWatchList = (movieId) => {
    const params = {
      movieId,
      profileId
    }
    
    idValues(params)
  }

  return (
    <div className=" -mx-[75px] -mt-[40px] h-[848px]  relative  " >
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
              
              <div className='flex justify-center gap-5'>
                <button>Watch Trailer</button>
                <button onClick={() => addToWatchList(movie.id)}>Add Watchlist</button>
              </div>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
  );


}

export default Main;
