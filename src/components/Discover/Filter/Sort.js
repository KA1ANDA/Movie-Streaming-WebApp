import React, { memo, useEffect, useRef, useState } from 'react';
import { useGetMovieFilteredQuery } from '../../../Redux/API/api';
import { useDispatch } from 'react-redux';
import { setResetMovieResults, setSortOption } from '../../../Redux/Slices/movieFilterSlice';





const Sort = memo(() => {

  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState('popularity.desc'); 



  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

  }

  useEffect(()=>{
    dispatch(setSortOption(selectedOption))
    dispatch(setResetMovieResults())
  },[selectedOption])
 

  
  return (
      <div className="bg-blue-500 ">
        <div>Sort</div>
        <label>Sort Results By</label>
        <select onChange={handleChange}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="vote_average.desc">Rating Descending</option>
          <option value="vote_average.asc">Rating Ascending</option>
          <option value="primary_release_date.desc">Release Date Descending</option>
          <option value="primary_release_date.asc">Release Date Ascending</option>
          <option value="Title (A-Z)">Title (A-Z)</option>
          <option value="Title (Z-A)">Title (Z-A)</option>

        </select>
      </div>   
  );
})

export default Sort;
