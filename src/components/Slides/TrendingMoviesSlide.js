import React, { memo } from 'react';
import VoteAndGenres from '../common/VoteAndGenres';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../Redux/Slices/movieSlice';



const TrendingMoviesSlide = memo(({posterPath , title  , movie , mediaType}) => {

  const dispatch = useDispatch()

  const setId = () => {
    dispatch(setMovieId(movie.id))
  }

  return (
    <NavLink to='/Movie' onClick={setId} className='flex'>
    <div className='flex items-center'>
      1
    </div>
    <div className='bg-green-300 flex items-end justify-center  '>
      <img src={`https://image.tmdb.org/t/p/original/${posterPath}`}></img>
        <div className='flex flex-col bg-blue-500'>
          <div>{title}</div>
          <VoteAndGenres  movie={movie} />
          <span>{mediaType}</span>
          
        </div>
    </div>
    </NavLink>
  );
})

export default TrendingMoviesSlide;
