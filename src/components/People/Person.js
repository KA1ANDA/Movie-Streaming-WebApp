import React, { memo, useEffect } from 'react';
import { setPersonId, setResetPeopleResults } from '../../Redux/Slices/peopleSlice';





const Person = memo(({data , dispatch }) => {



  const setPerson = (id) =>{
    dispatch(setPersonId(id))
  }


  return (
      <div onClick={()=>setPerson(data.id)} className="">

        <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}/>
        <div>{data.name}</div>
        <div>{  
        data.known_for.map(movie => movie.media_type==='movie' ?  movie.title : movie.name)
        }</div>
        

      </div>   
  );
})

export default Person;
