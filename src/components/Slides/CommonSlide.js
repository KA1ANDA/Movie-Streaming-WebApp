import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './commonSwiper.css';
import {Navigation } from 'swiper/modules';
import VoteAndGenres from '../common/VoteAndGenres';
import { useDispatch } from 'react-redux';
import { setMovieId } from '../../Redux/Slices/movieSlice';
import { NavLink } from 'react-router-dom';




const CommonSlide = memo(({data}) => {

  const dispatch = useDispatch()

  const setId = (id) => {
    dispatch(setMovieId(id))
  }

  
  return (
     <Swiper navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="comonSwiper">
      {data && data.results.map(movie => 
      
        <SwiperSlide className='comonSlide' >
          <NavLink to='/Movie' onClick={() => setId (movie.id)} >
            <img  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
            <div>
              <div>{movie.title}</div>
              <VoteAndGenres  movie={movie} />
            </div>
          </NavLink>
        </SwiperSlide>  
     
      )}
      <div className='riightGradient '> </div> 
     </Swiper>   
  );
})

export default CommonSlide;
