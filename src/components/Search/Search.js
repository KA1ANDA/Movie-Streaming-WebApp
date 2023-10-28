import React, { memo, useEffect, useState } from 'react';
import { useGetSearchQuery } from '../../Redux/API/api';





const Search = memo(() => {
  const [value , setValue] = useState('')
  
  const {data} = useGetSearchQuery(value)

  const setSearchValue = (event) =>{
    setValue(event.target.value)
  }

  const searchResult = data?.results.filter(res => res.media_type != 'person')
 

  return (
    <div className='bg-red-400 m-auto w-[50%] '>
      <input type='text' onChange={setSearchValue}></input>
      <div className=' max-h-[700px] overflow-auto'>
        {searchResult?.map(res =>
        <div className='w-full h-[100px] flex  bg-green-500'>
          <img src={`https://image.tmdb.org/t/p/original/${res.poster_path}`}/>
          <div>
            <div>{res.media_type=='movie' ? res.title : res.name}</div>
            <div>{res.media_type}</div>
          </div>    
        </div>
        )      
        }
      </div>
    </div>   
  );
})

export default Search;
