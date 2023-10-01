import React, { useEffect, useState } from 'react';
import { useGetCompaniesInfoQuery, useGetMyAccountInfoQuery } from './Redux/api';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { setProfileId } from './Redux/Slices/profileSlice';
import NewMoviesSlider from './components/JustRealeseMovies/NewMoviesSlider';


function App() {

  const dispatch = useDispatch()

 

  const {data , isLoading} = useGetMyAccountInfoQuery()
  const companyInfo = useGetCompaniesInfoQuery()

  console.log(companyInfo)

  useEffect(() => { 
    if (data) {
      dispatch(setProfileId(data.id));
    }
  }, [data , dispatch  ]);

  return (
    <div className="  bg-slate-500 px-[75px] pt-[40px] ">
      <Main/>
      <NewMoviesSlider /> 
    </div>
  );
}

export default App;
