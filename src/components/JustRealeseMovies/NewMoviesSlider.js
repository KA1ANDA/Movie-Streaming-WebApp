import React from 'react';
import { useGetLatestMoviesQuery } from '../../Redux/api';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './newMoviesSwiper.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function NewMoviesSlider() {

  const {data} = useGetLatestMoviesQuery()

  return (
    <div className="-mr-[75px]">
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={8} spaceBetween={20} className="newMoviesSwiper">
      {data && data.results.map(movie =>
         <SwiperSlide className='newMovieSwiper' >
          <img  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/> 
         </SwiperSlide>)}        
      </Swiper>
    </div>
  );
}

export default NewMoviesSlider;
