import React, { memo } from 'react';
import WatchButton from '../Buttons/WatchButton';
import WatchlistButton from '../Buttons/WatchlistButton';

import { useGetMovieGenresQuery } from '../../Redux/API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setTrailerKey, setWatchTrailerToggle } from '../../Redux/Slices/movieSlice';
import { useGetMovieTrailerQuery } from '../../Redux/API/Endpoints/selectedMovieApi';
import { useGetTvTrailerQuery } from '../../Redux/API/Endpoints/tvSeriesApi';




const SelectedMovie = memo(({movie}) => {

  const dispatch = useDispatch()

  const {movieId , tvId} = useSelector(state => state.movieSlice)


  const trailer = useGetMovieTrailerQuery(movieId)
  const tvtrailer = useGetTvTrailerQuery(tvId)


  

  const {data} = useGetMovieGenresQuery()
  
 
  const toggle = () =>{
    dispatch(setWatchTrailerToggle(true))
    if(movie.first_air_date){
      const video = tvtrailer.data?.results.filter(video => video.type==="Trailer" )
      dispatch(setTrailerKey(video[0].key))
    }else{
      const video = trailer.data?.results.filter(video => video.type==="Trailer" )
      dispatch(setTrailerKey(video[0].key))
    }
   
  
  }
  
  
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
              <div onClick={toggle}>Watch Trailer</div>
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
