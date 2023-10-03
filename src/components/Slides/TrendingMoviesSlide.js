import React, { memo } from 'react';



const TrendingMoviesSlide = memo(({posterPath , title , voteAverage , genres , movie , mediaType}) => {


  return (
    <>
    <div>
      1
    </div>
    <div className='bg-green-300 flex items-end justify-center  '>
      <img src={`https://image.tmdb.org/t/p/original/${posterPath}`}></img>
        <div className='flex flex-col bg-blue-500'>
          <div>{title}</div>
          <div>genre</div>
          <div>
            <div>{voteAverage}</div>
            <span>{mediaType}</span>
          </div>
        </div>
    </div>
    </>
  );
})

export default TrendingMoviesSlide;
