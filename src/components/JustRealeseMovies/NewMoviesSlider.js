import React, { memo } from 'react';
import { useGetLatestMoviesQuery, useGetMovieGenresQuery } from '../../Redux/API/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './newMoviesSwiper.css';
import { Autoplay, Navigation } from 'swiper/modules';
import MainSlide from '../Slides/MainSlide';

const NewMoviesSlider = memo(() => {
  const genres = useGetMovieGenresQuery()
  const {data} = useGetLatestMoviesQuery()

  return (
    <div className="-mr-[75px] ">
      <div>Just Release</div>
    <Swiper  navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="newMoviesSwiper">
      {data && data.results.map(movie =>
         <SwiperSlide className='newMovieSlide' >

          <MainSlide genres={genres} movie={movie}/>

         </SwiperSlide>)}  

         <div className='riightGradient '> </div> 
      </Swiper>
       
    </div>
  );
})

export default NewMoviesSlider;
