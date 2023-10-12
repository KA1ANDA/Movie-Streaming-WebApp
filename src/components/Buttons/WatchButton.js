import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setMovieId } from '../../Redux/Slices/movieSlice';




const WatchButton = memo(({id}) => {

  const dispatch = useDispatch()

  const setId = () => {
    dispatch(setMovieId(id))
  }

  return (
      <NavLink to='/Movie'>
         <button onClick={setId} className=" ">Play Now</button>   
      </NavLink>
     
  );
})

export default WatchButton;
