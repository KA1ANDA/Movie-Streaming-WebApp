import React, { memo } from 'react';
import VoteAndGenres from '../common/VoteAndGenres';



const MainSlide = memo(({ movie }) => {

  return (
    <>
    <img  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
    <div className=' bottomGradient text-white flex flex-col items-start justify-end'>
      <div>{movie.title}</div>
      <VoteAndGenres  movie={movie} />
    </div> 
    </>
  );
})

export default MainSlide;
