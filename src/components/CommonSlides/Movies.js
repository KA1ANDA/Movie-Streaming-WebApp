import React, { memo } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useGetMovieGenresQuery, useGetPopularMoviesQuery } from '../../Redux/API/api';

import CommonSlide from '../Slides/CommonSlide';


const Movies = memo(() => {

  const {data} = useGetPopularMoviesQuery()
  
  return (
    
    <div className=''>  
     <div>Movies</div>
     {data &&  <CommonSlide  data={data}/> }
    </div>
  );
})

export default Movies;
