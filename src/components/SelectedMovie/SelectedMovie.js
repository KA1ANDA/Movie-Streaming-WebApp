import React, { memo } from 'react';
import WatchButton from '../Buttons/WatchButton';
import WatchlistButton from '../Buttons/WatchlistButton';

import { useGetMovieGenresQuery } from '../../Redux/API/api';




const SelectedMovie = memo(({movie}) => {

  const {data} = useGetMovieGenresQuery()
  


  return (
      <div className=" h-[648px] relative bg-green-500  overflow-hidden">
        <div className='w-[300px] absolute'>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
        </div>        
        <div className=' absolute bg-red-300 bottom-[0px] flex'>
          <div>
            <div>{movie.title}</div>
            <div>{movie.genres.map(genre => genre.name)}</div>
            <div>{movie.overview}</div>
            <div>
              <WatchButton />
              <WatchlistButton />
            </div>   
          </div>
          <div>
            <div>dowload</div>
            <div>share</div>
            <div>like</div>
          </div>
        </div>
        <img className=" " src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/> 
       
      </div>   
  );
})

export default SelectedMovie;
