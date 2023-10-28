import React, { memo, useEffect, useState } from 'react';
import { useGetPeopleQuery } from '../../Redux/API/Endpoints/peopleApi';
import Person from './Person';
import { setPeopleResults, setPersonId, setResetPeopleResults, setSearchPage } from '../../Redux/Slices/peopleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchPerson from './SearchPerson';






const People = memo(() => {
  const dispatch = useDispatch()

  const {newPeopleResults , newSearchResult , searchPage} = useSelector(state => state.peopleSlice)
  const [page , setPage] = useState(1)

  const {data} = useGetPeopleQuery(page)

  const incrementPage = () => {
    if(newSearchResult?.length>0){
      return dispatch(setSearchPage(searchPage+1))
    }else{
      return setPage(page+1)
    }
  }


  useEffect(()=>{
    dispatch(setPeopleResults(data?.results))
  },[data?.results])



  const peopleResult = newSearchResult?.length>0 ? newSearchResult : newPeopleResults

  console.log(newSearchResult)

  return (
    <div>
      <SearchPerson page={searchPage}/>
      <div className="bg-red-300 grid grid-cols-5 gap-[75px]">
        {peopleResult?.map(person => <NavLink to={'/People/actor'}><Person  dispatch={dispatch} data={person}/></NavLink>) }
      </div>   
      <button className='bg-red-500 w-full' onClick={incrementPage}>load more</button>
    </div>
      
  );
})

export default People;
