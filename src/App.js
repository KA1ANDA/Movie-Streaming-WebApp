import React, { useEffect, useState } from 'react';
import { useGetMyAccountInfoQuery } from './Redux/API/api';
import Main from './components/Main/Main';
import { useDispatch } from 'react-redux';
import { setProfileId } from './Redux/Slices/profileSlice';
import { setGenres } from './Redux/Slices/movieSlice';
import Footer from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import MoviePage from './components/Pages/MoviePage';
import { Navigation } from 'swiper/modules';
import NavList from './components/Main/NavList';



function App() {

  const dispatch = useDispatch()


  const {data , isLoading} = useGetMyAccountInfoQuery()





  useEffect(() => { 
    if (data) {
      dispatch(setProfileId(data.id));
    }
  }, [data , dispatch  ]);


  return (
    <div className="  bg-slate-500   flex flex-col gap-[70px]">
      <NavList />
      
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Movie" element={<MoviePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
