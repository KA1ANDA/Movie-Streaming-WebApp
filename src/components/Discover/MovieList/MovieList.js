import React, { memo } from 'react';
import MainSlide from '../../Slides/MainSlide';
import { useSelector } from 'react-redux';
import { useGetMovieFilteredQuery } from '../../../Redux/API/api';





const MovieList = memo(({}) => {
  const {sortOption, filterParams} = useSelector(state => state.movieFilterSlice)

  const {data} = useGetMovieFilteredQuery({
    sortOption,
    filterParams
  })

  console.log(data)
  return (
      <div className="bg-purple-500 w-full grid grid-cols-4 gap-[50px]" >
        {data && data.results.map(movie => 
        
          <MainSlide  movie={movie}/>
       )}
      </div>   
  );
})

export default MovieList;
