import React, { memo } from 'react';
import Filter from '../Discover/Filter/Filter';
import MovieList from '../Discover/MovieList/MovieList';






const DiscoverPage = memo(() => {
 

  return (
      <div className="  bg-slate-500 px-[75px] mt-[150px]  flex">
       <Filter/>
       <MovieList  />
        
      </div>   
  );
})

export default DiscoverPage;
