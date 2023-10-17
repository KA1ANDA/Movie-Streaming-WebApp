import React, { memo } from 'react';
import VoteAndGenres from '../common/VoteAndGenres';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../Redux/Slices/movieSlice';



const MainSlide = memo(({ movie }) => {

  
  const dispatch = useDispatch()

  const setId = () => {
    dispatch(setMovieId(movie.id))
  }

  return (
   
    <NavLink to='/Movie' onClick={setId} className=' relative bg-blue-500'>
      <img  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
      <div className=' bottomGradient text-white flex flex-col items-start justify-end '>
        <div>{movie.title}</div>
        <VoteAndGenres  movie={movie} />
      </div> 
    </NavLink>
  
     
  );
})

export default MainSlide;
