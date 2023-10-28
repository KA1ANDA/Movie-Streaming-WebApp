import React, { memo, useState } from 'react';
import VoteAndGenres from '../common/VoteAndGenres';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovieId, setTvId } from '../../Redux/Slices/movieSlice';



const MainSlide = memo(({ movie }) => {

  
  const dispatch = useDispatch()

 

  const setId = (id) => {
    dispatch(setMovieId(id))
  }

  const setTvSeriesId = (id) => {
    dispatch(setTvId(id))
  }

  return (
   
    <NavLink  to={`${movie.first_air_date ? '/tv' : '/Movie'}`} onClick={() => movie.first_air_date ? setTvSeriesId(movie.id) : setId (movie.id) }   className='relative  '>
      <img loading='lazy'  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
      <div className=' bottomGradient text-white flex flex-col items-start justify-end '>
        <div>{movie.title}</div>
        <VoteAndGenres  movie={movie} />
      </div> 
    </NavLink>
  
     
  );
})

export default MainSlide;
