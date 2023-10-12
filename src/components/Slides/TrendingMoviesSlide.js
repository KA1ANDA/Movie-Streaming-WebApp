import React, { memo } from 'react';
import VoteAndGenres from '../common/VoteAndGenres';



const TrendingMoviesSlide = memo(({posterPath , title  , movie , mediaType}) => {


  return (
    <>
    <div>
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
    </>
  );
})

export default TrendingMoviesSlide;
