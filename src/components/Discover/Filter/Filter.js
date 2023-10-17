import React, { memo } from 'react';
import Sort from './Sort';
import Filters from './Filters';
import { useGetMovieFilteredQuery } from '../../../Redux/API/api';
import { useSelector } from 'react-redux';





const Filter = memo(() => {
 

  return (
      <div className="bg-green-500 ">
        <Sort />
        <Filters />
      </div>   
  );
})

export default Filter;
