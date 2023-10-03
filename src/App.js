import React, { useEffect, useState } from 'react';
import { useGetCompaniesInfoQuery, useGetMyAccountInfoQuery } from './Redux/api';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { setProfileId } from './Redux/Slices/profileSlice';
import NewMoviesSlider from './components/JustRealeseMovies/NewMoviesSlider';
import TrendingMoviesSlider from './components/TrendingMovies/TrendingMoviesSlider';
import TopRaitedMovies from './components/TopRaited/TopRaitedMovies';


function App() {

  const dispatch = useDispatch()

 

  const {data , isLoading} = useGetMyAccountInfoQuery()



  useEffect(() => { 
    if (data) {
      dispatch(setProfileId(data.id));
    }
  }, [data , dispatch  ]);

  return (
    <div className="  bg-slate-500 px-[75px] pt-[40px] flex flex-col gap-[70px]">
      <Main/>
      <NewMoviesSlider /> 
      <TrendingMoviesSlider />
      <TopRaitedMovies />
    </div>
  );
}

export default App;
