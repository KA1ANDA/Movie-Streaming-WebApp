import React, { memo } from 'react';
import { useGetPopularTvSeriesQuery, useGetTvSeriesGenresQuery } from '../../Redux/API/Endpoints/tvSeriesApi';
import 'swiper/css';
import 'swiper/css/navigation';
import { useGetMovieGenresQuery } from '../../Redux/API/api';

import CommonSlide from '../Slides/CommonSlide';


const TvSeries = memo(() => {

 
  const {data} = useGetPopularTvSeriesQuery()
  
  return (
    
    <div className=''>  
     <div>Tv Series</div>
     {data &&  <CommonSlide  data={data}/> }
    </div>
  );
})

export default TvSeries;
