import React, { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './knownForMoviesSwiper.css';
import { NavLink } from 'react-router-dom';
import { setMovieId, setTvId } from '../../../Redux/Slices/movieSlice';
import { useDispatch } from 'react-redux';




const KnownForMovies = memo(({knownFor}) => {

  const dispatch = useDispatch()
  const setId = (id) => {
    dispatch(setMovieId(id))
  }
  const setTvSeriesId = (id) => {
    dispatch(setTvId(id))
  }

  return (
      <div className="">
        <Swiper  slidesPerView={'auto'} spaceBetween={20}  className="knownForMoviesSwiper">
        {knownFor && knownFor.map(credit =>
      
        <SwiperSlide className='knownForMoviesSlide' >
          <NavLink to={`${credit.first_air_date ? '/tv' : '/Movie'}`} onClick={() => credit.first_air_date ? setTvSeriesId(credit.id) : setId (credit.id) } >
            <div className=' bg-blue-300 '>
              <img  src={`https://image.tmdb.org/t/p/original/${credit.poster_path}`}/>
              <div>{credit.title ? credit.title : credit.name}</div>
            </div>
          </NavLink>
          
       
        </SwiperSlide>  
     
      )}
     
     </Swiper>   
       
        
      </div>   
  );
})

export default KnownForMovies;
