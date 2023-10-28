import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './actorsSwiper.css';
import {Navigation } from 'swiper/modules';
import { setPersonId } from '../../Redux/Slices/peopleSlice';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



const Actors = memo(({actors}) => {
  const dispatch = useDispatch()

  const setPerson = (id) =>{
    dispatch(setPersonId(id))
  }
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={'auto'} spaceBetween={20}  className="actorsSwiper">
      {actors && actors.map(actor =>  
      <SwiperSlide   className='actorsSlide' >
        <NavLink  onClick={()=>setPerson(actor.id)} to={'/People/actor'}>
        <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}/>
        <div>{actor.name}</div>
        <div>{actor.character}</div>
        </NavLink>
       
      </SwiperSlide>
      )}
      
    </Swiper>
  );
})

export default Actors;
