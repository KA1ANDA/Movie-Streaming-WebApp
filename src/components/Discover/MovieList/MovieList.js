import React, { memo, useEffect, useState } from 'react';
import MainSlide from '../../Slides/MainSlide';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieFilteredQuery } from '../../../Redux/API/api';
import { setMovieResults } from '../../../Redux/Slices/movieFilterSlice';





const MovieList = memo(({}) => {
  const dispatch = useDispatch()
  const {sortOption, filterParams  , newMovieResults} = useSelector(state => state.movieFilterSlice)
  const [page , setPage] = useState(1)

  const {data} = useGetMovieFilteredQuery({
    sortOption,
    filterParams,
    page
  })

  const incrementPage = () => {
    setPage(page+1)
  }

  useEffect(()=>{

    dispatch(setMovieResults( data?.results))
  
  },[dispatch , data])

  return (
      <div className="bg-purple-500 w-full " >
        <div className='grid grid-cols-4 gap-[50px]'>
        {newMovieResults && newMovieResults.map(movie => 
        
        <MainSlide  movie={movie}/>
        )}
        </div>
        
        <button className='bg-red-500 w-full' onClick={incrementPage}>load more</button>
      </div>   
  );
})

export default MovieList;
