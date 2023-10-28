import React, { memo, useEffect, useState } from 'react';
import { useGetPeopleQuery, useGetSearchedPersonQuery } from '../../Redux/API/Endpoints/peopleApi';
import Person from './Person';
import { setPeopleResults, setPersonId, setResetPeopleResults, setSearchPage, setSearchResult } from '../../Redux/Slices/peopleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';






const SearchPerson = memo(({page ,}) => {
  const dispatch = useDispatch()
  const [value , setValue] = useState()
  
  const {data} = useGetSearchedPersonQuery({
    value,
    page
  })


  const setSearchValue = (event) =>{
    setValue(event.target.value)
    dispatch(setSearchPage(1))
  }


  useEffect(()=>{

    dispatch(setSearchResult(data?.results))
    
  
  },[dispatch , data])

  console.log(data)

  return (
    <div>
      <input type='text' onChange={setSearchValue} ></input>
    </div>
      
  );
})

export default SearchPerson;
